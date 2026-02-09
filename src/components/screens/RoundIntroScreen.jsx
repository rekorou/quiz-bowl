export function RoundIntroScreen({ round }) {
  return (
    <main className="round-intro-main">
      <section className="round-intro-card">
        <div className="round-intro-title-bar">
          <h1 className="round-intro-title">
            {round ? `${round.difficulty} ROUND` : 'ROUND'}
          </h1>
        </div>
        <div className="round-intro-body">
          <p>
            {round
              ? `${round.totalQuestions} QUESTIONS, ${round.pointsPerQuestion} POINT${
                  round.pointsPerQuestion !== 1 ? 'S' : ''
                } EACH.`
              : 'QUESTIONS AND POINTS'}
          </p>
          <p>
            {round
              ? `YOU WILL BE GIVEN ${round.timePerQuestionSeconds} SECONDS TO ANSWER`
              : 'YOU WILL HAVE LIMITED TIME TO ANSWER'}
          </p>
        </div>
      </section>
    </main>
  )
}
