import { useState } from 'react'

function FinalEvaluation({ totalScore, maxScore, lastSaved, onAnyChange }) {
  const [overrideScore, setOverrideScore] = useState('')
  
  // Usar el puntaje sobreescrito si existe, sino el calculado
  const finalScore = overrideScore !== '' ? parseFloat(overrideScore) : totalScore
  
  const handleOverrideChange = (e) => {
    const value = e.target.value
    if (value === '') {
      setOverrideScore('')
    } else {
      const numValue = parseFloat(value)
      if (!isNaN(numValue) && numValue >= 0) {
        setOverrideScore(Math.max(0, numValue))
      }
    }
    if (onAnyChange) onAnyChange()
  }

  const handleCommentChange = () => {
    if (onAnyChange) onAnyChange()
  }

  const formatTimestamp = (date) => {
    if (!date) return ''
    const now = new Date()
    const diff = Math.floor((now - date) / 1000) // diferencia en segundos
    
    if (diff < 5) return 'ahora mismo'
    if (diff < 60) return `hace ${diff} segundos`
    if (diff < 120) return 'hace 1 minuto'
    if (diff < 3600) return `hace ${Math.floor(diff / 60)} minutos`
    
    return date.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <section className="bg-white dark:bg-[#1a212f] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mt-4" id="final-evaluation">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Evaluación Final</h2>
      <div className="space-y-6">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="total-score">
              Puntaje Total Calculado
            </label>
            <p className="text-2xl font-bold text-primary" id="total-score">
              {totalScore.toFixed(1)} / {maxScore} Puntos
            </p>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="override-score">
              Sobreescribir Puntaje (opcional)
            </label>
            <div className="flex items-center gap-2">
              <input
                className="w-24 rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-lg font-bold text-center text-gray-700 dark:text-gray-300"
                id="override-score"
                type="number"
                min="0"
                step="0.1"
                value={overrideScore}
                onChange={handleOverrideChange}
                placeholder={totalScore.toFixed(1)}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">/ {maxScore}</span>
              {overrideScore !== '' && (
                <button
                  onClick={() => setOverrideScore('')}
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline"
                >
                  Restablecer
                </button>
              )}
            </div>
          </div>
        </div>
        
        {overrideScore !== '' && overrideScore !== totalScore && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <span className="font-semibold">Nota:</span> El puntaje final será <span className="font-bold">{finalScore.toFixed(1)}</span> puntos 
              (diferencia de {(finalScore - totalScore).toFixed(1)} puntos respecto al calculado).
            </p>
          </div>
        )}

        <div>
          <label
            className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="general-comments"
          >
            Comentarios adicionales
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-300"
            id="general-comments"
            name="general-comments"
            placeholder="Escribe tus comentarios generales aquí..."
            rows="5"
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          {lastSaved && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400" style={{ fontSize: '18px' }}>
                check_circle
              </span>
              <span>
                Guardado automáticamente {formatTimestamp(lastSaved)}
              </span>
            </div>
          )}
          <button className="flex items-center justify-center gap-2 min-w-[120px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors ml-auto">
            <span className="truncate">Publicar Calificación</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalEvaluation


