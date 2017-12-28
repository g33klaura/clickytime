import React from 'react';
// import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import '../styles/Game.css';
// import Squares from "./Squares.js";

// Images need imports too???
// import abracadaniel from '../img/abracadaniel.png';

// **************************************
// Map over each image in 'img' rather than importing each one
// Thank you this guy: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(squareImg) {
  let squares = {};
  squareImg.keys().map((item, index) => { 
    squares[item.replace('./', '')] = squareImg(item); 
  });
  return squares;
}

const squares = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

// <img src={images['doggy.png']} />
// **************************************

const Game = props => (
  <main className="squares">
    <Row>
      <Col l={3} m={4} s={6}>
      <img src={squares["abracadaniel.png"]} alt="abracadaniel" />
      </Col>

      <Col l={3} m={4} s={6}><img src={squares["billycanyon.png"]} alt="billy_and_canyon" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["goliad.png"]} alt="goliad" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["jake.png"]} alt="jake" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["lspmissing.png"]} alt="lsp_missing_lumps" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["memow.png"]} alt="memow" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["newlemongrab.png"]} alt="lemongrab_all_better" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["princesscookie.png"]} alt="princess_cookie" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["prismo.png"]} alt="prismo" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["shelbylilbro.png"]} alt="shelby_and_little_brother" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["sweetp.png"]} alt="sweet_p" /></Col>

      <Col l={3} m={4} s={6}><img src={squares["treetrunks.png"]} alt="treetrunks" /></Col>
    </Row>
  </main>
);

export default Game;