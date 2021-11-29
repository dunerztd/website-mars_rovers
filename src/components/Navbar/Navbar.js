import { NavLink } from "react-router-dom";

import './navbar.css'
import "@fontsource/roboto/700.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navlinks">
        <NavLink to="/Perseverance" className='nav__item'>
          Perseverance
        </NavLink>
        <NavLink to="/Curiosity" className='nav__item'>
          Curiosity
        </NavLink>
        <NavLink to="/Opportunity" className='nav__item'>
          Opportunity
        </NavLink>
        <NavLink to="/Spirit" className='nav__item'>
          Spirit
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar