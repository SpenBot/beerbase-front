
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import TestCompBeers from './components/TestComps/TestCompBeers'
import TestCompUsers from './components/TestComps/TestCompUsers'
import TestForms from './components/TestComps/TestForms'

import './App.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class App extends Component {






//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="AppDiv">

        <header>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/beers">BEERS</Link>
            <Link to="/users">USERS</Link>
          </nav>
        </header>

        <main>
          <Switch>

            <Route
              exact path='/'
              render={() => (
                <h1>CRAFT BEERS HYPERCARD HOME</h1>
              )}
            />

            <Route
              path='/beers'
              render={() => (
                <div>
                  <TestCompBeers />
                  <TestForms />
                </div>
              )}
            />

            <Route
              path='/users'
              render={() => (
                <div>
                  <TestCompUsers
                  />

                </div>
              )}
            />

            <Route path="/*"
              render={() => <Redirect to="/" />}
            />

          </Switch>
        </main>



      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default App;



// END ///////////////////////////////////////////////////////////////////
