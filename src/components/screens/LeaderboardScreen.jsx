import { MAX_POSSIBLE_SCORE } from '../../constants/config'

export function LeaderboardScreen({ animatedScores }) {
  return (
    <main className="leaderboard-main">
      <section className="leaderboard-panel">
        <h1 className="leaderboard-heading">LEADERBOARD</h1>

        <div className="leaderboard-table">
          <div className="leaderboard-header">
            <span>TEAM</span>
            <span>SCORE</span>
          </div>

          <div className="leaderboard-rows">
            {animatedScores.map((entry) => {
              const percent = Math.min(
                100,
                (entry.score / MAX_POSSIBLE_SCORE) * 100,
              )
              return (
                <div key={entry.team} className="leaderboard-row">
                  <span className="leaderboard-team">{entry.team}</span>
                  <div className="leaderboard-score-cell">
                    <div className="leaderboard-progress-track">
                      <div
                        className="leaderboard-progress-fill"
                        style={{ width: `${percent}%` }}
                      />
                      <span
                        className="leaderboard-score-value"
                        style={{
                          left: `${Math.max(percent, 2)}%`,
                        }}
                      >
                        {entry.score}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
