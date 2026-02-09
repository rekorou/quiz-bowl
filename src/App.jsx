import { useState } from 'react'
import './App.css'

const VALID_LOBBY_CODE = 'QZ-7HK'

function App() {
  const [teamName, setTeamName] = useState('')
  const [lobbyCode, setLobbyCode] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('idle')

  const handleJoin = (event) => {
    event.preventDefault()

    const trimmedName = teamName.trim()
    const normalizedCode = lobbyCode.trim().toUpperCase()

    if (!trimmedName) {
      setStatusType('error')
      setStatusMessage('Please enter a team name.')
      return
    }

    if (normalizedCode !== VALID_LOBBY_CODE) {
      setStatusType('error')
      setStatusMessage('Invalid code. Please check your lobby code and try again.')
      return
    }

    setStatusType('success')
    setStatusMessage(`Welcome, ${trimmedName}! Joining lobby ${VALID_LOBBY_CODE}...`)
  }

  return (
    <main className="welcome-page">
      <header className="top-bar">
        <div className="logo-box">LOGO</div>
        <h1>QUIZ BOWL</h1>
      </header>

      <section className="welcome-card" aria-label="Join lobby card">
        <h2>WELCOME</h2>

        <form onSubmit={handleJoin} className="join-form">
          <label htmlFor="teamName">ENTER TEAM NAME</label>
          <input
            id="teamName"
            type="text"
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
            placeholder="Team Name"
            autoComplete="off"
          />

          <label htmlFor="lobbyCode">ENTER CODE</label>
          <input
            id="lobbyCode"
            type="text"
            value={lobbyCode}
            onChange={(event) => setLobbyCode(event.target.value)}
            placeholder="QZ-7HK"
            autoComplete="off"
          />

          <button type="submit">JOIN</button>

          {statusMessage ? (
            <p className={`status-message ${statusType}`} role="status">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  )
}

export default App
