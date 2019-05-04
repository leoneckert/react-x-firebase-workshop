import React, { Component } from 'react';
import '../App.css';
import {LevelONE, LevelTWO, LevelTHREE, LevelFOUR} from './Levels'

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
// in this very folder for you. Rename the 
// firebase_config-DONT_IGNORE.js file to firebase_config.js, then
// fill in the "..." gaps and save it.
// 
// ... done? Let's now add this file to the .gitignore file
// to make sure we won't ever accidentally put it on our public 
// Github account. A .gitignore file already exists in this folder
// you will not see it in your Finder (because the filename starts 
// with a dot) but should be able to find it in your atom editor 
// sidebar....(or any other editor you might use).
// on the first line type "firebase_config.js"
//
// ... oops i already did this for you, but thought it would be
// a good idea for you to see and learn about .gitignore files :)
// great, now we can uncomment the next line to import the keys 
// (during runtime) into this script:

import {firebase_config} from '../firebase_config.js' //add this to .gitignore!

// finally, we do like we are told in the firebase docs
// and initialize the connection to the firebase project we created
// by passing the keys into the following function and then access the 
// database functionality:

firebase.initializeApp(firebase_config);
const database = firebase.database();

//fyi, firebase's documentation for this step can be found here: https://firebase.google.com/docs/web/setup


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      submitMessage: '',
      name: '',
      color: '',
    };
  }
  
  // LEVEL 1
  //
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



  // LEVEL 2
  //
  componentDidMount(){
    // anything inside this function (componentDidMount) will be executed
    // once everytime the component gets 'build'
    // in the case of this Main App.js component that means 
    // it is executed once at the very beginning when this page is visited
    let reference = database.ref("data");
    reference.on('child_added', data => {
      // the .on(... creates a Listener and let's us define code 
      // that exectutes everytime a new data point is added to the
      // location/reference on our database.
      // that code lives inside here (the callback function)
      // in our case we want that new data point to be added to the dataArray
      // in ourstate. 
      // this happens for every new item added on the db, but also
      // once for every item that exists there already when
      // this site is first visited/the listener is created
      this.setState({
        dataArray: this.state.dataArray.concat(data.val().text)
      })
    });
  }
  


  // LEVEL 3
  //
  setColorByName = (name, color) => {
    // we only accept favorite colors
    // of people with a name
    // if no name is supplied we return a grumpy 
    // message :) and return (that means the rest if this
    // function will not be executed)
    if(name.length < 1){
      this.setState({submitMessage: "You didn't type any name!" });
      return 
    }
    // if a name is supplied all of the rest runs 
    
    // we form a path ro store the data at (nested at friends->[name]
    let path = 'friends/' + name
    
    // this creates a timestamp which
    // we store along with the data to
    // kee track of when whose favorite color
    // was updated
    let timestamp = Date.now();

    // finally we point at the location on the database 
    // where we want to save/set out data at:
    let reference = database.ref(path);
    reference.set({
      name: name,
      color: color,
      last_updated: timestamp,
    }, error => {
      if (error) {
        // Data could not be saved, let's inform 
        // whoever is using our site:
        this.setState({submitMessage: "Couldn't save to DB!" });
      } else {
        // Data saved successfully!
        this.setState({submitMessage: "Saved!" });
      }
    });
  }

  clearSubmitMessage = () => {
    // this is a simple function to clear the message in Level 3
    // we pass it to Level 3's component as a prop
    this.setState({submitMessage: "" });
  }


  // LEVEL 4
  //
  searchDB = (name) => {
    // we only search the DB
    // if an actual string was entered,
    // if the string has less than 1 characters (aka no length)
    // we set name and color to en empty string and return/stop
    // this function
    if(name.length < 1){
      this.setState({
        name: '',
        color: ''
      });
      return
    }
    
    // location on db where we are looking for data:
    let path = 'friends/' + name;
    let reference = database.ref(path);

    // the .once(... method is used to retrieve up
    // data once....
    reference.once('value').then( snapshot => {
      // we get back the data we looked for in form of 
      // the variable "snapshot", the actual data value it contains
      // can be accessed by via snapshot.val()
      if(snapshot.val() != null){
        // if the search was successfull/ there was a result
        // we update the main state with name and color
        this.setState({
          name: snapshot.val().name,
          color: snapshot.val().color
        });
      }else{
        this.setState({
          name: '',
          color: ''
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* Don't mind this :) just inserting the Level's title*/}{t()}

        
        {/*
          PROPS
          in each level we pass down various props
          to the correspondent components
        */}

        <LevelONE pushToDB={this.pushToDB} />
        {/*<button onClick={this.pushToDB}>DUMMY</button>*/}
        <LevelTWO data={this.state.dataArray} />
        <LevelTHREE 
              setOnDB={this.setColorByName} 
              submitMessage={this.state.submitMessage} 
              clearMessage={this.clearSubmitMessage}
        />
        <LevelFOUR 
              searchDB={this.searchDB} 
              name={this.state.name}
              color={this.state.color}
        />



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
