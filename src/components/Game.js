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
    // state = {
      friends, 
    };
    // console.log(this.props);
  }

  handleClick = (id) => {

    // this.setState({
    //   friends
    // });
    console.log("Image clicked");
    console.log(id);

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
