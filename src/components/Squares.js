import React from 'react';
import { Col } from 'react-materialize';
// import FlipMove from 'react-flip-move';


// Template for each repeating image square
const Squares = props => (
  // <FlipMove duration={750} easing="ease-out">
    <Col l={3} m={4} s={6}>
      <img src={ props.image } 
      alt={ props.alt } 
      key={ props.id }
      id={ props.id } 
      // click={ props.click.toString() }
      // Adding "() =>" tells the onClick to wait until clicked to fire the handleClick function 
      onClick={ () => props.handleClick(props.id) }
      // onClick={ props.handleClick }
      className="z-depth-4"
      />
    </Col>
    // </FlipMove>
  );

export default Squares;
