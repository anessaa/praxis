import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Praxis</Link>
      
      <div className="right hide-on-med-and-down">
      <span>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} >LOG OUT</Link>
      </div>

      <ul className="right hide-on-med-and-down">
        <li><Link to="/scales">scale encyclopedia</Link></li>
        <li><Link to="/wall">user wall</Link></li>
        <li><Link to="/feed">praxis feed</Link></li>
      </ul>
    </div>
  </nav> 
  :
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">Praxis</Link>
       <ul className="right hide-on-med-and-down">
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">sign up</Link></li>
       

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