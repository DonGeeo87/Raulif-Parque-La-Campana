<div align="center">

# 🌲 Raulif: Parque Nacional La Campana

### Una experiencia inmersiva para descubrir la biodiversidad de Chile

[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?style=for-the-badge&logo=github&logoColor=white)](https://dongeo87.github.io/Raulif-Parque-La-Campana/)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/DonGeeo87/Raulif-Parque-La-Campana)

</div>

---

## 📖 Sobre el Proyecto

**Raulif: Parque Nacional La Campana** es una aplicación web interactiva que te permite explorar la biodiversidad única del Parque Nacional La Campana, ubicado en la Cordillera de la Costa de Chile central. Esta experiencia digital combina tecnología moderna con información detallada sobre flora, fauna y los diferentes sectores del parque.

### ✨ Características Principales

- 🗺️ **Exploración de Sectores**: Descubre los tres sectores principales del parque (Granizo, Cajón Grande y Ocoa)
- 🌿 **Catálogo de Flora**: Conoce las especies vegetales endémicas como la Palma Chilena, Roble de Santiago, Quillay y Chagual
- 🦊 **Catálogo de Fauna**: Aprende sobre la fauna local incluyendo el Zorro Culpeo, Turca, Tenca, Aguilucho y Degú
- 📱 **Diseño Responsive**: Experiencia optimizada para móviles, tablets y desktop
- 🎨 **UI Moderna**: Interfaz oscura con gradientes y animaciones suaves
- ⚡ **Rendimiento Optimizado**: Construido con Vite para carga ultrarrápida

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18.0 o superior
- **npm** o **yarn**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/DonGeeo87/Raulif-Parque-La-Campana.git

# Navegar al directorio
cd Raulif-Parque-La-Campana

# Instalar dependencias
npm install
```

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:
# http://localhost:3000
```

### Build de Producción

```bash
# Generar build optimizado
npm run build

# El build se generará en la carpeta dist/
```

### Preview del Build

```bash
# Previsualizar el build localmente
npm run preview
```

---

## 🌐 Despliegue en GitHub Pages

### Configuración Inicial

1. **El base path ya está configurado** en `vite.config.ts`:
   ```typescript
   const base = '/Raulif-Parque-La-Campana/';
   ```

2. **Habilitar GitHub Pages** en tu repositorio:
   - Ve a **Settings** → **Pages**
   - **Source**: Selecciona la rama `gh-pages` y carpeta `/ (root)`
   - Guarda los cambios

### Deploy

```bash
# Deploy automático a GitHub Pages
npm run deploy
```

Este comando:
- ✅ Ejecuta el build de producción
- ✅ Despliega la carpeta `dist/` a la rama `gh-pages`

### Limpiar y Re-deploy

```bash
# Limpiar deploy anterior y volver a desplegar
npm run deploy:clean
```

### URL del Sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://dongeo87.github.io/Raulif-Parque-La-Campana/
```

---

## 📁 Estructura del Proyecto

```
Raulif-Parque-La-Campana/
├── 📂 components/          # Componentes React
│   ├── AllParksModal.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── LandingPage.tsx
│   ├── RegionDetail.tsx
│   ├── RegionSelector.tsx
│   └── SplashScreen.tsx
├── 📂 public/
│   └── 📂 images/         # Imágenes del parque
├── 📄 App.tsx             # Componente principal
├── 📄 constants.ts        # Datos del parque
├── 📄 types.ts            # Definiciones TypeScript
├── 📄 vite.config.ts      # Configuración Vite
├── 📄 package.json         # Dependencias
└── 📄 README.md           # Este archivo
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.2.1 | Framework UI |
| **TypeScript** | 5.8.2 | Tipado estático |
| **Vite** | 6.2.0 | Build tool y dev server |
| **Lucide React** | 0.555.0 | Iconos |
| **Tailwind CSS** | CDN | Estilos y diseño |

---

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza el build local |
| `npm run deploy` | Build y deploy a GitHub Pages |
| `npm run deploy:clean` | Limpia y vuelve a desplegar |

---

## 🎨 Características de Diseño

### Paleta de Colores

- **Negro**: `#000000` - Fondo principal
- **Verde Raulif**: `#10b981` - Color primario
- **Lima**: `#84cc16` - Acentos
- **Azul**: `#0ea5e9` - Elementos secundarios
- **Naranja**: `#f97316` - Destacados
- **Púrpura**: `#d946ef` - Acentos especiales

### Tipografía

- **Fuente**: Inter (Google Fonts)
- **Pesos**: 300, 400, 600, 700

### Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

---

## 📸 Imágenes

Las imágenes del proyecto están ubicadas en `public/images/`. Para obtener imágenes específicas del Parque Nacional La Campana:

1. Visita [Wikimedia Commons - Parque Nacional La Campana](https://commons.wikimedia.org/wiki/Category:Parque_Nacional_La_Campana)
2. Descarga las imágenes necesarias
3. Guárdalas en `public/images/` con los nombres indicados en `IMAGENES.md`

### Imágenes Requeridas

- `cover-la-campana.jpg` - Vista panorámica del parque (1920x1080)
- `sector-granizo.jpg` - Sector Granizo (800x600)
- `sector-cajon-grande.jpg` - Sector Cajón Grande (800x600)
- `sector-ocoa.jpg` - Sector Ocoa (800x600)
- `palma-chilena.jpg` - Palma Chilena (800x600)
- `roble-santiago.jpg` - Roble de Santiago (800x600)
- `quillay.jpg` - Quillay (800x600)
- `chagual.jpg` - Chagual (800x600)
- `zorro-culpeo.jpg` - Zorro Culpeo (800x600)
- `turca.jpg` - Turca (800x600)
- `tenca.jpg` - Tenca (800x600)
- `aguilucho.jpg` - Aguilucho (800x600)
- `degu.jpg` - Degú (800x600)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Giorgio Interdonato Palacios** - [@DonGeeo87](https://github.com/DonGeeo87)

---

## 🙏 Agradecimientos

- **CONAF** - Corporación Nacional Forestal de Chile
- **Wikimedia Commons** - Por las imágenes de dominio público
- **Parque Nacional La Campana** - Por ser una Reserva de la Biosfera

---

## 📚 Recursos Adicionales

- [Sitio Oficial del Parque](https://parquenacionallacampana.cl/)
- [CONAF - Parque Nacional La Campana](https://www.conaf.cl/parque_nacionales/parque-nacional-la-campana/)
- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)

---

<div align="center">

### ⭐ Si te gusta este proyecto, ¡dale una estrella!

[![GitHub stars](https://img.shields.io/github/stars/DonGeeo87/Raulif-Parque-La-Campana.svg?style=social&label=Star)](https://github.com/DonGeeo87/Raulif-Parque-La-Campana)

**Hecho con ❤️ y 🌲 para preservar la naturaleza de Chile**

</div>
