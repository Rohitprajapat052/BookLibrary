import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect ,user} = useAuth0();
  const { logout ,isAuthenticated} = useAuth0();

  return (
    <nav>
      <Link to="/" className="logo">
        <img src="./assets/logo.png" alt="Logo" /> {/* Replace "logo.png" with the actual path to your logo image */}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {isAuthenticated && (<li><p>{user.name}</p></li>)}
        {
            isAuthenticated ? (<li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </li>):( <li>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>)
        }
        
      </ul>
    </nav>
  );
};

export default Navbar;
