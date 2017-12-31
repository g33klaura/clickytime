import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


// Moved initally hard-coded images to scratch sheet so i stop getting a warning...

class Game extends React.Component {

  // Use "building block" component from Squares to render each image in the materialize divs
  state = {
    friends
  };

  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          {/* Need map or filter here? Can I use the same thing I used when hard-coded? (saved it to scratch.js*****) */}
          {/*<Col l={3} m={4} s={6}>*/}

          {this.state.friends.map(friends => (
            <Squares 
              image={ friends.image }
              alt={ friends.name }
              key={ friends.id }
            />
          ))}
          
          {/*</Col>*/}
        </Row>
      </main>
    )
  }

}

export default Game;

// This was between <Row> </Row>
// <Squares 
//             image={ friends[0].image }
//             alt={ friends[0].name }
//             key={ friends[0].id }
// />