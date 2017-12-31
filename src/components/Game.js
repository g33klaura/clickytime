import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


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

  // Use "building block" component from Squares to render each image in the materialize divs
   
  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          {/* Need map or filter here? Can I use the same thing I used when hard-coded? (saved it to scratch.js*****) */}
          <Squares 
            image={ friends[0].image }
            alt={ friends[0].name }
            key={ friends[0].id }
          />
        </Row>
      </main>
    )
  }

}

export default Game;
