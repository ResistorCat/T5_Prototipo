# ✅ Checklist de Verificación del Prototipo

Usa este checklist para asegurarte de que todo funciona correctamente antes de compartir el prototipo.

## 🧪 Testing Local

### Servidor de Desarrollo
- [ ] Ejecuté `npm run dev` sin errores
- [ ] El servidor se inició en `http://localhost:5173/T5_Prototipo/`
- [ ] Puedo abrir la URL en el navegador
- [ ] La página carga completamente sin errores en la consola

### Funcionalidad del Puntaje
- [ ] Veo el puntaje total inicial: **9.0 / 20 Puntos**
- [ ] Al cambiar "Claridad (Q1)" de 1 a 5, el total cambia a **13.0 / 20**
- [ ] Puedo ingresar valores decimales (ej: 3.5 en cualquier campo)
- [ ] Al intentar ingresar 10 en un campo de máximo 5, se limita a 5
- [ ] El puntaje total siempre refleja la suma correcta

### Validación de Inputs
- [ ] No puedo ingresar valores negativos
- [ ] No puedo ingresar valores mayores al máximo
- [ ] Los decimales funcionan correctamente
- [ ] El input muestra el valor correcto después de la validación

### Interfaz Visual
- [ ] El header se ve correctamente
- [ ] El logo de SpeedGrader se ve bien
- [ ] Las 3 preguntas se muestran completas
- [ ] Las rúbricas están al lado de cada pregunta
- [ ] El panel de "Evaluación Final" se ve al final
- [ ] Los colores del tema oscuro se ven bien

### Responsive Design
- [ ] Pruebo con ventana pequeña (simulando móvil)
- [ ] Las secciones se reorganizan verticalmente
- [ ] Los textos son legibles en pantalla pequeña
- [ ] No hay overflow horizontal

## 🚀 Pre-Despliegue

### Preparación del Código
- [ ] Todo el código está guardado (git status limpio)
- [ ] No hay archivos temporales o de debug
- [ ] Los console.log() de desarrollo están removidos (si aplica)

### Build de Producción
- [ ] Ejecuté `npm run build` sin errores
- [ ] La carpeta `dist/` se creó exitosamente
- [ ] Revisé el tamaño del build (debe ser razonable, < 1MB)

### Configuración
- [ ] El `vite.config.js` tiene `base: '/T5_Prototipo/'`
- [ ] El `package.json` tiene los scripts de deploy
- [ ] El `.gitignore` excluye `node_modules` y `dist`

## 📦 GitHub

### Repositorio
- [ ] Creé un repositorio nuevo en GitHub
- [ ] El nombre del repositorio es `T5_Prototipo` (o actualicé vite.config.js)
- [ ] El repositorio es **público** (requerido para GitHub Pages gratis)

### Git Local
- [ ] Ejecuté `git init` en el proyecto
- [ ] Ejecuté `git add .`
- [ ] Ejecuté `git commit -m "Initial commit"`
- [ ] Ejecuté `git remote add origin <URL-DEL-REPO>`
- [ ] Ejecuté `git push -u origin main`

### GitHub Pages
- [ ] Ejecuté `npm run deploy` exitosamente
- [ ] Vi la rama `gh-pages` en GitHub
- [ ] Configuré Settings > Pages > Source: `gh-pages` branch
- [ ] GitHub me dio una URL tipo: `https://USUARIO.github.io/T5_Prototipo/`

## 🌐 Verificación del Sitio Publicado

### Acceso
- [ ] Puedo abrir la URL de GitHub Pages
- [ ] El sitio carga en menos de 5 segundos
- [ ] No hay error 404

### Funcionalidad en Producción
- [ ] El puntaje total se actualiza correctamente
- [ ] La validación de inputs funciona
- [ ] Los decimales funcionan
- [ ] La interfaz se ve igual que en local
- [ ] El responsive design funciona

### Pruebas Cross-Browser (Opcional)
- [ ] Funciona en Chrome/Brave
- [ ] Funciona en Firefox
- [ ] Funciona en Safari (si tienes Mac)
- [ ] Funciona en móvil

## 📋 Documentación

### Archivos de Documentación
- [ ] `README.md` está actualizado
- [ ] `DEPLOYMENT.md` tiene instrucciones claras
- [ ] `TECHNICAL.md` explica el sistema de puntaje
- [ ] `PROJECT_SUMMARY.md` resume el proyecto

### Link para Compartir
- [ ] Copié la URL final: `https://____________.github.io/T5_Prototipo/`
- [ ] Probé el link en ventana de incógnito
- [ ] Compartí el link con compañeros/profesor

## 🎯 Entrega Final

### Contenido a Entregar
- [ ] Link del prototipo publicado
- [ ] Link del repositorio GitHub (opcional)
- [ ] Screenshot o video del prototipo funcionando (opcional)

### Verificación Final
- [ ] El link funciona sin necesidad de estar logueado
- [ ] La funcionalidad de puntaje automático está claramente visible
- [ ] Puedo explicar cómo funciona el sistema de puntaje

---

## 🐛 Solución de Problemas Comunes

### El servidor local no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error al hacer build
```bash
# Limpiar caché
rm -rf node_modules/.vite dist
npm run build
```

### GitHub Pages muestra 404
- Verifica que el repo sea público
- Asegúrate de que `gh-pages` branch existe
- Espera 2-3 minutos después de configurar

### El sitio se ve sin estilos
- Verifica `base` en `vite.config.js`
- Debe coincidir con el nombre del repo
- Ejecuta `npm run deploy` nuevamente

### Los puntajes no se actualizan
- Abre la consola del navegador (F12)
- Busca errores en JavaScript
- Verifica que React esté cargado

---

## ✨ Estado Final Esperado

```
✅ Servidor local funciona
✅ Puntaje se actualiza en tiempo real
✅ Validación funciona correctamente
✅ Código subido a GitHub
✅ npm run deploy ejecutado
✅ GitHub Pages configurado
✅ Link público funcionando
✅ Documentación completa
```

**¡Listo para compartir! 🎉**
