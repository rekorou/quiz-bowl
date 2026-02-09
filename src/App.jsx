import { useGameState } from './hooks/useGameState'
import { AppHeader } from './components/AppHeader'
import {
  WelcomeScreen,
  LobbyScreen,
  RoundIntroScreen,
  SuddenDeathIntroScreen,
  QuestionScreen,
  CorrectAnswerScreen,
  LeaderboardScreen,
  MatchCompleteScreen,
} from './components/screens'
import './App.css'

function App() {
  const {
    name,
    handleNameChange,
    code,
    setCode,
    error,
    setError,
    handleJoinSubmit,
    inLobby,
    isReady,
    countdown,
    handleToggleReady,
    showRoundIntro,
    showSuddenDeathIntro,
    round,
    roundQuestions,
    currentQuestionIndex,
    hasStartedQuestions,
    currentQuestion,
    showingAnswer,
    questionTimeLeft,
    selectedOptionIndex,
    handleSelectOption,
    showLeaderboard,
    showMatchComplete,
    animatedScores,
  } = useGameState()

  return (
    <div className="app-root">
      <div className="app-frame">
        <AppHeader />

        {showSuddenDeathIntro ? (
          <SuddenDeathIntroScreen />
        ) : showMatchComplete ? (
          <MatchCompleteScreen />
        ) : showLeaderboard ? (
          <LeaderboardScreen animatedScores={animatedScores} />
        ) : showingAnswer && hasStartedQuestions && currentQuestion ? (
          <CorrectAnswerScreen question={currentQuestion} />
        ) : hasStartedQuestions && currentQuestion ? (
          <QuestionScreen
            question={currentQuestion}
            round={round}
            roundQuestions={roundQuestions}
            questionIndex={currentQuestionIndex}
            questionTimeLeft={questionTimeLeft}
            selectedOptionIndex={selectedOptionIndex}
            showingAnswer={showingAnswer}
            onSelectOption={handleSelectOption}
          />
        ) : showRoundIntro ? (
          <RoundIntroScreen round={round} />
        ) : inLobby ? (
          <LobbyScreen
            name={name}
            isReady={isReady}
            countdown={countdown}
            onToggleReady={handleToggleReady}
          />
        ) : (
          <WelcomeScreen
            name={name}
            code={code}
            error={error}
            onNameChange={(value) => {
              handleNameChange(value)
              if (error) setError('')
            }}
            onCodeChange={(value) => {
              setCode(value)
              if (error) setError('')
            }}
            onSubmit={handleJoinSubmit}
            onErrorClear={() => setError('')}
          />
        )}
      </div>
    </div>
  )
}

export default App
