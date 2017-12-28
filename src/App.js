import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
// import logo from './logo.svg';
import './styles/App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">

          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">ClickyTime</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Row>
            <Col s={12}>
              <Game />
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }
}

export default App;
