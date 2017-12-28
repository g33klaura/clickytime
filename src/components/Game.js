import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import '../styles/Game.css';

const Game = props => (
  <main className="squares">
    <Row>
      <Col l={3} m={4} s={6}><p>1</p></Col>
      <Col l={3} m={4} s={6}><p>2</p></Col>
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