import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <span> | </span>
      <NavLink to="/Curiosity">
        Curiosity
      </NavLink>
      <span> | </span>
      <NavLink to="/Opportunity">
        Opportunity
      </NavLink>
      <span> | </span>
      <NavLink to="/Spirit">
        Spirit
      </NavLink>
      <span> | </span>
      <NavLink to="/Perseverance">
        Perseverance
      </NavLink>
    </nav>
  )
}

export default Navbar