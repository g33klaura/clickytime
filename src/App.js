import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
// import Game from './components/Game';
import Navbar from './components/Navbar';
import Squares from "./components/Squares";
import friends from "./friends.json";
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends,
      score: 0,
      topScore: 0,
      message: "Good luck!"
    };
  }
  

  resetGame = () => {
    // Checks if player score beats their top score
    let endScore = this.state.score;
    // console.log(endScore);

    let newTopScore = this.state.topScore;

    // If endScore beats topScore, update topScore
    if (endScore >= newTopScore) {
      newTopScore = endScore;
    }

    // resets components to initial state (friends.click: false, score: 0, new encouraging message)
    // can I get the shake animation to trigger here? similar to the shuffle setState call?***********
    this.setState({
      friends,
      score: 0,
      topScore: newTopScore,
      message: "Try again"
    });
  }


  correctGuess = () => {
    // "correct, keep going" message ~DONE
    // shuffle squares ~DONE
    // score +1 ~DONE
    let scoreValue = this.state.score;
    ++scoreValue;
    
    // if score hits 12, "you win"
    if (scoreValue === 12) {
      // instead needs to call resetGame here, but "you win" modal would be nice*****
      this.setState({
        score: scoreValue,
        message: "You win!!"
      });
    } else {
      this.setState({
        score: scoreValue,
        message: "Correct! Keep going."
      });
    }
  }


  wrongGuess = () => {
    // Moved updating topScore logic to resetGame 
    this.resetGame();
  }


  handleClick = (id) => {
    // ^^Stores the id of image clicked in parameter

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
            // The next time the square is clicked, doesn't need to set to false until the game resets. 
            // (this isn't "switching" true and false like still and animate)
          // console.log(friend);
        }
      }
      return newFriendData;
    });

    // console.log(squaresMap);  //NOW returns the changed image AND the rest of the un-changed images
    
    // Triggers shuffle effect when square is clicked
    this.setState({
      sortingMethod: 'shuffle',
      friends: shuffle(squaresMap)
    });

    // Determines if square was clicked before and fires appropriate function
    guessedCorrectly ? this.correctGuess() : this.wrongGuess();
  }


  render() {
    return (
      <div className="App">

        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Container>
          <p className="App-intro">
            How good is your memory? Click each square only ONCE!
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>
            
              {/* Game renders here within overall centered materialize div */}

              <main className="game-squares">
                <Row style={{position: "relative"}}>

                  {/* Each of 12 squares rendered within this row div */}
                  <FlipMove staggerDurationBy={30} duration={750} enterAnimation={"accordionHorizontal"}>
                  {this.state.friends.map(friend => (
                    <Squares 
                      image={ friend.image }
                      alt={ friend.name }
                      key={ friend.id }
                      id={ friend.id }
                      click={ friend.click }
                      handleClick={ this.handleClick }
                    />
                  ))}
                  </FlipMove>
                </Row>
              </main>

            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
