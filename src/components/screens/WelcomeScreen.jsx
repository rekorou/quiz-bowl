export function WelcomeScreen({
  name,
  code,
  error,
  onNameChange,
  onCodeChange,
  onSubmit,
  onErrorClear,
}) {
  return (
    <main className="lobby">
      <div className="lobby-card">
        <h1 className="lobby-heading">WELCOME</h1>

        <form className="lobby-form" onSubmit={onSubmit}>
          {error && <div className="form-error">{error}</div>}

          <label className="field">
            <span className="field-label">ENTER NAME</span>
            <input
              type="text"
              className="field-input"
              value={name}
              onChange={(e) => {
                onNameChange(e.target.value)
                if (error) onErrorClear()
              }}
              autoComplete="off"
            />
          </label>

          <label className="field">
            <span className="field-label">ENTER CODE</span>
            <input
              type="text"
              className="field-input"
              value={code}
              onChange={(e) => {
                onCodeChange(e.target.value)
                if (error) onErrorClear()
              }}
              autoComplete="off"
            />
          </label>

          <button type="submit" className="lobby-button">
            JOIN
          </button>
        </form>
      </div>
    </main>
  )
}
