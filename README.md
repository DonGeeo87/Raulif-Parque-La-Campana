<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Raulif: Parque Nacional La Campana

Aplicación web interactiva sobre el Parque Nacional La Campana, desarrollada con React 19 y Vite.

## 🚀 Desarrollo Local

**Prerrequisitos:** Node.js 18+ 

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno (opcional):
   ```bash
   # Crear archivo .env.local
   GEMINI_API_KEY=tu_api_key_aqui
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador: `http://localhost:3000`

## 📦 Build para Producción

```bash
npm run build
```

El build se generará en la carpeta `dist/`.

## 🌐 Deploy a GitHub Pages

### Configuración Inicial

1. **Configurar el base path en `vite.config.ts`**:
   
   Si tu repositorio es `usuario/nombre-repo`, el base path debe ser `/nombre-repo/`.
   
   Puedes configurarlo de dos formas:
   
   - **Opción 1:** Editar `vite.config.ts` y cambiar:
     ```typescript
     const base = '/nombre-de-tu-repo/';
     ```
   
   - **Opción 2:** Usar variable de entorno:
     ```bash
     GITHUB_PAGES_BASE=/nombre-de-tu-repo/ npm run deploy
     ```

2. **Habilitar GitHub Pages en el repositorio**:
   - Ve a Settings → Pages
   - Source: selecciona la rama `gh-pages` y carpeta `/ (root)`

### Deploy

```bash
# Instalar dependencias si no lo has hecho
npm install

# Deploy a GitHub Pages
npm run deploy
```

Este comando:
1. Ejecuta el build de producción
2. Despliega la carpeta `dist/` a la rama `gh-pages`

### Limpiar y Re-deploy

Si necesitas limpiar el deploy anterior:

```bash
npm run deploy:clean
```

## 📝 Notas Importantes

- El archivo `.nojekyll` está incluido para que GitHub Pages sirva correctamente todos los archivos
- Si usas un dominio personalizado, cambia `base: '/'` en `vite.config.ts`
- Los assets se generan en `dist/assets/` durante el build

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build local
- `npm run deploy` - Build y deploy a GitHub Pages
- `npm run deploy:clean` - Limpiar y deploy a GitHub Pages
