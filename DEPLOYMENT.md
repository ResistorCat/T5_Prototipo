# Guía de Publicación del Prototipo

Este documento explica diferentes opciones gratuitas para publicar y compartir tu prototipo de SpeedGrader v2.0.

## Opción 1: GitHub Pages (Recomendada) ⭐

**Ventajas:**
- ✅ Completamente gratis
- ✅ Integración directa con Git
- ✅ Actualizaciones automáticas con `npm run deploy`
- ✅ SSL/HTTPS incluido
- ✅ Custom domain opcional

**Pasos rápidos:**

```bash
# 1. Crear repositorio en GitHub (público)
# 2. Desde el directorio del proyecto:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/T5_Prototipo.git
git push -u origin main

# 3. Desplegar
npm run deploy

# 4. En GitHub: Settings > Pages > Source: gh-pages branch
```

**URL resultante:** `https://TU-USUARIO.github.io/T5_Prototipo/`

---

## Opción 2: Vercel

**Ventajas:**
- ✅ Despliegue ultra rápido
- ✅ Previews automáticos de branches
- ✅ Analytics incluido
- ✅ Custom domains gratis

**Pasos:**

1. Visita [vercel.com](https://vercel.com)
2. Regístrate con GitHub
3. Click en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Vite
6. Click en "Deploy"

**Nota:** Si usas Vercel, actualiza `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia esto de '/T5_Prototipo/' a '/'
})
```

---

## Opción 3: Netlify

**Ventajas:**
- ✅ Drag & drop para desplegar
- ✅ Formularios gratis
- ✅ Funciones serverless en el plan gratis
- ✅ Split testing

**Método 1 - Drag & Drop (más simple):**

```bash
# 1. Construir el proyecto
npm run build

# 2. Ve a netlify.com y arrastra la carpeta 'dist' al navegador
```

**Método 2 - Con Git:**

1. Sube tu código a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. "New site from Git"
4. Conecta tu repositorio
5. Build command: `npm run build`
6. Publish directory: `dist`

**Nota:** Si usas Netlify, actualiza `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia esto de '/T5_Prototipo/' a '/'
})
```

---

## Opción 4: Render

**Ventajas:**
- ✅ Free tier generoso
- ✅ Despliegue desde GitHub automático
- ✅ SSL gratis

**Pasos:**

1. Sube tu código a GitHub
2. Ve a [render.com](https://render.com)
3. "New Static Site"
4. Conecta tu repo
5. Build command: `npm run build`
6. Publish directory: `dist`

---

## Opción 5: Surge.sh

**Ventajas:**
- ✅ Super simple (un comando)
- ✅ CLI directo
- ✅ Ideal para prototipos rápidos

**Pasos:**

```bash
# Instalar surge globalmente
npm install -g surge

# Construir el proyecto
npm run build

# Desplegar
cd dist
surge
```

Te pedirá email/password (primera vez) y listo. Te dará una URL como: `https://nombre-random.surge.sh`

**Nota:** Si usas Surge, actualiza `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia esto de '/T5_Prototipo/' a '/'
})
```

---

## Comparación Rápida

| Servicio | Dificultad | Velocidad | URL Personalizada | SSL | Custom Domain |
|----------|------------|-----------|-------------------|-----|---------------|
| **GitHub Pages** | Media | Media | Sí | ✅ | ✅ |
| **Vercel** | Fácil | Muy Rápida | Sí | ✅ | ✅ |
| **Netlify** | Fácil | Muy Rápida | Sí | ✅ | ✅ |
| **Render** | Fácil | Rápida | Sí | ✅ | ✅ |
| **Surge** | Muy Fácil | Rápida | Random | ✅ | ✅ (pago) |

---

## Recomendación Final

**Para este proyecto, te recomiendo GitHub Pages** porque:
1. Ya está configurado en el proyecto (`npm run deploy`)
2. Mantiene tu código y deploy en el mismo lugar
3. Es la opción más común en contextos académicos
4. Fácil de compartir: solo necesitas el link

**Si necesitas algo más rápido:** Usa **Netlify drag & drop** - literalmente arrastra la carpeta `dist` al navegador y en 10 segundos está online.

**Si trabajas en equipo:** Usa **Vercel** - tiene las mejores previews automáticas de cada branch/PR.

---

## Solución de Problemas

### El sitio se ve sin estilos
- Verifica que `base` en `vite.config.js` coincida con tu URL
- GitHub Pages usa `/T5_Prototipo/`
- Otros servicios generalmente usan `/`

### No se actualiza el sitio después de cambios
```bash
# GitHub Pages
git add .
git commit -m "Update"
git push
npm run deploy

# Vercel/Netlify
git push origin main  # Auto-deploy
```

### Error 404 al desplegar
- Asegúrate de que el build fue exitoso
- Verifica la carpeta de publicación (debe ser `dist`)
- Revisa que todas las dependencias estén instaladas
