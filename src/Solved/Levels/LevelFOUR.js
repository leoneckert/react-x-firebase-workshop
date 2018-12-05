import {Exp} from '../../Other';  
import React, { Component } from 'react';

{/*
  LEVEL 4
  INSTRUCTIONS

  below is a component with a search input. we want to make it 
  functional and add a display of search results.

  1) see if you can understand what it does right now. 
    -> the search input and button work exactly like the inputs
    in previous levels - as the input is modified the component's
    state gets updated via the setData() function.
    -> additionally we render the result using 
    the showResult() function - take a look, for now it uses
    two dummy data variables for name and color. It creates a 
    div element and sets it's background color to whatever the value
    of the color varibale is. Inside this div a p tag is created 
    displaying both the name as well as the color (the hex string).

  2) complete these steps to master Level 4:
    2.1) In App.js create a function that retrieved information 
    from the database using firebase's .once('value', ...) method.
    The function sould take in a path/name/search query that points to 
    the data we stored in Level 3.
    relevant information can be found at
    https://firebase.google.com/docs/database/web/read-and-write
    2.2) keep the main state (in App.js) updated about the results 
    of the data retrieval. E.g. add color = '' and name = '' to the main state
    and fill them with search results (or set them to empty string if there is 
    no result).
    2.3) pass down all three, the search function, the name and the color state variables
    to this components as props and use them in the corresponding places
    to make the input box and button functional as well as the 
    result display show actual results. 
    2.4) This was a tough one, congratulations - You have mastered all Levels! So fun, no?



*/}


class LevelFOUR extends Component {
    constructor(props){
      super(props)
      this.state ={
        data: '',
      };
      this.setData = this.setData.bind(this);
      this.submitData = this.submitData.bind(this);
    };
    setData(event){
      this.setState({
        data: event.target.value.toLowerCase(),
      })
    }
    submitData(){
      this.props.searchDB(this.state.data)
    }
    showResult(){
      //let dummyName = "gustav";
      //let dummyColor = "blue";
      
        //all we had to do here was relace the dummy data with the information
        //that gets passed down as props to this component
        return(
          <div className="colorDisplay" style={{backgroundColor: this.props.color}}>
            <p className="nameDisplay">
              {this.props.name}<br></br>
              {this.props.color}
            </p>
          </div>
        )

    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content'>





                <input type="text" onChange={this.setData}></input>
                <button onClick={this.submitData}>Search in Database</button>
                {this.showResult()}





              </div>



              {/* Don't mind this :) just inserting the Level's explanation*/}{e()}
            </div>
        );
    }
}
 
export default LevelFOUR;




























// everything below here is irrelevant
//
// just some workshop housekeeping ;-)
//
const componentName = "<LevelFOUR.js/>"
const levelIdx = 4;
const componentDescription = "Requesting specific data points"
let ex = <span>Here we are searching the database for a keyword/name and retrieve the associated data. We are using firebase's <code>.once('value', ... )</code> method. <a target='_blank' href='https://firebase.google.com/docs/database/web/read-and-write'>Documentation</a></span>;
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}
