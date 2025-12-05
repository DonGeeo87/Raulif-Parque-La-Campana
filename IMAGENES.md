# 📸 Guía de Imágenes - Parque Nacional La Campana

Este documento explica cómo obtener y actualizar las imágenes del proyecto para que correspondan específicamente al Parque Nacional La Campana.

## 🎯 Estado Actual

Las imágenes actuales usan URLs de Unsplash con términos de búsqueda genéricos. Para tener imágenes **específicas** del Parque Nacional La Campana, se recomienda descargarlas desde Wikimedia Commons.

## 📥 Cómo Obtener las Imágenes Correctas

### Opción 1: Wikimedia Commons (Recomendado)

1. **Visita la categoría del Parque Nacional La Campana:**
   - https://commons.wikimedia.org/wiki/Category:Parque_Nacional_La_Campana

2. **Imágenes específicas recomendadas:**

   **Cover del Parque:**
   - Entrada al Parque: https://commons.wikimedia.org/wiki/File:Entrada_Parque_Nacional_La_Campana.jpg
   - Reserva Nacional: https://commons.wikimedia.org/wiki/File:Reserva_nacional_La_Campana,_un_lugar_para_descubrir.jpg

   **Sectores:**
   - Sector Ocoa: https://commons.wikimedia.org/wiki/File:Parque_Nacional_la_Campana_(48338252952).jpg
   - Cascada: https://commons.wikimedia.org/wiki/File:La_Cascada_Parque_Nacional_La_Campana.jpg

   **Palma Chilena:**
   - Buscar en: https://commons.wikimedia.org/wiki/Category:Jubaea_chilensis

3. **Descargar imágenes:**
   - En cada página de imagen, click en "Descargar" o "Download"
   - Elige la resolución apropiada (1920px para cover, 800px para cards)
   - Guarda en `public/images/` con nombres descriptivos

### Opción 2: Usar URLs Directas de Wikimedia Commons

Puedes actualizar `constants.ts` con URLs directas de Wikimedia Commons:

```typescript
// Ejemplo de URL directa de Wikimedia Commons
coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Entrada_Parque_Nacional_La_Campana.jpg/1920px-Entrada_Parque_Nacional_La_Campana.jpg"
```

**Formato de URL:**
```
https://upload.wikimedia.org/wikipedia/commons/thumb/{hash}/{filename}/{size}px-{filename}
```

## 📋 Checklist de Imágenes Necesarias

### Imágenes del Parque
- [ ] `cover-la-campana.jpg` - Vista panorámica del parque (1920x1080)
- [ ] `sector-granizo.jpg` - Sendero de montaña (800x600)
- [ ] `sector-cajon-grande.jpg` - Bosque y pozones (800x600)
- [ ] `sector-ocoa.jpg` - Palmar de Ocoa (800x600)

### Imágenes de Flora
- [ ] `palma-chilena.jpg` - Jubaea chilensis (800x600)
- [ ] `roble-santiago.jpg` - Nothofagus macrocarpa (800x600)
- [ ] `quillay.jpg` - Quillaja saponaria (800x600)
- [ ] `chagual.jpg` - Puya chilensis (800x600)

### Imágenes de Fauna
- [ ] `zorro-culpeo.jpg` - Lycalopex culpaeus (800x600)
- [ ] `turca.jpg` - Pteroptochos megapodius (800x600)
- [ ] `tenca.jpg` - Mimus thenca (800x600)
- [ ] `aguilucho.jpg` - Geranoaetus polyosoma (800x600)
- [ ] `degu.jpg` - Octodon degus (800x600)

## 🔄 Actualizar constants.ts

Una vez descargadas las imágenes, actualiza `constants.ts`:

```typescript
// Cambiar de:
coverImage: "https://source.unsplash.com/1920x1080/?chile,mountain,landscape"

// A:
coverImage: "/images/cover-la-campana.jpg"
```

**Nota:** Si usas rutas relativas (`/images/...`), las imágenes deben estar en `public/images/` para que Vite las sirva correctamente.

## 📚 Recursos Adicionales

- **CONAF - Parque Nacional La Campana:**
  https://www.conaf.cl/parque_nacionales/parque-nacional-la-campana/

- **Sitio Oficial del Parque:**
  https://parquenacionallacampana.cl/

- **Wikimedia Commons - Categoría:**
  https://commons.wikimedia.org/wiki/Category:Parque_Nacional_La_Campana

## ⚖️ Licencias

Todas las imágenes de Wikimedia Commons tienen licencias que permiten su uso. Asegúrate de:
- Verificar la licencia específica de cada imagen
- Atribuir correctamente al autor si es requerido
- Mantener la misma licencia en trabajos derivados (si aplica)

## 🚀 Después de Actualizar

1. Verifica que todas las imágenes se carguen correctamente
2. Prueba en diferentes tamaños de pantalla
3. Optimiza las imágenes si es necesario (comprime antes de subir)
4. Haz commit de los cambios:
   ```bash
   git add public/images/ constants.ts
   git commit -m "feat: actualizar imágenes con fotos específicas del Parque La Campana"
   git push
   ```

