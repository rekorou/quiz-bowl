export function CorrectAnswerScreen({ question }) {
  const label = String.fromCharCode(65 + question.correctOptionIndex)
  const answerText = question.options[question.correctOptionIndex]

  return (
    <main className="answer-main">
      <section className="correct-answer-banner">
        <div className="correct-answer-title">CORRECT ANSWER</div>
        <div className="correct-answer-text">
          {label}. {answerText}
        </div>
      </section>
    </main>
  )
}
