function FinalEvaluation({ totalScore, maxScore }) {
  return (
    <section className="bg-white dark:bg-[#1a212f] p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mt-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Evaluación Final</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="total-score">
            Puntaje Total
          </label>
          <p className="mt-1 text-2xl font-bold text-primary" id="total-score">
            {totalScore.toFixed(1)} / {maxScore} Puntos
          </p>
        </div>
        <div className="flex items-center">
          <input
            className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-primary focus:ring-primary"
            id="notify-student"
            type="checkbox"
          />
          <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300" htmlFor="notify-student">
            Enviar comentarios por correo electrónico para notificar al alumno de su calificación.
          </label>
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"
            htmlFor="general-comments"
          >
            Comentarios adicionales
          </label>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Escribe un comentario, y pulsa el botón 'Enviar comentarios' para notificar al alumno de sus comentarios.
          </p>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-300"
            id="general-comments"
            name="general-comments"
            placeholder="Escribe tus comentarios generales aquí..."
            rows="5"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center justify-center gap-2 min-w-[120px] max-w-[480px] cursor-pointer overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Publicar Calificación</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalEvaluation
