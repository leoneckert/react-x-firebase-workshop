import {Exp} from '../../Other';  
import React, { Component } from 'react';

{/*
  LEVEL 2
  INSTRUCTIONS

  below is a component to list an array dynamically. 

  1) see if you can understand what it does right now. 
    -> the <ul> element get's filled with <li> elements
    that are created using the .map method on an array of
    string (dummyData) in the renderList() function.

  2) complete these steps to master Level 2:
    2.1) in App.js, create a Listener that is triggered 
    whenever a new item is added (hint: child_added) to the Database (via Level 1's component).
    CAUTION: Create this Listener only once (hint: React Life Cycle Hook).
      -> relevant links:
      https://reactjs.org/docs/state-and-lifecycle.html
      https://firebase.google.com/docs/database/web/lists-of-data
    2.2) Keep the main state (in App.js) updated about new data.
    2.3) pass down that state as a prop to this Component and fill 
    in the list.
    2.4) Ask Leon for 'the cool bonus feature' (or scroll aaaall the 
    way to the bottom in this file)
    2.5) You unlocked Level 3! 
    


*/}


class LevelTWO extends Component {
    constructor(props){
      super(props)
      this.state ={};
    };

    // this function renders out list elements dynamically
    renderList = () => {
      // dummyData, we aim to replace this with data that is
      // passed down from App.js as a prop
      // let dummyData = ["dummy data item 1", "dummy data item 2", "dummy data item 3"];
      
      // here we use the .map() method to create list elements
      if(this.props.data != undefined){
        return this.props.data.map((dataItem, index) =>{
          return <li key={index}>{dataItem}</li>;
        });
      }
    }

    componentDidUpdate(){ 
      // componentDidUpdate() is a function react gives us. 
      // it is triggered every time the component was updated
      // that is usually the case when either this.state or this.props
      // changed. For that reason we SHOULD NOT ever this.setState inside 
      // componentDidUpdate(), otherwise we would be creating and infinite
      // loop.... you know what I mean?

      // we can give a "reference" to elements in order to 
      // select it more easily in our javaScript.
      // add "ref='list'" to the <ul> element above
      let listElement = this.refs.list;
      // here we 'grab' the element we want to scroll to
      // it's the list's 'last child'
      let listItem = listElement.lastChild;
      // this is just some javaScript tool
      // that allows us to define where an element should 
      // scroll to. as a destination we use the 
      // "offsettop" property that any html element has
      if(listItem!=null){
        listElement.scrollTo({
          top: listItem.offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      }

      // // hey leon, this is cool, but how do i know that javascript
      // // allows me to do these things so easily?
      
      //the only way to learn all this is learning what to google
      //i googled "react scroll to bottom" and found:
      //https://stackoverflow.com/a/41700815
      //i didn't like that this also scrolled the whole page
      //so i googled: "scrollintoview without scrolling page" and found
      //https://stackoverflow.com/a/11041376
      //i then still wanted it to scroll 'smoothly' so i googled "scrolltop behaviour"
      //and found
      //https://developer.mozilla.org/en-us/docs/web/api/window/scrollto
      //and then combined all i had learned from these searches :)
    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content levelTWO'>



                {/* 
                  we added the ref='list' to the <ul> below 
                  as part of the "BONUS feature" - the code that
                  is in the ComponentDidUpdate function uses this
                  ref ('reference')
                */}
                <ul ref='list'>
                  {this.renderList()}
                </ul>





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
let ex = <span>We add a Listener that listens for changes on the database using firebase's <code>.on('child_added')</code> method - very convenient for instant update of our front end. <a target='_blank' href='https://firebase.google.com/docs/database/web/lists-of-data'>Documentation</a></span>;
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}











// here is a bonus snippet :)
// the idea is that you take the whole thing and
// copy it into the component at the very of this Level
// it just adds a little something (scrolling to the bottom
// of the list automatically when a new element is added)

//componentDidUpdate(){ 
//  // componentDidUpdate() is a function react gives us. 
//  // it is triggered every time the component was updated
//  // that is usually the case when either this.state or this.props
//  // changed. For that reason we SHOULD NOT ever this.setState inside 
//  // componentDidUpdate(), otherwise we would be creating and infinite
//  // loop.... you know what I mean?
//
//  // we can give a "reference" to elements in order to 
//  // select it more easily in our javaScript.
//  // add "ref='list'" to the <ul> element above
//  let listElement = this.refs.list;
//  // here we 'grab' the element we want to scroll to
//  // it's the list's 'last child'
//  let listItem = listElement.lastChild;
//  // this is just some javaScript tool
//  // that allows us to define where an element should 
//  // scroll to. as a destination we use the 
//  // "offsetTop" property that any html element has
//  if(listItem!=null){
//    listElement.scrollTo({
//      top: listItem.offsetTop,
//      left: 0,
//      behavior: 'smooth'
//    });
//  }
//
//  // // Hey Leon, this is cool, but how do I know that JavaScript
//  // // allows me to do these things so easily?
//  
//  //the only way to learn all this is learning what to google
//  //I googled "react scroll to bottom" and found:
//  //https://stackoverflow.com/a/41700815
//  //I didn't like that this also scrolled the whole page
//  //so I googled: "scrollintoview without scrolling page" and found
//  //https://stackoverflow.com/a/11041376
//  //I then still wanted it to scroll 'smoothly' so I googled "scrolltop behaviour"
//  //and found
//  //https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
//  //and then combined all I had learned from these searches :)
//}
