# Documentación Técnica - Sistema de Puntaje

## Funcionalidad Implementada

### Sistema de Actualización Automática de Puntaje

El prototipo incluye un sistema completamente funcional para calcular el puntaje total de forma automática cuando el evaluador modifica los valores de las rúbricas.

## Arquitectura

### Estado Global (App.jsx)

```javascript
const [scores, setScores] = useState({
  q1_claridad: 1,
  q1_relevancia: 3,
  q2_precision: 0,
  q3_gramatica: 5,
  q3_formato: 0,
})
```

El estado centralizado almacena todos los puntajes de todos los criterios de rúbrica.

### Cálculo del Puntaje Total

```javascript
const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0)
const maxScore = questions.reduce((sum, question) => {
  return sum + question.rubric.reduce((rubricSum, criterion) => 
    rubricSum + criterion.maxPoints, 0
  )
}, 0)
```

- **totalScore**: Suma de todos los valores actuales
- **maxScore**: Suma de todos los valores máximos posibles

### Función de Actualización

```javascript
const updateScore = (criterionId, value) => {
  setScores(prev => ({
    ...prev,
    [criterionId]: value
  }))
}
```

Esta función se pasa como prop a cada componente `Question`, permitiendo que los inputs actualicen el estado global.

## Validación de Inputs

### Restricciones Implementadas

Cada input de puntaje tiene las siguientes restricciones:

```javascript
<input
  type="number"
  min="0"
  max={criterion.maxPoints}
  step="0.1"
  value={scores[criterion.id]}
  onChange={(e) => {
    const value = parseFloat(e.target.value) || 0
    const clampedValue = Math.min(Math.max(value, 0), criterion.maxPoints)
    updateScore(criterion.id, clampedValue)
  }}
/>
```

**Características:**
1. **min="0"**: No permite valores negativos
2. **max={criterion.maxPoints}**: Define el máximo según la rúbrica
3. **step="0.1"**: Permite decimales (puntaje parcial: 3.5, 4.2, etc.)
4. **clampedValue**: Validación adicional en JavaScript que asegura que el valor esté entre 0 y el máximo

### Ejemplos de Validación

| Input del Usuario | Máximo Permitido | Valor Final |
|-------------------|------------------|-------------|
| 3.5 | 5 | 3.5 ✅ |
| 6 | 5 | 5.0 ✅ (limitado al máximo) |
| -1 | 5 | 0.0 ✅ (limitado al mínimo) |
| 4.75 | 5 | 4.75 ✅ |

## Flujo de Datos

```
Usuario cambia input
       ↓
onChange del input
       ↓
parseFloat y validación
       ↓
updateScore(criterionId, clampedValue)
       ↓
setScores actualiza el estado
       ↓
React re-renderiza componentes
       ↓
totalScore se recalcula automáticamente
       ↓
FinalEvaluation muestra el nuevo total
```

## Estructura de Datos

### Definición de Preguntas

```javascript
const questions = [
  {
    id: 1,
    title: "Pregunta 1: ...",
    answer: "Respuesta del estudiante...",
    rubric: [
      { id: 'q1_claridad', label: 'Claridad', maxPoints: 5 },
      { id: 'q1_relevancia', label: 'Relevancia', maxPoints: 5 },
    ]
  },
  // ... más preguntas
]
```

Cada pregunta tiene:
- **id**: Identificador único
- **title**: Título de la pregunta
- **answer**: Respuesta mockup del estudiante
- **rubric**: Array de criterios de evaluación

Cada criterio de rúbrica tiene:
- **id**: Identificador único (clave en el objeto `scores`)
- **label**: Nombre del criterio
- **maxPoints**: Puntaje máximo para este criterio

## Componentes

### Question.jsx

Responsable de:
- Mostrar la pregunta y respuesta del estudiante
- Renderizar los inputs de cada criterio de rúbrica
- Manejar la validación de inputs
- Comunicar cambios al componente padre

### FinalEvaluation.jsx

Responsable de:
- Mostrar el puntaje total calculado
- Mostrar el formato "X / Y Puntos"
- Renderizar elementos mockup (checkbox, textarea, botón)

## Formato de Visualización

```javascript
<p className="mt-1 text-2xl font-bold text-primary">
  {totalScore.toFixed(1)} / {maxScore} Puntos
</p>
```

- **toFixed(1)**: Muestra siempre un decimal (ej: 15.0, 15.5, 16.7)
- Formato: `"Actual / Máximo Puntos"`

## Elementos Mockup (No Funcionales)

Los siguientes elementos son solo visuales y no tienen funcionalidad:

### Header
- ❌ Búsqueda de estudiantes
- ❌ Navegación prev/next entre estudiantes
- ❌ Botón "Ver Entrega"

### FinalEvaluation
- ❌ Checkbox de notificación por email
- ❌ Textarea de comentarios generales
- ❌ Textarea de comentarios por criterio
- ❌ Botón "Publicar Calificación"

## Posibles Extensiones Futuras

Si quisieras hacer el prototipo más funcional, podrías agregar:

1. **Persistencia de datos**
   ```javascript
   useEffect(() => {
     localStorage.setItem('scores', JSON.stringify(scores))
   }, [scores])
   ```

2. **Comentarios por criterio**
   ```javascript
   const [comments, setComments] = useState({})
   ```

3. **Navegación entre estudiantes**
   ```javascript
   const [students, setStudents] = useState([...])
   const [currentStudent, setCurrentStudent] = useState(0)
   ```

4. **Exportar evaluación**
   ```javascript
   const exportData = () => {
     const data = { scores, comments, totalScore }
     // Generar PDF o JSON
   }
   ```

## Testing Manual

Para probar la funcionalidad:

1. **Test básico**: Cambia cualquier valor y verifica que el total se actualice
2. **Test de límites**: Intenta ingresar valores mayores al máximo
3. **Test de decimales**: Ingresa valores como 3.5, 4.7, etc.
4. **Test de valores negativos**: Intenta ingresar -1 o números negativos
5. **Test de suma**: Verifica manualmente que la suma sea correcta

### Ejemplo de Test Manual

Estado inicial:
- Claridad: 1 / 5
- Relevancia: 3 / 5
- Precisión: 0 / 5
- Gramática: 5 / 5
- Formato: 0 / 0

**Total esperado: 9 / 20 puntos**

Cambio:
- Claridad: 5 / 5
- Precisión: 4.5 / 5

**Nuevo total esperado: 17.5 / 20 puntos** ✅
