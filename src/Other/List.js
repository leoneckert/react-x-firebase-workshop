import React, { Component } from 'react';
import Explanation from './ExplanationBox'

class Input extends Component {
    constructor(props){
      super(props)
      this.state ={
      };
    };

    
    render() { 
        return (  
            <div className='section'>
              <div className='content'>



                <p>2. Retrieve new data.</p>
                <input type="text" onChange={this.setData}></input>





              </div>
              <Explanation t={e}/>
            </div>
        );
    }
}
 
export default Input;


// Note: I hide this eplanation text away, just so we can concentrate on what's important above
let e = [
  "Here we retrieve data from the database everytime a new data point is added using the",
  <code>.on('child_added', ...</code>,
  " method.",
  <a target='_blank' href='https://firebase.google.com/docs/database/web/lists-of-data?authuser=0'>Documentation</a>,
];
