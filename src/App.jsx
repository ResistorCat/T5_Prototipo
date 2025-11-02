import { useState, useEffect } from 'react'
import Header from './components/Header'
import Question from './components/Question'
import FinalEvaluation from './components/FinalEvaluation'
import FloatingScoreFooter from './components/FloatingScoreFooter'

function App() {
  // Estado para almacenar los puntajes de cada criterio de rúbrica
  const [scores, setScores] = useState({
    q1_claridad: 1,
    q1_relevancia: 3,
    q2_precision: null,
    q3_gramatica: 5,
  })

  const [lastSaved, setLastSaved] = useState(null)

  // Función para actualizar el timestamp cuando hay cambios
  const handleAnyChange = () => {
    setLastSaved(new Date())
  }

  // Actualizar timestamp cada segundo para mantener el "hace X segundos" actualizado
  useEffect(() => {
    if (lastSaved) {
      const interval = setInterval(() => {
        setLastSaved(new Date(lastSaved))
      }, 10000) // Actualizar cada 10 segundos
      
      return () => clearInterval(interval)
    }
  }, [lastSaved])

  // Definición de las preguntas con sus rúbricas
  const questions = [
    {
      id: 1,
      title: "Pregunta 1: Describa los principios de diseño de Gestalt.",
      answer: `Los principios de diseño de Gestalt son un conjunto de reglas que describen cómo los seres humanos perciben visualmente los objetos. Estos principios incluyen proximidad, similitud, continuidad, cierre y figura-fondo. La proximidad sugiere que los objetos cercanos entre sí se perciben como un grupo. La similitud indica que los elementos que comparten características visuales, como el color o la forma, se ven como relacionados. La continuidad se refiere a la tendencia del ojo a seguir la ruta más suave al ver líneas, independientemente de cómo se dibujaron realmente las líneas. El principio de cierre explica cómo percibimos formas completas incluso cuando faltan partes, ya que nuestra mente llena los vacíos. Finalmente, el principio de figura-fondo describe nuestra tendencia a separar los elementos visuales en una figura (el objeto principal de enfoque) y un fondo (el área circundante).`,
      rubric: [
        { 
          id: 'q1_claridad', 
          label: 'Claridad', 
          maxPoints: 5,
          description: 'El alumno explica los conceptos de manera clara y comprensible, utilizando un lenguaje apropiado y estructura coherente en su respuesta.',
          presetScores: [
            { label: 'Excelente', description: 'Explicación perfectamente clara y estructurada', points: 5 },
            { label: 'Satisfactorio', description: 'Explicación clara pero con pequeñas imprecisiones', points: 3.5 },
            { label: 'Insuficiente', description: 'Explicación confusa o poco clara', points: 1.5 },
            { label: 'No cumple', description: 'No demuestra claridad en la respuesta', points: 0 },
          ]
        },
        { 
          id: 'q1_relevancia', 
          label: 'Relevancia', 
          maxPoints: 5,
          description: 'La respuesta se mantiene enfocada en el tema solicitado, incluyendo información pertinente y evitando divagaciones innecesarias.',
          presetScores: [
            { label: 'Excelente', description: 'Totalmente enfocado en el tema solicitado', points: 5 },
            { label: 'Satisfactorio', description: 'Mayormente relevante con algunas divagaciones menores', points: 3.5 },
            { label: 'Insuficiente', description: 'Se desvía frecuentemente del tema', points: 1.5 },
            { label: 'No cumple', description: 'No responde al tema solicitado', points: 0 },
          ]
        },
      ]
    },
    {
      id: 2,
      title: "Pregunta 2: ¿Cuál es la diferencia entre UI y UX?",
      answer: `La Interfaz de Usuario (UI) y la Experiencia de Usuario (UX) son dos conceptos fundamentales pero distintos en el diseño de productos digitales. La UI se enfoca en los aspectos visuales y la interactividad de un producto; es decir, todo lo que el usuario puede ver y con lo que puede interactuar, como los botones, los menús, los colores y la tipografía. El objetivo de un buen diseño de UI es crear una interfaz atractiva, consistente y fácil de usar. Por otro lado, la UX se refiere a la experiencia general y la sensación que tiene un usuario al interactuar con un producto. Abarca todo el viaje del usuario, desde el primer contacto hasta la finalización de sus tareas. El diseño UX se preocupa por hacer que el producto sea útil, usable, accesible y agradable, asegurando que el flujo sea lógico e intuitivo. En resumen, la UI es el "cómo se ve", mientras que la UX es el "cómo se siente".`,
      rubric: [
        { 
          id: 'q2_precision', 
          label: 'Precisión', 
          maxPoints: 5,
          description: 'El alumno demuestra conocimiento preciso y exacto de los conceptos, diferenciando correctamente entre ambos términos con definiciones técnicas apropiadas.',
          presetScores: [
            { label: 'Perfecto', description: 'Conocimientos técnicos precisos y completos', points: 5 },
            { label: 'Bueno', description: 'Conocimientos correctos con pequeñas omisiones', points: 3.5 },
            { label: 'Regular', description: 'Conocimientos imprecisos o incompletos', points: 2.5 },
            { label: 'No cumple', description: 'No demuestra conocimiento preciso', points: 0 },
          ]
        },
      ]
    },
    {
      id: 3,
      title: "Pregunta 3: Explique la importancia de la accesibilidad en el diseño web.",
      answer: `La accesibilidad en el diseño web es crucial porque garantiza que todas las personas, incluidas aquellas con discapacidades visuales, auditivas, motoras o cognitivas, puedan acceder y utilizar la web de manera efectiva. Ignorar la accesibilidad significa excluir a una porción significativa de la población. Desde una perspectiva ética, es lo correcto, promoviendo la inclusión y la igualdad de oportunidades. Legalmente, en muchas jurisdicciones, existen leyes que exigen que los sitios web cumplan con ciertos estándares de accesibilidad, como las Pautas de Accesibilidad al Contenido en la Web (WCAG). Además, un diseño accesible a menudo conduce a una mejor experiencia de usuario para todos. Prácticas como un buen contraste de color, texto alternativo para imágenes y una navegación clara por teclado no solo benefician a los usuarios con discapacidades, sino que también mejoran la usabilidad general del sitio para todos los usuarios en diferentes contextos, como en dispositivos móviles o en condiciones de baja luminosidad.`,
      rubric: [
        { 
          id: 'q3_gramatica', 
          label: 'Gramática', 
          maxPoints: 5,
          description: 'El alumno no comete faltas gramaticales en la redacción y ocupa perfectamente las puntuaciones, demostrando dominio del lenguaje escrito.',
          presetScores: [
            { label: 'Impecable', description: 'Sin faltas gramaticales ni de puntuación', points: 5 },
            { label: 'Bueno', description: 'Errores menores que no afectan comprensión', points: 3.5 },
            { label: 'Regular', description: 'Varios errores gramaticales', points: 2 },
            { label: 'Deficiente', description: 'Múltiples errores que afectan la claridad', points: 0.5 },
          ]
        },
      ]
    }
  ]

  // Calcular el puntaje total (solo sumando valores que no sean null)
  const totalScore = Object.values(scores).reduce((sum, score) => {
    return sum + (score !== null && score !== undefined && score !== '' ? parseFloat(score) : 0)
  }, 0)
  
  // Calcular el puntaje máximo posible
  const maxScore = questions.reduce((sum, question) => {
    return sum + question.rubric.reduce((rubricSum, criterion) => rubricSum + criterion.maxPoints, 0)
  }, 0)

  // Función para actualizar un puntaje individual
  const updateScore = (criterionId, value) => {
    setScores(prev => ({
      ...prev,
      [criterionId]: value
    }))
    handleAnyChange()
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <Header />
      
      <main className="flex-1 w-full mx-auto p-4 sm:p-6 lg:p-8 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-wrap justify-between gap-4 mb-8">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-gray-800 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Cuestionario 1: Introducción a la UI
              </p>
              <p className="text-gray-500 dark:text-[#9da6b9] text-base font-normal leading-normal">
                Entregado por: Juan Pérez - 25 de Octubre, 2:30 PM
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                scores={scores}
                updateScore={updateScore}
                onAnyChange={handleAnyChange}
              />
            ))}

            <FinalEvaluation 
              totalScore={totalScore} 
              maxScore={maxScore} 
              lastSaved={lastSaved}
              onAnyChange={handleAnyChange}
              questions={questions}
              scores={scores}
            />
          </div>
        </div>
      </main>

      <FloatingScoreFooter totalScore={totalScore} maxScore={maxScore} />
    </div>
  )
}

export default App

