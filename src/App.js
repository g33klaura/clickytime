import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
// import Game from './components/Game';
import Navbar from './components/Navbar';
import Squares from "./components/Squares";
import friends from "./friends.json";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends,
      score: 0,
      message: "Good luck!"
    };
    console.log(this.props);
  }
  
  handleCorrect() {
    // "correct, keep going" message ~DONE
    // shuffle squares
    // score +1 
    let scoreValue = this.state.score;
    ++scoreValue;
    console.log(scoreValue);
    
    // if score hits 12, "you win"
    if (scoreValue === 12) {
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

  handleWrong() {
    // supposed to have something saving a high score??*************************
    let endScore = this.state.score;
    console.log(endScore);

    // if (endScore > topScore) {
    //   topScore = endScore;
    // }
    // "incorrect" message ~DONE
    // reset game
    this.setState({
      // friends: {click: false},  //resets squares to initial state?
      score: 0,
      message: "Wrong! Sorry you lose!"
    });
  }

  handleClick = (id) => {
    // ^^Stores the id of image clicked in parameter

    // console.log("Image clicked");
    // console.log(id);

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
          // Now the -next- time that same square is clicked, it should set to false and stop the game.... right?? ~ Stops game, yes, set to false no
            // The next time the square is clicked, "incorrect guess" logs -- don't need to set to false until the game resets. this isn't "switching" true and false like still and animate
          console.log(friend);
        } 
        // console.log(newFriendData);
      }
      return newFriendData;
    });

    console.log(squaresMap);  //NOW returns the changed image AND the rest of the un-changed images
    
    this.setState({
      friends: squaresMap
    });

    // Reads if square was clicked before and displays message
    // Need to change to display on page********
    // guessedCorrectly ? console.log("Correct guess") : console.log("Incorrect guess");
    
    guessedCorrectly ? this.handleCorrect() : this.handleWrong();
  }


  render() {
    return (
      <div className="App">

        <Navbar 
          score={this.state.score}
          message={this.state.message}
        />

        <Container>
          <p className="App-intro">
            How good is your memory? Click each square ONCE!
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>
            
              {/* Game renders here within overall centered materialize div */}

              <main className="game-squares">
                <Row>

                  {/* Each of 12 squares rendered within this row div */}

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
