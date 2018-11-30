import {Exp} from '../Other';  
import React, { Component } from 'react';

{/*
  below is a component for a text input box. 


*/}


class LevelTWO extends Component {
    constructor(props){
      super(props)
      this.state ={
        data: '',
      };
      this.setData = this.setData.bind(this);
    };
    setData = (event) => {
      this.setState({
        data: event.target.value
      })
    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content'>





                <input type="text" onChange={this.setData}></input>
                <button>Push to Database</button>





              </div>



              {/* Don't mind this :) just inserting the Level's explanation*/}{e()}
            </div>
        );
    }
}
 
export default LevelTWO;




























// everything below here is irrelevant
//
// just some workshop housekeeping ;-)
//
const componentName = "<LevelTWO.js/>"
const levelIdx = 2;
const componentDescription = "Retrieving list data in real time"
let ex = [
  "Here we push data objects to our database using firebase's ",
  <code>.push()</code>,
  " function. It is a lot like pushing to an array. ",
  <a target='_blank' href='https://firebase.google.com/docs/database/web/lists-of-data'>Documentation</a>,
];
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}
