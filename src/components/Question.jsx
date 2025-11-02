import { useState } from 'react'

function Question({ question, scores, updateScore, onAnyChange }) {
  const [activeTooltip, setActiveTooltip] = useState(null)

  const handleScoreChange = (criterionId, value) => {
    updateScore(criterionId, value)
    if (onAnyChange) onAnyChange()
  }

  const handleCommentChange = () => {
    if (onAnyChange) onAnyChange()
  }

  return (
    <section className="flex flex-col lg:flex-row gap-8" id={`pregunta-${question.id}`}>
      <div className="w-full lg:w-1/2 xl:w-2/3">
        <div className="bg-white dark:bg-[#1a212f] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
          <h1 className="text-gray-800 dark:text-white tracking-tight text-2xl font-bold leading-tight pb-4">
            {question.title}
          </h1>
          <div className="prose prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p>{question.answer}</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/3">
        <div className="bg-white dark:bg-[#1a212f] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
            Rúbrica - Pregunta {question.id}
          </h3>
          <div className="space-y-4">
            {question.rubric.map((criterion) => (
              <div key={criterion.id}>
                <div className="flex items-center gap-2 mb-1">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor={`${criterion.id}-score`}
                  >
                    {criterion.label}
                  </label>
                  {criterion.description && (
                    <div className="relative">
                      <button
                        type="button"
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        onMouseEnter={() => setActiveTooltip(criterion.id)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        onClick={() => setActiveTooltip(activeTooltip === criterion.id ? null : criterion.id)}
                      >
                        <span className="material-symbols-outlined text-sm">info</span>
                      </button>
                      {activeTooltip === criterion.id && (
                        <div className="absolute left-0 top-full mt-1 z-10 w-64 p-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-lg border border-gray-700">
                          <div className="absolute -top-1 left-3 w-2 h-2 bg-gray-900 dark:bg-gray-800 border-l border-t border-gray-700 transform rotate-45"></div>
                          {criterion.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-20 rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-sm text-gray-700 dark:text-gray-300 text-center"
                    id={`${criterion.id}-score`}
                    type="number"
                    min="0"
                    max={criterion.maxPoints}
                    step="0.1"
                    value={scores[criterion.id]}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value) || 0
                      const clampedValue = Math.min(Math.max(value, 0), criterion.maxPoints)
                      handleScoreChange(criterion.id, clampedValue)
                    }}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    / {criterion.maxPoints} puntos
                  </span>
                </div>
                <textarea
                  className="mt-2 w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-sm text-gray-700 dark:text-gray-300"
                  id={`${criterion.id}-comment`}
                  placeholder={`Comentario sobre ${criterion.label}...`}
                  rows="2"
                  onChange={handleCommentChange}
                ></textarea>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Question

