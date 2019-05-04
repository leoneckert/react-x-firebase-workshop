import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>

      <div className="intro"><p>React x Firebase Workshop <a href="https://github.com/leoneckert/react-x-firebase-workshop" target="_blank">(it's here)</a></p></div>

      <Route exact path="/" component={()=>
            <div>

              <App />
        
              <div className="intro"><p>
                thanks for playing, Leon
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
