
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.css';




//// DOM RENDER ROOT /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
