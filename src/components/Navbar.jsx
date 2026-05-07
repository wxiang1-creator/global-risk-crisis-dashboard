import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Global Risk & Crisis Intelligence Dashboard</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
      </div>
    </nav>
  )
}

export default Navbar
