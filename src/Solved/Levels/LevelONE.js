import {Exp} from '../../Other';  
import React, { Component } from 'react';

{/*
  LEVEL 1
  INSTRUCTIONS

  below is a component for a text input box. 

  1) see if you can understand what it does right now. 
    -> when you type into the input box, 
    the component's own state.data string 
    gets updated via the onChange event 
    that calls the setData() function.
    -> the submit button does not currently do anything.
 
  2) complete these steps to master Level 1:
    2.1) connect this app to Firebase (in App.js)
    2.2) define a function in App.js that uses
         Firebase's push method to push data to the Database 
    2.3) pass this function as a prop to this component   
         and push the data inserted into the input field
         to Firebase.
    2.4) You unlocked Level 2! 
    





*/}


class LevelTWO extends Component {
    constructor(props){
      super(props)
      this.state ={
        data: '',
      };
    };

    setData = (event) => {
      this.setState({
        data: event.target.value
      })
    }
    submitData = () => {
      // here we need to use a function that is passed down
      // as a prop from App.js and then use it to push
      // the current state.data to the Database.
      this.props.pushToDB("data", {text: this.state.data});
    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content'>





                <input type="text" onChange={this.setData}></input>
                <button onClick={this.submitData}>Push to Database</button>





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
const componentName = "<LevelONE.js/>"
const levelIdx = 1;
const componentDescription = "Storing quantitative data"
let ex =  <span>Here we push data objects to our database using firebase's <code>.push()</code> method. It is a lot like pushing to an array. <a target='_blank' href='https://firebase.google.com/docs/database/web/lists-of-data'>Documentation</a></span>;
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}
