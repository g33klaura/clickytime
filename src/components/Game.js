import React from 'react';
import { Row } from 'react-materialize';
import '../styles/Game.css';
import Squares from "./Squares";
import friends from "../friends.json";


// Component class for rendering all game squares from friends.json
class Game extends React.Component {



  // Activity 16.... how does this work now?....
  // state = {
  //   friends,
  //   click: false
  // };

  constructor(props) {
    super(props);
    this.state = { 
      friends,
      click: false,
      color: "testing this connects" 
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  handleClick = () => {
    this.handleClick = this.handleClick.bind(this);
    this.setState({
      click: true
    });
    console.log("Image clicked");

    // console.log(this.friends.id);  //error "_this.friends is undefined"

    console.log(friends.id);  //undefined
      // ^^Don't think it's grabbing from page, think it's trying to grab from friendS.json
      // Breaks if remove the 's'

    // console.log(this.friend.id);  //error "_this.friend is undefined"

    console.log(this.props.id);  //undefined

    console.log(this.id);  //undefined

    // console.log(this.state.friend.id);  //error "_this.state.friend is undefined"
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
              click={ this.state.click }
              onClick={ this.handleClick }
              color-test={ this.state.color }
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