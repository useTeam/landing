import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig"; // Asegúrate de que esto esté bien importado
import '@/app/i18n'
// El nombre debe empezar con 'use' para ser un Hook
export default function useLanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  // Esta es la función que será devuelta por el Hook
  const handleChangeLanguage = async (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    
    // Sincronizar con localStorage
    localStorage.setItem('language', newLocale);

    // Cambiar el idioma en i18n y cargar los recursos
    await i18n.changeLanguage(newLocale);
    
    // Refrescar la página para que el servidor cargue los recursos correctos
    router.refresh();
  };
  
  // El Hook devuelve la función que necesitas para cambiar el idioma
  return {
    handleChangeLanguage,
    currentLocale,
  }; 
}