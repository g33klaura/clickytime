import React, { Component } from 'react';
import { Row, Col, Container } from 'react-materialize';
import './styles/App.css';
import Game from './components/Game';
import Navbar from './components/Navbar';


class App extends Component {

  // Working out state for navbar...
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      message: "Good luck!"
    };
    console.log(this.props);
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
            How good is your memory? Click on each square only once!
          </p>
          <Row className="Game">
            <Col s={12} className={"center-align"}>
            
              {/* Game component renders here within overall centered materialize div */}
              <Game />

            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
