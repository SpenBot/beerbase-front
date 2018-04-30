
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import axios from 'axios'
import { API_URL } from './urls'

import Home from './components/Home/Home'
import SideBar from './components/SideBar/SideBar'
import AllBeers from './components/AllBeers/AllBeers'
import UserAccount from './components/UserAccount/UserAccount'
import Favorites from './components/Favorites/Favorites'
import ServerAwakeStatus from './components/ServerAwakeStatus/ServerAwakeStatus'

import './App.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class App extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      user: null,
      serverAwake: false
    }
  }



//// COMPONENT DID MOUNT /////////////////////////////////////////////////

  componentDidMount() {

    let serversAwake = 0

    axios.get(`${API_URL}/api/beers/`)
    .catch(err => console.log(err))
    .then((res)=> {
      console.log("server awake: beers")
      console.log(res.data)
      serversAwake += 1

      if (serversAwake >= 2) {
        this.setState ({
          serverAwake: true
        })
      }

    })

    axios.get(`${API_URL}/api/users/`)
    .catch(err => console.log(err))
    .then((res)=> {
      console.log("server awake: users")
      console.log(res.data)
      serversAwake += 1

      if (serversAwake >= 2) {
        this.setState ({
          serverAwake: true
        })
      }

    })
  }









//// CHECK USER //////////////////////////////////////////////////////////
  checkUser(usernameInput) {

    axios.get(`${API_URL}/api/users/`)
    .catch(err => console.log(err))

    .then((res) => {

      let foundUser = null

      foundUser = res.data.find((user) => user.username.includes(usernameInput))

      if(!foundUser) {
        alert("Username not found. Usernames are case sensitive.")
      }
      else if (foundUser) {
        // console.log(foundUser._id)
        this.signInUser(foundUser._id)
      }

    })
  }

//// SIGN IN USER //////////////////////////////////////////////////////////
  signInUser(userId) {

  axios.get(`${API_URL}/api/users/${userId}`)
  .catch(err => console.log(err))
  .then((res) => {
    this.setState({
      user: res.data
    })
  })

  }

//// CHECK NEW USER //////////////////////////////////////////////////////////
  checkNewUser(usernameInput) {

    axios.get(`${API_URL}/api/users/`)
    .catch(err => console.log(err))

    .then((res) => {

      let foundUser = null

      foundUser = res.data.find((user) => user.username.includes(usernameInput))

      if(foundUser) {
        alert("Username arleady exists!")
      }
      else if (!foundUser) {
        this.makeNewUser(usernameInput)
      }

    })
  }

//// MAKE NEW USER //////////////////////////////////////////////////////////
  makeNewUser(usernameInput) {

    let newUser = {
      username: usernameInput,
      favorites: [],
      photo: 'https://image.flaticon.com/icons/svg/17/17004.svg'
    }

  axios.post(`${API_URL}/api/users`, newUser)
  .catch(err => console.log(err))
  .then((res) => {
    this.setState({
      user: res.data
    })
  })

  }



//// SIGN OUT //////////////////////////////////////////////////////////
  signOut() {
    this.setState({
      user: null
    })
  }



//// EDIT ACCOUNT ///////////////////////////////////////////////////////
  editAccount(userObj) {

    let updatedUser = this.state.user

    updatedUser.username = userObj.username
    updatedUser.photo = userObj.photo

    this.setState({
      user: updatedUser
    }, this.uploadUpdatedUser(this.state.user))

  }


//// UPLOAD UPDATED USER //////////////////////////////////////////////////
  uploadUpdatedUser(userState) {
    axios.put(`${API_URL}/api/users/${userState._id}`, userState)
    .catch(err => console.log(err))
    .then((res) => {
      this.setState({
        user: res.data
      })
    })
  }


//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="AppDiv">

        <header>
          <h1>BEER BASE</h1>
          <h3>catalog, review, and share your favorite beers</h3>
        </header>

        <nav>
          <Link to="/beerbase">HOME</Link>
          <Link to="/beerbase/beers">BEER LIBRARY</Link>
          {this.state.user && <Link to="/beerbase/favorites">FAVORITES</Link>}
          <Link to="/beerbase/user">ACCOUNT</Link>

        </nav>

        <main>

          <Switch>

            <Route
              exact path='/beerbase'
              render={() => (
                this.state.serverAwake ? <Home /> : <ServerAwakeStatus/>
              )}
            />

            <Route
              path='/beerbase/beers'
              render={() => (
                <AllBeers user={this.state.user}/>
              )}
            />

            <Route
              path='/beerbase/user'
              render={() => (
                <UserAccount
                  user={this.state.user}
                  editAccount={(userObj) => this.editAccount(userObj)}
                 />
              )}
            />

            <Route
              path='/beerbase/favorites'
              render={() => (
                <Favorites
                  user={this.state.user}
                 />
              )}
            />

            <Route path="/*"
              render={() => <Redirect to="/beerbase" />}
            />

          </Switch>

          <div className="sideCol">
            <SideBar
              user={this.state.user}
              signOut={()=> this.signOut()}
              checkUser={(usernameInput)=> this.checkUser(usernameInput)}
              checkNewUser={(usernameInput)=> this.checkNewUser(usernameInput)}
            />
            <img id="sideColImg" src="https://craftbeerclub.com/media/gm/user/gmwc/club/club_banner_beer.gif" alt="side beer"/>
          </div>

        </main>



      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default App;



// END ///////////////////////////////////////////////////////////////////
