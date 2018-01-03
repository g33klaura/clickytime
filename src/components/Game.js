import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


// Component class for rendering all game squares from friends.json
class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      friends 
    };
    // console.log(this.props);
  }


  handleClick = (id) => {
    // ^^Stores the id of image clicked in parameter

    // console.log("Image clicked");
    console.log(id);

    // Compared whether or not been clicked before 
    let guessedCorrectly = false;

    const squaresMap = this.state.friends.map(friend => {
      // Makes a copy of the friends array to manupulate
      const newFriendData = { ...friend };

      // then match the id to one in array AND check if click is currently true or false
      if (newFriendData.id === id) {
        if (!newFriendData.click) {

          newFriendData.click = true;
          guessedCorrectly = true;

          console.log(friend);
        } 
        // console.log(newFriendData);
        return newFriendData;
      }
      return squaresMap;   
    });
    console.log(squaresMap);  //returns just the image that's now set to click: true
    
    // what makes this re-render changes in the dom.......
    // do i set state again?.........
    this.setState = {
      squaresMap
    }
    guessedCorrectly ? console.log("Correct guess") : console.log("Incorrect guess");
  }

  // Use "building block" component from Squares to render each image in the materialize divs
  render() {
    return (
      <main className="game-squares">
        <Row>
          {/* Each of 12 squares rendered within this row div */}
          {this.state.friends.map(friend => (
            <Squares 
              image={ friend.image }
              alt={ friend.name }
              key={ friend.id }
              id={ friend.id }
              handleClick={ this.handleClick }
            />
          ))}
        </Row>
      </main>
    )
  }
}

export default Game;
