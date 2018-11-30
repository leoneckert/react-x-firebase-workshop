import React, { Component } from 'react';
import './App.css';
import {LevelONE, LevelTWO} from './Levels'

// Starter 
// 
// Before anything, hello, we are learning Firebase Database today
// Firebase's Database stores data in JSON format, which makes it 
// extremely intuitive for us Javascript Developers, but can also cause headaches
// once dealing with a lot of data. 
// here is useful information about best ways to structure yout data
// https://firebase.google.com/docs/database/web/structure-data
//
// For now, we don't worry about that and get hands on instead. 
// Start at Levels/LevelONE if you have not already been there. 





// Level 1 - read this if you are coming here from Levels/LevelONE.js
// 
// before we import the code/package to connect to firebase
// we need to download it from the npm package manager
// on your command line type: npm install firebase --save
// then uncomment the next line:

import firebase from 'firebase';

// in order to push data to a database (in the 'cloud') 
// we need to make sure such place exists and 
// we know its location. 
// create a new account/project on https://firebase.google.com/
// add a Realtime Database to your project (in Google's interface)
// and find your access keys (I believe they can be found when 
// clicking on Project Overview and then on the little web symbol
// ...
// got them? Now we are doing things right and put our credentials in
// a seperate file called firebase_config.js which I prepared
// in this very folder for you.
// ... done? Let's now add this file to a .gitignore 
// to make sure we won't ever accidentally put it on our public 
// Github account.
// Great, now we can uncomment the next line to import the keys 
// (during runtime) into this script:

import {firebase_config} from './firebase_config.js' //add this to .gitignore!

// finally, we do like we are told in the firebase docs
// and initialize the connection to the firebase project we created
// by passing the keys into the following function and then access the 
// database functionality:

firebase.initializeApp(firebase_config);
const database = firebase.database();

//FYI, firebase's documentation for this step can be found here: https://firebase.google.com/docs/web/setup


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pushToDB(path, data){
    // Level 1 - read this if you are coming here from Levels/LevelONE.js
    // 
    // this is where want to create a simple function to push data to
    // our Firebase project. To test the function, we use a dummy 
    // button in this very component (prepared below)

    // alert("Dummy button works!");

    // we can learn how to push to the database from here:
    // https://firebase.google.com/docs/database/web/lists-of-data
    let reference = database.ref(path).push(data);

  }
  render() {
    return (
      <div className="App">
        {/* Don't mind this :) just inserting the Level's title*/}{t()}


        <LevelONE pushToDB={this.pushToDB} />
        {/*<button onClick={() => this.pushToDB('leon', 9)}>DUMMY</button>*/}
        <LevelTWO />
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
