import React from 'react';
import { Col } from 'react-materialize';


// Need onClick listener
// Need to DEFINE the onClick too************

// Template for each repeating square
const Squares = props => {

  // Will render in row div in Game Component?  ~YES
  // alt text & id still undefined.......
  // yet ARE defined in Game.js in <Squares ... />
  return (
    <Col l={3} m={4} s={6}>
      <img src={ props.image } 
      alt={ props.alt } 
      key={ props.id }
      id={ props.id } 
      data-click={ props.click } 
      onClick={ props.onClick } 
      className="z-depth-4"
      />
    </Col>
  )

};

export default Squares;

// onClick={ props.onClick }
// onClick={ () => props.onClick(props.id) }