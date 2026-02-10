import logo from '../assets/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-logo">
        <img src={logo} alt="Quiz Bowl logo" style={{ height: '52px' }} />
      </div>
      <div className="app-title">QUIZ BOWL</div>
      <div className="app-header-spacer" />
    </header>
  )
}
