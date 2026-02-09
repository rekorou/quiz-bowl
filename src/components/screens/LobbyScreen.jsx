export function LobbyScreen({
  name,
  isReady,
  countdown,
  onToggleReady,
}) {
  return (
    <main className="lobby-main">
      <section className="lobby-panel">
        <h1 className="lobby-status-heading">WAITING FOR HOST TO START...</h1>

        {isReady && countdown !== null && countdown > 0 && (
          <p className="countdown-text">All players ready. Starting in {countdown}s...</p>
        )}

        <h2 className="participants-heading">PARTICIPANTS</h2>

        <div className="participants-table">
          <div className="participants-header">
            <span>TEAM</span>
            <span>STATUS</span>
          </div>

          <div className="participants-rows">
            <div className="participants-row">
              <span>{name}</span>
              <span>{isReady ? 'READY' : 'UNREADY'}</span>
            </div>
          </div>
        </div>

        <div className="lobby-footer">
          <button
            type="button"
            className="unready-button"
            onClick={onToggleReady}
            disabled={countdown === 0}
          >
            {isReady ? 'UNREADY' : 'READY'}
          </button>
        </div>
      </section>
    </main>
  )
}
