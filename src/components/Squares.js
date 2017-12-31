import React from 'react';
import { Col } from 'react-materialize';

// Need onClick listener
// Need to DEFINE the onClick too???************

// Template for each repeating square
const Squares = props => (

    // Will render in row div in Game Component?  ~YES
    <Col l={3} m={4} s={6}>
      <img src={ props.image } alt={ props.name } key={ props.id } className="z-depth-4" />
    </Col>

);

export default Squares;