import React from 'react';
import { Button, Card, Row, Col, CardTitle } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares.js";

// Images need imports too???
// import abracadaniel from '../img/abracadaniel.png';

// ****************************************************************************
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
// ****************************************************************************

// Needs to be Component Class, pulling from Squares Component****
// Think reusable blocks of code...
{/* 
const Game = props => (
  <main className="squares">
    <Row>
      <Col l={3} m={4} s={6}>
        
        <img src={squares["abracadaniel.png"]} alt="abracadaniel" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["billycanyon.png"]} alt="billy_and_canyon" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["goliad.png"]} alt="goliad" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["jake.png"]} alt="jake" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["lspmissing.png"]} alt="lsp_missing_lumps" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["memow.png"]} alt="memow" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["newlemongrab.png"]} alt="lemongrab_all_better" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["princesscookie.png"]} alt="princess_cookie" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["prismo.png"]} alt="prismo" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["shelbylilbro.png"]} alt="shelby_and_little_brother" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["sweetp.png"]} alt="sweet_p" className="z-depth-4" />
      </Col>

      <Col l={3} m={4} s={6}>
        <img src={squares["treetrunks.png"]} alt="treetrunks" className="z-depth-4" />
      </Col>
    </Row>
  </main>
);
*/}

export class Game extends React.Component {

  // Use "building block" from Squares to render each image in the materialize divs?

  // Need array of squares

  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
        </Row>
      </main>
    )
  }

}

// export default Game;
