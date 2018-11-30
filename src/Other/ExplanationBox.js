import React, { Component } from 'react';

class ExplanationBox extends Component {
  render() { 
    console.log("ex this", this);
    return (  
      <div className="explanation"><p>{this.props.t}</p></div>
    );
  }
}
 
export default ExplanationBox;
