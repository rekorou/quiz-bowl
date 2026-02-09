import { ROOM_DISPLAY_CODE } from '../../constants/config'

export function QuestionScreen({
  question,
  round,
  roundQuestions,
  questionIndex,
  questionTimeLeft,
  selectedOptionIndex,
  showingAnswer,
  onSelectOption,
}) {
  return (
    <main className="question-main">
      <section className="question-layout">
        <header className="question-top-bar">
          <div className="question-room">ROOM {ROOM_DISPLAY_CODE}</div>
          <div className="question-timer">
            TIME REMAINING 00:
            {String(Math.max(questionTimeLeft ?? 0, 0)).padStart(2, '0')}
          </div>
        </header>

        <div className="question-content">
          <div className="question-panel">
            <div className="question-panel-header">QUESTION</div>
            <div className="question-panel-body">{question.text}</div>
          </div>

          <div className="answer-panel">
            <div className="answer-panel-header">SELECT ANSWER</div>
            <div className="answer-options">
              {question.options.map((option, index) => {
                const isCorrect = index === question.correctOptionIndex
                const isSelected = index === selectedOptionIndex
                const showAsCorrect = showingAnswer && isCorrect
                const label = String.fromCharCode(65 + index)

                return (
                  <button
                    key={option}
                    type="button"
                    className={[
                      'answer-option',
                      isSelected ? 'answer-option-selected' : '',
                      showAsCorrect ? 'answer-option-correct' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => onSelectOption(index)}
                    disabled={showingAnswer}
                  >
                    <span className="answer-option-label">{label}.</span> {option}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <footer className="question-footer">
          <div className="question-meta">[MODE] MULTIPLAYER</div>
          <div className="question-meta">
            [LEVEL] {round?.difficulty ?? 'EASY'}
          </div>
          <div className="question-meta">
            [QUESTION] {questionIndex + 1}/{roundQuestions.length}
          </div>
        </footer>
      </section>
    </main>
  )
}
