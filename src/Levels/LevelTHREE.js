import {Exp} from '../Other';  
import React, { Component } from 'react';

{/*
  LEVEL 3
  INSTRUCTIONS

  below is a component with two input fields, name and color.
  in this level we learn a different technique to the "push" from Level 1
  that let's us be more specific in where the data is stored and 
  how we retrieve it.

  1) see if you can understand what it does right now. 
    -> Two input are using the same setData function
    to update this component's local state as the inputs
    are changed. This is made possible by giving the inputs
    a name attribute. This name can be 'read' from the event variable
    and used as a key when setting the state. 
    -> isn't the html color picker pretty? :)

  2) complete these steps to master Level 3:
    2.1) in App.js, create a function that stores
    data at a dynamic path to the database. You should 
    use firebase's .set() method. Relevant info can be found here:
    https://firebase.google.com/docs/database/web/read-and-write
    The .set() method is different to push in that it does not 
    "push" data into a list on the database where it assigns each
    datapoint a randomly generated key (like in Level 1), 
    but instead let's us define precisely where and how the data should
    be stored. This is good, as you might imagine, for user data when
    you want to store a user's profile information in a speciic format
    and be able to retrieve it anytime using their name or id number.
    2.2) pass down the function as a prop to this very component
    and make sure name and color end up on the data base when
    hitting the submit button.
    2.3) That was fast, you unlocked Level 4! 

*/}


class LevelTHREE extends Component {
    constructor(props){
      super(props)
      this.state ={
        name: '',
        color: '#ffffff'
      };
    };
    setData = (event) => {
      // below we use a dynamic key
      // I JUST learnt this is even possible 
      // (it wasn't in older JavaScript)
      this.setState({
        [event.target.name]: event.target.value.toLowerCase()
      });
    }
    
    render() { 
        return (  
            <div className={this.props.locked?'section locked':'section'}>
              {/* Don't mind this :) just inserting the Level's title*/}{t()}


              {/* Level Content  - this is where we MASTER this Level!*/}
              <div className='content levelTHREE'>




                <label>Name </label>
                {/*giving the inpurt tags a name attribute let's use distinguish
                them in the setData function using the event variable*/}
                <input type="text" onChange={this.setData} name='name'></input>
                <br></br> {/*just a line break here */}
                <label>Favorite color </label>
                <input type="color" defaultValue="#ffffff" onChange={this.setData} name='color'></input>
                <br></br>
                <button>Set on Database</button>





              </div>



              {/* Don't mind this :) just inserting the Level's explanation*/}{e()}
            </div>
        );
    }
}
 
export default LevelTHREE;




























// everything below here is irrelevant
//
// just some workshop housekeeping ;-)
//
const componentName = "<LevelTHREE.js/>"
const levelIdx = 3;
const componentDescription = "Storing and updating indexed data"
let ex = <span>Insteading of "pushing" data we now <i>carefully</i> <code>.set()</code> it. This makes sense for data that we know we want to access regularly and specifically like a person's profile information. <a target='_blank' href='https://firebase.google.com/docs/database/web/read-and-write'>Documentation</a></span>;
function t(){
  return(<div><code className='componentName'>{componentName}</code><p className="title"><b>Level {levelIdx}</b> {componentDescription}</p></div>);
}
function e(){
  return(<Exp t={ex}/>);
}
