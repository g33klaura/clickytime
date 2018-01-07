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
    // console.log(this.props);

    // preserve initial state in new object
    // this.baseState = this.state;
    // console.log(this.baseState);
    // console.log(this.baseState.friends);
    // const friendsBaseState = this.baseState.friends;
    // console.log(friendsBaseState);
  }
  

  resetGame = () => {
    // resets components to initial state (click: false, score: 0, etc.)
    // this.setState(this.baseState.friends);

    let endScore = this.state.score;
    console.log(endScore);

    let newTopScore = this.state.topScore;

    if (endScore >= newTopScore) {
      newTopScore = endScore;
    }

    this.setState({
      // friendsBaseState,
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
    // console.log(scoreValue);
    
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


  wrongGuess = () => {
    // supposed to have something saving a high score??*************************
    // let endScore = this.state.score;
    // console.log(endScore);

    // let newTopScore = this.state.topScore;

    // // if the endScore is greater than/equal to the current topScore...
    // if (endScore >= newTopScore) {
    //   // set the new topScore equal to endScore
    //   newTopScore = endScore;
    //   console.log(newTopScore);
    //   // this.resetGame();  //for now to test top score rendering
    // } else {
    //   console.log(newTopScore);
    //   this.resetGame();
    // }
    
    // THINK THIS NEEDS TO BE CALLED OUTSIDE THE IF STATEMENT, but see what happens first.....
    // set topScore then call resetGame
    // this.setState({topScore: newTopScore})
    // .then(setTimeout(() => {
    //   this.resetGame()
    // }, 2000));

    // "incorrect" message ~DONE (if not resetting the state with baseState....)

    // reset game
    // this.setState({
    //   // friends,  //resets squares to initial state?
    //   score: 0,
    //   message: "Sorry, you lose!"
    // })
    // .then(this.resetGame());

    this.resetGame();

    // maybe add toast or modal with loosing message if "this.baseState" works better to reset
  }


  

  // sortShuffle() {
  //   this.setState({
  //     sortingMethod: 'shuffle',
  //     articles: shuffle(this.state.articles)
  //   });
  // }


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
          // console.log(friend);
        } 
        // console.log(newFriendData);
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
            How good is your memory? Click each square ONCE!
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
