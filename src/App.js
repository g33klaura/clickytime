import React, { Component } from 'react';
import { Button, Card, Row, Col, Container } from 'react-materialize';
// import logo from './logo.svg';
import './styles/App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="Container">*/}
        <Container>

          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">ClickyTime</h1>
          </header>
          <p className="App-intro">
            How good is your memory? Click on each square only once!
          </p>
          <Row>
            <Col s={12} className={"center-align"}>
              <Game />
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
