# 🚀 Guía de Deploy - Raulif Parque La Campana

## 📋 Checklist Pre-Deploy

- [x] Base path configurado en `vite.config.ts`
- [x] Scripts de deploy agregados en `package.json`
- [x] Archivo `.nojekyll` creado
- [x] Workflow de GitHub Actions configurado
- [ ] Código subido a GitHub
- [ ] GitHub Pages habilitado
- [ ] Primer deploy realizado

---

## 🔧 Paso 1: Configuración Inicial del Repositorio

### 1.1 Inicializar Git (si no está inicializado)

```bash
git init
```

### 1.2 Agregar el remoto de GitHub

```bash
git remote add origin https://github.com/DonGeeo87/Raulif-Parque-La-Campana.git
```

### 1.3 Verificar el remoto

```bash
git remote -v
```

Deberías ver:
```
origin  https://github.com/DonGeeo87/Raulif-Parque-La-Campana.git (fetch)
origin  https://github.com/DonGeeo87/Raulif-Parque-La-Campana.git (push)
```

---

## 📦 Paso 2: Primer Commit y Push

### 2.1 Agregar todos los archivos

```bash
git add .
```

### 2.2 Verificar qué se va a subir

```bash
git status
```

### 2.3 Crear el commit inicial

```bash
git commit -m "feat: initial commit - Raulif Parque La Campana"
```

### 2.4 Subir a la rama main

```bash
git branch -M main
git push -u origin main
```

---

## 🌐 Paso 3: Habilitar GitHub Pages

1. Ve a tu repositorio: https://github.com/DonGeeo87/Raulif-Parque-La-Campana
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click en **Save**

**Nota:** La rama `gh-pages` se creará automáticamente cuando hagas el primer deploy.

---

## 🚀 Paso 4: Primer Deploy

### 4.1 Instalar dependencias (si no lo has hecho)

```bash
npm install
```

### 4.2 Ejecutar el deploy

```bash
npm run deploy
```

Este comando:
- Ejecuta `npm run build` (genera la carpeta `dist/`)
- Sube el contenido de `dist/` a la rama `gh-pages`

### 4.3 Verificar el deploy

Después de unos minutos, tu sitio estará disponible en:
```
https://dongeo87.github.io/Raulif-Parque-La-Campana/
```

---

## 🔄 Paso 5: Deploy Automático (Opcional)

Si prefieres que cada push a `main` despliegue automáticamente:

1. El workflow `.github/workflows/deploy.yml` ya está configurado
2. Solo necesitas habilitar GitHub Actions en tu repositorio:
   - Ve a **Settings** → **Actions** → **General**
   - En "Workflow permissions", selecciona: **Read and write permissions**
   - Click en **Save**

Ahora, cada vez que hagas push a `main`, se desplegará automáticamente.

---

## 📝 Comandos Útiles

### Ver el estado del repositorio
```bash
git status
```

### Agregar cambios y hacer commit
```bash
git add .
git commit -m "feat: descripción del cambio"
git push
```

### Re-deploy manual
```bash
npm run deploy
```

### Limpiar y re-deploy
```bash
npm run deploy:clean
```

### Ver el build localmente antes de deploy
```bash
npm run build
npm run preview
```

---

## ⚠️ Solución de Problemas

### El sitio no carga después del deploy

1. Verifica que el base path en `vite.config.ts` sea: `/Raulif-Parque-La-Campana/`
2. Verifica que GitHub Pages esté configurado para la rama `gh-pages`
3. Espera 1-2 minutos y recarga la página (puede tardar en propagarse)

### Error: "gh-pages branch not found"

Ejecuta el deploy manualmente:
```bash
npm run deploy
```

### Los assets no cargan

Verifica que el archivo `.nojekyll` esté en la raíz del proyecto y se haya subido a GitHub.

---

## ✅ Checklist Final

- [ ] Código subido a GitHub
- [ ] GitHub Pages habilitado (rama `gh-pages`)
- [ ] Primer deploy exitoso
- [ ] Sitio accesible en: https://dongeo87.github.io/Raulif-Parque-La-Campana/
- [ ] (Opcional) GitHub Actions habilitado para deploy automático

---

**¡Listo! Tu aplicación está desplegada en GitHub Pages.** 🎉

