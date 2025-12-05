/**
 * Helper para obtener rutas de assets que funcionen con el base path de GitHub Pages
 * Usa import.meta.env.BASE_URL que Vite proporciona automáticamente
 */
export const getAssetPath = (path: string): string => {
  // import.meta.env.BASE_URL ya incluye el / al final
  // Asegurarnos de que path no empiece con /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Helper para obtener rutas de imágenes
 * Las imágenes en public/images/ se sirven correctamente con el base path
 */
export const getImagePath = (imageName: string): string => {
  return getAssetPath(`images/${imageName}`);
};
