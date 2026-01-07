'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';
import { useEffect, useState, useRef } from 'react';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}) {
  const [i18nInstance, setI18nInstance] = useState(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const i18n = createInstance();
      initTranslations(locale, namespaces, i18n, resources).then(() => {
        setI18nInstance(i18n);
        initialized.current = true;
      });
    }
  }, [locale, namespaces, resources]);

  // Escuchar cambios de idioma en el cliente y cargar recursos dinámicamente
  useEffect(() => {
    if (i18nInstance) {
      const loadingResources = new Set(); // Prevenir cargas duplicadas
      
      const handleLanguageChanged = async (lng) => {
        // Cargar los recursos del nuevo idioma si no están cargados
        for (const namespace of namespaces) {
          const resourceKey = `${lng}:${namespace}`;
          
          // Si ya está cargando o ya está cargado, saltar
          if (loadingResources.has(resourceKey) || i18nInstance.hasResourceBundle(lng, namespace)) {
            continue;
          }

          loadingResources.add(resourceKey);
          
          try {
            const module = await import(`../../locales/${lng}/${namespace}.json`);
            i18nInstance.addResourceBundle(lng, namespace, module.default, true, true);
          } catch (error) {
            console.error(`Error loading resources for ${lng}/${namespace}:`, error);
          } finally {
            loadingResources.delete(resourceKey);
          }
        }
      };

      i18nInstance.on('languageChanged', handleLanguageChanged);

      return () => {
        i18nInstance.off('languageChanged', handleLanguageChanged);
      };
    }
  }, [i18nInstance, namespaces]);

  if (!i18nInstance) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}