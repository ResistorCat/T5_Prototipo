# SpeedGrader v2.0 - Prototipo# React + Vite



Prototipo interactivo de la plataforma SpeedGrader v2.0 desarrollado con React y Vite.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## CaracterísticasCurrently, two official plugins are available:



- ✅ Interfaz moderna y responsiva con Tailwind CSS- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- ✅ Tema oscuro (dark mode)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- ✅ Sistema de rúbricas con actualización automática del puntaje total

- ✅ Validación de inputs (límite máximo por criterio)## React Compiler

- ✅ Soporte para puntajes decimales (puntaje parcial)

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Desarrollo Local

## Expanding the ESLint configuration

### Prerrequisitos

- Node.js (v16 o superior)If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor se abrirá en `http://localhost:5173`

## Despliegue en GitHub Pages

### Configuración Inicial

1. **Crear un repositorio en GitHub**
   - Ve a GitHub y crea un nuevo repositorio
   - Nombre sugerido: `T5_Prototipo`
   - Puede ser público o privado

2. **Inicializar Git y subir el código**

```bash
# Inicializar repositorio git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: SpeedGrader v2.0 prototype"

# Agregar el remote de GitHub (reemplaza <tu-usuario> con tu usuario de GitHub)
git remote add origin https://github.com/<tu-usuario>/T5_Prototipo.git

# Subir el código
git branch -M main
git push -u origin main
```

3. **Desplegar en GitHub Pages**

```bash
# Construir y desplegar
npm run deploy
```

Este comando:
- Construye el proyecto para producción
- Crea una rama `gh-pages` automáticamente
- Sube los archivos de build a esa rama

4. **Configurar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Ve a Settings > Pages
   - En "Source", selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Haz clic en "Save"

5. **Acceder a tu sitio**
   - GitHub Pages te dará una URL como: `https://<tu-usuario>.github.io/T5_Prototipo/`
   - El sitio estará disponible en unos minutos

### Actualizaciones Futuras

Para actualizar el sitio después de hacer cambios:

```bash
# Hacer tus cambios en el código...

# Commit de los cambios
git add .
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Re-desplegar en GitHub Pages
npm run deploy
```

## Estructura del Proyecto

```
T5_Prototipo/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Barra de navegación superior
│   │   ├── Question.jsx        # Componente de pregunta con rúbrica
│   │   └── FinalEvaluation.jsx # Componente de evaluación final
│   ├── App.jsx                 # Componente principal con lógica de estado
│   ├── index.css               # Estilos globales con Tailwind
│   └── main.jsx                # Punto de entrada de la aplicación
├── index.html                  # Plantilla HTML
├── package.json                # Dependencias y scripts
├── tailwind.config.js          # Configuración de Tailwind
└── vite.config.js              # Configuración de Vite
```

## Funcionalidad Implementada

### Cálculo Automático de Puntaje
- El puntaje total se actualiza en tiempo real cuando cambias cualquier valor
- Los inputs tienen validación para no exceder el máximo permitido
- Soporta valores decimales (ej: 3.5 puntos)

### Mockup Elements
Los siguientes elementos son solo visuales (mockup):
- Búsqueda de estudiantes
- Navegación entre estudiantes (botones prev/next)
- Botón "Ver Entrega"
- Checkbox de notificación por email
- Textarea de comentarios
- Botón "Publicar Calificación"

## Tecnologías Utilizadas

- **React 19**: Biblioteca de UI
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework de CSS
- **@tailwindcss/forms**: Plugin para estilos de formularios
- **gh-pages**: Despliegue en GitHub Pages

## Notas

- El proyecto usa el path base `/T5_Prototipo/` configurado en `vite.config.js` para funcionar correctamente en GitHub Pages
- Si cambias el nombre del repositorio, actualiza también el `base` en `vite.config.js`
