import React from 'react';
import { Col } from 'react-materialize';


// Need onClick listener
// Need to DEFINE the onClick too************

// Template for each repeating square
const Squares = props => {
// class Squares extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { 
  //   //   friends,
  //   //   click: false,
  //   //   color: "testing this connects" 
  //   // };
  //   // this.handleClick = this.handleClick.bind(this);
  //   console.log(this.props);
  // }

  // renders with image, alt, and ids; data-click and onClick registers, just cannot target which image is clicked yet..........
  // render() {
  return (
    <Col l={3} m={4} s={6}>
      <img src={ props.image } 
      alt={ props.alt } 
      key={ props.id }
      id={ props.id } 
      data-click={ props.click } 
      // onClick={ props.onClick } 
      // onClick={ this.props.onClick }  //error
      onClick={ props.onClick.bind(props.id) } 
      className="z-depth-4"
      />
    </Col>
  )
// }
};

export default Squares;

// onClick={ props.onClick }
// onClick={ () => props.onClick(props.id) }