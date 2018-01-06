// props component here
//  import in Game.js
// then able to update score & message on here?
// render <Navbar /> on App.js still? ~YES

import React from 'react';
import '../styles/Navbar.css';


const Navbar = props => (
  <header className="App-header">
    <h1 className="App-title">ClickyTime</h1>
    {/*<p className="score">Score goes here!</p>*/}
    <p className="score">Score: { props.score } out of 12</p>
    <p className="message">{ props.message }</p>
  </header>
);

export default Navbar;