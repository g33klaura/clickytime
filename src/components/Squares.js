import React from 'react';
import { Col } from 'react-materialize';


// Need onClick listener
// Need to DEFINE the onClick too************

// Template for each repeating square
const Squares = props => (
    <Col l={3} m={4} s={6}>
      <img src={ props.image } 
      alt={ props.alt } 
      key={ props.id }
      id={ props.id } 
      // Adding "() =>" tells the onClick to wait until clicked to fire the handleClick function 
      onClick={ () => props.handleClick(props.id) } 
      className="z-depth-4"
      />
    </Col>
  );

export default Squares;

// onClick={ props.onClick }
// onClick={ () => props.onClick(props.id) }
      // onClick={ props.onClick } 
      // onClick={ this.props.onClick }  //error
      // onClick={ props.onClick.bind(props.id) }