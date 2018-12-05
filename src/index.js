import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SolvedApp from './Solved/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <div className="intro"><p>React x Firebase Workshop</p></div>
      <Route exact path="/" component={()=>
            <div>

              <App />
        
              <div className="intro"><p>
                thanks for playing, Leon
                <Link className="linkToSolved" to="/solved">
                  <p >(click here to see finished Levels)</p>
                </Link>
              </p></div>

            </div>
        } />
      <Route exact path="/solved" component={()=>
            <div>

              <SolvedApp/>

              <div className="intro"><p>
                thanks for playing, Leon
                <Link className="linkToSolved" to="/">
                  <p >(click here to get back to the unfinished version)</p>
                </Link>
              </p></div>

            </div>
        } />



    </div>
  </Router>
  
  , 
  
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
