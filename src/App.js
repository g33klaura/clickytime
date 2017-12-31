import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
import Game from './components/Game';
// import Squares from "./components/Squares";
// import friends from "./friends.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Container>*/}

          {/*Switch to navbar?*/}
          <header className="App-header">
            <h1 className="App-title">ClickyTime</h1>
            <p className="score">Score goes here!</p>
          </header>

        <Container>
          <p className="App-intro">
            How good is your memory? Click on each square only once!
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>
              
              <Game />

              {/*<main className="game-squares">
    <Row>*/}
                  {/* Each of 12 squares rendered within this row div */}
                  {/*<Squares 
                    image={ friends[0].image }
                    alt={ friends[0].name }
                    key={ friends[0].id }
                  />
                </Row>
                  </main>*/}

            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
