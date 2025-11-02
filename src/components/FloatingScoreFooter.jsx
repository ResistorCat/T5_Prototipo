import { useState, useEffect } from 'react'

function FloatingScoreFooter({ totalScore, maxScore }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const finalEvalSection = document.getElementById('final-evaluation')
      if (finalEvalSection) {
        const rect = finalEvalSection.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0
        setIsVisible(!isInViewport)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 dark:bg-[#1a212f]/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Puntaje Actual:
              </span>
              <span className="text-xl font-bold text-primary">
                {totalScore.toFixed(1)} / {maxScore}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">puntos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 sm:w-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${Math.min((totalScore / maxScore) * 100, 100)}%` }}
                />
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 min-w-[3rem] text-right">
                {Math.round((totalScore / maxScore) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingScoreFooter
