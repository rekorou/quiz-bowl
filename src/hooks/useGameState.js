import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getQuestionsForRound, getRoundById } from '../data/questionBank'
import {
  VALID_LOBBY_CODE,
  LOBBY_READY_COUNTDOWN_SECONDS,
  ROUND_INTRO_DURATION_MS,
  CORRECT_ANSWER_DURATION_MS,
  LEADERBOARD_DURATION_MS,
} from '../constants/config'

/**
 * Central game state and logic.
 * Handles rounds, questions, scoring, leaderboard, and screen transitions.
 */
export function useGameState() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [inLobby, setInLobby] = useState(false)
  const [error, setError] = useState('')
  const [isReady, setIsReady] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const [showRoundIntro, setShowRoundIntro] = useState(false)
  const [currentRoundId, setCurrentRoundId] = useState('easy')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [hasStartedQuestions, setHasStartedQuestions] = useState(false)
  const [showingAnswer, setShowingAnswer] = useState(false)
  const [questionTimeLeft, setQuestionTimeLeft] = useState(null)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [players, setPlayers] = useState([])
  const [scores, setScores] = useState({})
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showMatchComplete, setShowMatchComplete] = useState(false)
  const [showSuddenDeathIntro, setShowSuddenDeathIntro] = useState(false)
  const [animatedScores, setAnimatedScores] = useState([])

  const countdownRef = useRef(null)
  const questionTimerRef = useRef(null)
  const leaderboardTimerRef = useRef(null)
  const selectedOptionRef = useRef(null)
  const nameRef = useRef('')
  const hasAwardedRef = useRef(false)

  const round = getRoundById(currentRoundId)
  const roundQuestions = getQuestionsForRound(currentRoundId)
  const currentQuestion =
    !showRoundIntro && roundQuestions[currentQuestionIndex]

  const leaderboardEntries = useMemo(() => {
    const entries = (players.length ? players : name ? [name] : [])
      .map((teamName) => ({
        team: teamName,
        score: scores[teamName] ?? 0,
      }))
      .sort((a, b) => b.score - a.score)
    return entries.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }))
  }, [players, scores, name])

  const hasTie = useMemo(() => {
    if (leaderboardEntries.length < 2) return false
    const topScore = leaderboardEntries[0].score
    const tiedCount = leaderboardEntries.filter((e) => e.score === topScore).length
    return tiedCount >= 2
  }, [leaderboardEntries])

  const resetForNewGame = useCallback(() => {
    setCurrentRoundId('easy')
    setCurrentQuestionIndex(0)
    setShowRoundIntro(false)
    setHasStartedQuestions(false)
    setShowLeaderboard(false)
    setShowMatchComplete(false)
    setShowSuddenDeathIntro(false)
  }, [])

  const startQuestion = useCallback(
    (index, roundIdOverride) => {
      const activeRoundId = roundIdOverride ?? currentRoundId
      const questions = getQuestionsForRound(activeRoundId)
      if (!questions[index]) return
      if (questionTimerRef.current) {
        clearInterval(questionTimerRef.current)
        questionTimerRef.current = null
      }

      setCurrentQuestionIndex(index)
      setHasStartedQuestions(true)
      setShowingAnswer(false)
      setShowLeaderboard(false)
      setSelectedOptionIndex(null)
      selectedOptionRef.current = null
      hasAwardedRef.current = false

      const seconds =
        getRoundById(activeRoundId)?.timePerQuestionSeconds ?? 10
      setQuestionTimeLeft(seconds)

      questionTimerRef.current = setInterval(() => {
        setQuestionTimeLeft((prev) => {
          if (prev === null) return prev
          if (prev <= 1) {
            clearInterval(questionTimerRef.current)
            questionTimerRef.current = null
            setQuestionTimeLeft(0)

            const playerName = nameRef.current || name.trim()
            if (!hasAwardedRef.current) {
              const points =
                getRoundById(activeRoundId)?.pointsPerQuestion ?? 1
              if (
                selectedOptionRef.current ===
                  questions[index].correctOptionIndex &&
                playerName
              ) {
                setScores((prev) => ({
                  ...prev,
                  [playerName]: (prev[playerName] ?? 0) + points,
                }))
              }
              hasAwardedRef.current = true
            }

            setShowingAnswer(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    },
    [currentRoundId],
  )

  const handleJoinSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (!name.trim()) {
        setError('Please enter your name.')
        return
      }
      if (code.trim().toUpperCase() === VALID_LOBBY_CODE) {
        setError('')
        setInLobby(true)
        setIsReady(false)
        setCountdown(null)
        resetForNewGame()

        const trimmedName = name.trim()
        nameRef.current = trimmedName

        setPlayers((prev) =>
          prev.includes(trimmedName) ? prev : [...prev, trimmedName],
        )
        setScores((prev) =>
          Object.prototype.hasOwnProperty.call(prev, trimmedName)
            ? prev
            : { ...prev, [trimmedName]: 0 },
        )
      } else {
        setError('Invalid lobby code. Please check and try again.')
      }
    },
    [name, code, resetForNewGame],
  )

  const handleSelectOption = useCallback((index) => {
    if (showingAnswer || questionTimeLeft === 0) return
    setSelectedOptionIndex(index)
    selectedOptionRef.current = index
  }, [showingAnswer, questionTimeLeft])

  const handleToggleReady = useCallback(() => {
    setIsReady((prev) => !prev)
  }, [])

  const handleNameChange = useCallback((value) => {
    setName(value)
    nameRef.current = value
  }, [])

  // Lobby ready countdown
  useEffect(() => {
    if (!inLobby || !isReady) {
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
        countdownRef.current = null
      }
      setCountdown(null)
      return
    }

    setCountdown(LOBBY_READY_COUNTDOWN_SECONDS)
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null) return prev
        if (prev <= 1) {
          clearInterval(countdownRef.current)
          countdownRef.current = null
          setIsReady(true)
          setInLobby(false)
          setShowRoundIntro(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
        countdownRef.current = null
      }
    }
  }, [inLobby, isReady])

  // Round intro -> first question
  useEffect(() => {
    if (!showRoundIntro) return
    const timeoutId = setTimeout(() => {
      setShowRoundIntro(false)
      startQuestion(0)
    }, ROUND_INTRO_DURATION_MS)
    return () => clearTimeout(timeoutId)
  }, [showRoundIntro, startQuestion])

  // Sudden Death intro -> first question
  useEffect(() => {
    if (!showSuddenDeathIntro) return
    const timeoutId = setTimeout(() => {
      setShowSuddenDeathIntro(false)
      setCurrentRoundId('sudden-death')
      setCurrentQuestionIndex(0)
      startQuestion(0, 'sudden-death')
    }, ROUND_INTRO_DURATION_MS)
    return () => clearTimeout(timeoutId)
  }, [showSuddenDeathIntro, startQuestion])

  // After correct answer -> next question or transition
  useEffect(() => {
    if (!showingAnswer) return

    const timeoutId = setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1

      if (currentRoundId === 'easy') {
        setShowLeaderboard(true)
        setHasStartedQuestions(false)
        if (nextIndex < roundQuestions.length) {
          setTimeout(() => {
            setShowLeaderboard(false)
            startQuestion(nextIndex)
          }, LEADERBOARD_DURATION_MS)
        } else {
          setTimeout(() => {
            setShowLeaderboard(false)
            setCurrentRoundId('average')
            setCurrentQuestionIndex(0)
            setShowRoundIntro(true)
          }, LEADERBOARD_DURATION_MS)
        }
      } else if (currentRoundId === 'average') {
        setShowLeaderboard(true)
        setHasStartedQuestions(false)
        if (nextIndex < roundQuestions.length) {
          setTimeout(() => {
            setShowLeaderboard(false)
            startQuestion(nextIndex)
          }, LEADERBOARD_DURATION_MS)
        } else {
          setTimeout(() => {
            setShowLeaderboard(false)
            setCurrentRoundId('difficult')
            setCurrentQuestionIndex(0)
            setShowRoundIntro(true)
          }, LEADERBOARD_DURATION_MS)
        }
      } else if (currentRoundId === 'sudden-death') {
        setHasStartedQuestions(false)
        const sorted = [...leaderboardEntries].sort((a, b) => b.score - a.score)
        const soleLeader =
          sorted.length >= 2 &&
          sorted[0].score > sorted[1].score &&
          sorted[0].team === (nameRef.current || name.trim())

        setShowLeaderboard(true)
        if (!soleLeader && nextIndex < roundQuestions.length) {
          setTimeout(() => {
            setShowLeaderboard(false)
            startQuestion(nextIndex)
          }, LEADERBOARD_DURATION_MS)
        }
      } else {
        setHasStartedQuestions(false)
        if (nextIndex < roundQuestions.length) {
          setShowLeaderboard(true)
          setShowMatchComplete(false)
          setTimeout(() => {
            setShowLeaderboard(false)
            startQuestion(nextIndex)
          }, LEADERBOARD_DURATION_MS)
        } else {
          setShowMatchComplete(true)
          setShowLeaderboard(false)
          setTimeout(() => {
            setShowMatchComplete(false)
            setShowLeaderboard(true)
            setTimeout(() => {
              if (hasTie) {
                setShowLeaderboard(false)
                setShowSuddenDeathIntro(true)
              }
            }, LEADERBOARD_DURATION_MS)
          }, LEADERBOARD_DURATION_MS)
        }
      }
    }, CORRECT_ANSWER_DURATION_MS)

    return () => clearTimeout(timeoutId)
  }, [
    showingAnswer,
    currentQuestionIndex,
    roundQuestions.length,
    currentRoundId,
    leaderboardEntries,
    hasTie,
    startQuestion,
  ])

  // Leaderboard score animation
  useEffect(() => {
    if (!showLeaderboard) {
      if (leaderboardTimerRef.current) {
        clearInterval(leaderboardTimerRef.current)
        leaderboardTimerRef.current = null
      }
      return
    }

    if (!leaderboardEntries.length) {
      setAnimatedScores([])
      return
    }

    setAnimatedScores(leaderboardEntries.map((entry) => ({ ...entry, score: 0 })))

    leaderboardTimerRef.current = setInterval(() => {
      setAnimatedScores((prev) => {
        let done = true
        const next = prev.map((entry, index) => {
          const target = leaderboardEntries[index].score
          if (entry.score >= target) return entry
          done = false
          const step = Math.max(1, Math.round(target / 20))
          return { ...entry, score: Math.min(target, entry.score + step) }
        })

        if (done && leaderboardTimerRef.current) {
          clearInterval(leaderboardTimerRef.current)
          leaderboardTimerRef.current = null
        }

        return next
      })
    }, 80)

    return () => {
      if (leaderboardTimerRef.current) {
        clearInterval(leaderboardTimerRef.current)
        leaderboardTimerRef.current = null
      }
    }
  }, [showLeaderboard, leaderboardEntries])

  return {
    // Form / join
    name,
    setName,
    handleNameChange,
    code,
    setCode,
    error,
    setError,
    handleJoinSubmit,
    nameRef,

    // Lobby
    inLobby,
    isReady,
    countdown,
    handleToggleReady,

    // Rounds
    currentRoundId,
    showRoundIntro,
    showSuddenDeathIntro,
    round,
    roundQuestions,
    currentQuestionIndex,

    // Questions
    hasStartedQuestions,
    currentQuestion,
    showingAnswer,
    questionTimeLeft,
    selectedOptionIndex,
    handleSelectOption,

    // Leaderboard
    showLeaderboard,
    showMatchComplete,
    leaderboardEntries,
    animatedScores,
  }
}
