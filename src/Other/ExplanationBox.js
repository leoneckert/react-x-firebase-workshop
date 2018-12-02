import React, { Component } from 'react';

class ExplanationBox extends Component {
  render() { 
      return <div className="explanation"><p>{this.props.t}</p></div>
    ;
  }
}
 
export default ExplanationBox;
