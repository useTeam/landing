# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

---

## [Unreleased]

### Planeado
- Actualización de contenido en sección Company
- Mejora de textos en landing principal
- Publicación de blog en Sanity: Hito Gravitad x UseTeam
- Temas estacionales (decoraciones para fechas especiales: Navidad, Halloween, aniversario, etc.)

---

## 2026-01-12

### Agregado
- ✅ **Componente GlowingEffect**
  - Animación de borde interactiva que sigue el mouse
  - Gradiente cónico con blur, spread y proximity configurables
  - Integrado en sección de grid principal

- ✅ **Utilidad cn() para clases Tailwind**
  - Helper para merge de clases con clsx y tailwind-merge

- ✅ **LenisProvider para smooth scroll global**
  - Provider con Context API para scroll suave en toda la app
  - Integrado en root layout

- ✅ **Componente Loader**
  - Spinner animado con texto personalizable
  - Listo para estados de carga

### Cambiado
- 🔄 **Unificación completa del sistema i18n**
  - Eliminación del language-context legacy
  - Nuevos archivos de traducción para blog y company
  - Estandarización de traducciones en toda la aplicación

- 🔄 **Migración de iconos a lucide-react**
  - Reemplazo de HeroIcons por lucide-react para consistencia

- 🔄 **Mejoras en Core Studios UI**
  - Integración de GlowingEffect
  - i18n para títulos y descripciones de cards

- 🔄 **Limpieza de footer**
  - Eliminados iconos de Twitter/X y Facebook
  - Logo-timeline simplificado (solo logo sin texto)

- 🔄 **Corrección de marca**
  - "useTeam" → "UseTeam" en toda la aplicación

- 🔄 **Mejoras en Footer**
  - Efecto de subrayado animado en links del sitemap
  - Icono de LinkedIn más grande (size-4 → size-6)
  - Transiciones y estados hover mejorados

- 🔄 **ScrollToTop actualizado**
  - Compatibilidad con Lenis smooth scroll

## 2026-01-08

### Agregado
- ✅ **Smooth Scrolling con Lenis**
  - Integración de librería Lenis en páginas blog, company y contact
  - Mejora de experiencia de navegación

### Cambiado
- 🔄 **Mejoras en Navbar y navegación móvil**
  - Altura dinámica del navbar según posición de scroll
  - Nuevos estilos para toggle de idioma
  - Prop `useCompanyStyles` para estilos condicionales
  - Nueva animación `navbar-fade-left` para transiciones

- 🔄 **Mejoras de layout y responsividad**
  - Ajustes en Hero, Core Studios y secciones principales
  - Mejoras de espaciado y alineación en breakpoints
  - Actualización de tamaños de texto en Hero
  - Refactorización de componentes container, footer y text

## 2026-01-07

### Agregado
- ✅ **Internacionalización (i18n) con i18next**
  - Implementación completa de i18next + react-i18next
  - Soporte para idiomas Inglés (EN) y Español (ES)
  - Configuración en `i18nConfig.js` con locale por defecto 'en'
  - Hook personalizado `useLanguageChanger` para cambio de idioma
  - Provider `TranslationProvider` para gestión de traducciones
  - Archivos de traducción en `locales/en/` y `locales/es/`
  - Toggle de idioma integrado en el Navbar

- ✅ **Componente ScrollToTop**
  - Botón flotante para volver al inicio de la página
  - Animación suave de aparición/desaparición
  - Integrado en layout y footer

- ✅ **Nuevos assets de logo**
  - Logo principal SVG con gradiente azul (`logo.svg`)
  - Logo grande para branding (`big-logo.svg`)
  - Estandarización del branding en layout y footer

### Cambiado
- 🔄 **Refactorización del sistema i18n**
  - Eliminación del middleware de routing por locale
  - Cambio de idioma sin refresh completo de página
  - Sincronización de idioma con localStorage y cookies
  - Prevención de cargas duplicadas de recursos con Set()

- 🔄 **Actualización de favicon**
  - Nuevo favicon para mejor identificación de marca

### Corregido
- 🐛 Fix de animación del Hero en carga inicial
- 🐛 Mejora de estabilidad en carga de traducciones
- 🐛 Corrección de link de LinkedIn en footer

## 2025-04-28

### Cambiado
- 🔄 **Actualización de Tailwind CSS a v4.1.4**

## 2025-04-10

### Cambiado
- 🔄 **Actualización de Tailwind CSS a v4.1.3**

## 2025-03-22

### Cambiado
- 🔄 **Actualización de Tailwind CSS a v4.0.15**

## 2025-02-10

### Cambiado
- 🔄 **Actualización de Tailwind CSS a v4.0.6**

## 2025-01-23

### Cambiado
- 🔄 **Actualización de Tailwind CSS a v4.0**

## 2024-10-07

### Cambiado
- 🔄 **Organización de datos de niveles en página de pricing**

## 2024-09-23

### Corregido
- 🐛 Formato de fecha incorrecto en página de blog post ([#1632](https://github.com/tailwindlabs/tailwind-plus-issues/issues/1632))
- 🐛 Imágenes actualizadas a rutas absolutas ([#1631](https://github.com/tailwindlabs/tailwind-plus-issues/issues/1631))

## 2024-09-13

### Cambiado
- 🔄 **Actualización de dependencias**

## 2024-09-12

### Agregado
- ✅ **Release inicial del proyecto**
