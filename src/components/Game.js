import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import '../styles/Game.css';
// import Squares from "./Squares.js";

// Images need imports too???
import abracadaniel from '../img/abracadaniel.png';

// Need to make each square image a component? then import Squares.js? 

const Game = props => (
  <main className="squares">
    <Row>
      <Col l={3} m={4} s={6}><img src={"http://lorempixel.com/output/animals-q-c-200-200-10.jpg"} alt="abracadaniel" /></Col>
      <Col l={3} m={4} s={6}><img src={abracadaniel} /></Col>
      <Col l={3} m={4} s={6}><p>3</p></Col>
      <Col l={3} m={4} s={6}><p>4</p></Col>
      <Col l={3} m={4} s={6}><p>5</p></Col>
      <Col l={3} m={4} s={6}><p>6</p></Col>
      <Col l={3} m={4} s={6}><p>7</p></Col>
      <Col l={3} m={4} s={6}><p>8</p></Col>
      <Col l={3} m={4} s={6}><p>9</p></Col>
      <Col l={3} m={4} s={6}><p>10</p></Col>
      <Col l={3} m={4} s={6}><p>11</p></Col>
      <Col l={3} m={4} s={6}><p>12</p></Col>
    </Row>
  </main>
);

export default Game;