import React from 'react';
import '../styles/Navbar.css';


// Template to hold scoring and player message
const Navbar = props => (
  <header className="App-header">
    <h1 className="App-title">ClickyTime</h1>
    <p className="score">Score: { props.score } of 12 | Top Score: { props.topScore }</p>
    <p className="message">{ props.message }</p>
  </header>
);

export default Navbar;