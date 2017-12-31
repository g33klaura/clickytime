import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";
// import image from "../img/"

// Images need imports too???
import abracadaniel from '../img/abracadaniel.png';

// ****************************************************************************
// Map over each image in 'img' rather than importing each one
// Thank you this guy: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
// function importAll(squareImg) {
//   let squares = {};
//   squareImg.keys().map((item, index) => { 
//     squares[item.replace('./', '')] = squareImg(item); 
//   });
//   return squares;
// }

// const squares = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

// <img src={images['doggy.png']} />
// ****************************************************************************

// Moved initally hard-coded images to scratch sheet so i stop getting a warning...

class Game extends React.Component {

  // Use "building block" from Squares to render each image in the materialize divs?

  // Need array of squares
  
  
  // test () => console.log({ friends[0].image });
   
  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          <Squares 
            image={ `static/img` {friends[0].image} }
            alt={ friends[0].name }
            key={ friends[0].id }
          />
        </Row>
      </main>
    )
  }

}

export default Game;
