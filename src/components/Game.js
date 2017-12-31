import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


// Component class for rendering all game squares from friends.json
class Game extends React.Component {

  // Use "building block" component from Squares to render each image in the materialize divs

  // Activity 16.... how does this work now?....
  state = {
    friends,
    click: false
  };

  handleClick = () => {
    // this.handleClick = this.handleClick.bind(this);
    this.setState({
      click: true
    });
    console.log("Image clicked");
  }

  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          {this.state.friends.map(friends => (
            <Squares 
              image={ friends.image }
              alt={ friends.name }
              key={ friends.id }
              click={ this.state.click }
              onClick={ this.handleClick }
            />
          ))}
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