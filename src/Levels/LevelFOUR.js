import {Exp} from '../Other';  
import React, { Component } from 'react';

{/*
  below is a component with a search input. we want to make it 
  functional and add a display of search results.


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
    setData = (event) => {
      this.setState({
        data: event.target.value.toLowerCase(),
      })
    }
    submitData(){
      this.props.searchDB(this.state.data)
    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content'>





                <input type="text" onChange={this.setData}></input>
                <button onClick={this.submitData}>Search in Database</button>





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
let ex = <span>........................................................................ ....................................coming soon :)</span>;
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}
