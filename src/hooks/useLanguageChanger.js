import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig"; // Asegúrate de que esto esté bien importado
import '@/app/i18n'
import { useRef } from 'react';

// El nombre debe empezar con 'use' para ser un Hook
export default function useLanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const isChanging = useRef(false);

  // Esta es la función que será devuelta por el Hook
  const handleChangeLanguage = async (newLocale) => {
    // Prevenir múltiples cambios simultáneos
    if (isChanging.current || newLocale === currentLocale) {
      return;
    }

    isChanging.current = true;

    try {
      // set cookie for next-i18n-router
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
      
      // Sincronizar con localStorage
      localStorage.setItem('language', newLocale);

      // Cargar los recursos antes de cambiar el idioma
      const namespaces = i18n.options.ns || ['Home', 'commons'];
      const loadPromises = [];
      
      for (const namespace of namespaces) {
        if (!i18n.hasResourceBundle(newLocale, namespace)) {
          const loadPromise = import(`../../locales/${newLocale}/${namespace}.json`)
            .then(module => {
              i18n.addResourceBundle(newLocale, namespace, module.default, true, true);
            })
            .catch(error => {
              console.error(`Error loading resources for ${newLocale}/${namespace}:`, error);
            });
          loadPromises.push(loadPromise);
        }
      }

      // Esperar a que todos los recursos estén cargados
      await Promise.all(loadPromises);

      // Cambiar el idioma en i18n después de que los recursos estén cargados
      // Usar changeLanguage con opciones para asegurar que espere a los recursos
      await i18n.changeLanguage(newLocale, () => {
        // Callback que se ejecuta después de que el idioma cambia
        // Verificar que los recursos estén disponibles
        for (const namespace of namespaces) {
          if (!i18n.hasResourceBundle(newLocale, namespace)) {
            console.warn(`Resource bundle ${newLocale}/${namespace} not loaded`);
          }
        }
      });
      
      // Refrescar la página para que el servidor cargue los recursos correctos
      router.refresh();
    } finally {
      // Permitir el siguiente cambio después de un pequeño delay
      setTimeout(() => {
        isChanging.current = false;
      }, 100);
    }
  };
  
  // El Hook devuelve la función que necesitas para cambiar el idioma
  return {
    handleChangeLanguage,
    currentLocale,
  }; 
}