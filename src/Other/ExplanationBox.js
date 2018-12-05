import React, { Component } from 'react';

class ExplanationBox extends Component {
  render() { 
      return(
        <div className="explanationWrapper">
        <div className="explanation"><p>{this.props.t}</p></div>
        </div>
      )
    ;
  }
}
 
export default ExplanationBox;
