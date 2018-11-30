import React, { Component } from 'react';
import './App.css';
import {LevelONE, LevelTWO} from './Levels'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Don't mind this :) just inserting the Level's title*/}{t()}


        <LevelONE />
        <LevelTWO locked/>
        <LevelTWO locked/>
        <LevelTWO locked/>
        <LevelTWO locked/>
        <LevelTWO locked/>



      </div>);
  }
}

export default App;




















// everything below here is irrelevant
//
// just some workshop housekeeping ;-)
//
const componentName = "<App.js/>"
function t(){
  return(<code className='componentName'>{componentName}</code>);
}
