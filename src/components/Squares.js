import React from 'react';
import { Col } from 'react-materialize';
// import friends from "../friends.json";


// Need onClick listener
// Need to DEFINE the onClick too???************

// Template for each repeating square
const Squares = props => {

    // Will render in row div in Game Component?  ~YES

    
  return (
  //   <Col l={3} m={4} s={6}>
  //     {props.friends.map(friendImg => (
  //       <img src={ friendImg.image } 
  //       alt={ friendImg.name } 
  //       key={ friendImg.id } 
  //       className="z-depth-4" 
  //       />
  //     ))}
  //   </Col>
    <Col l={3} m={4} s={6}>
      <img src={ props.image } alt={ props.name } key={ props.id } className="z-depth-4" />
    </Col>

  )

};

export default Squares;
