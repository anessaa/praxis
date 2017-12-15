import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Praxis</Link>
      <div className="right hide-on-med-and-down">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} >LOG OUT</Link>
      </div>
      <ul className="right hide-on-med-and-down NavBar-names">
        <li><Link to="/scales">SCALE LIBRARY</Link></li>
        <li><Link to="/wall">TRACK PRACTICE</Link></li>
        <li><Link to="/feed">PRACTICE FEED</Link></li>
      </ul>
    </div>
  </nav> 
  :
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">Praxis</Link>
       <ul className="right hide-on-med-and-down">
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/signup">SIGN UP</Link></li>
      </ul>
  </div>;
  </nav>

  return (
    <div>
      {nav}
    </div>
    );
};

export default NavBar;