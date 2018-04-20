
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './SideBar.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class SideBar extends Component {

//// CONSTRUCTOR ////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      inputSignIn: '',
      inputSignUp: ''
    }
  }





//// INPUT CHANGE /////////////////////////////////////////////////////////
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

//// SIGN IN //////////////////////////////////////////////////////////////
  handleSignIn(e) {
    e.preventDefault()
    this.props.checkUser(this.state.inputSignIn)
  }

//// SIGN Up //////////////////////////////////////////////////////////////
  handleSignUp(e) {
    e.preventDefault()
    this.props.checkNewUser(this.state.inputSignUp)
  }








//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let sideBarDisplay = null

    if (!this.props.user) {
      return (
        sideBarDisplay =
        <div className="SideBarDiv">
          <h3>SIGN IN</h3>

          <form onSubmit={(e) => this.handleSignIn(e)}>
            <h5> UserName </h5>

            <input name="inputSignIn"
              type="text"
              placeholder="enter username"
              autoComplete="off"
              onChange={(e) => this.handleChange(e)}
              />
          </form>

            <h5> Password </h5>
            <input type="password" value="poopoo" className="sideReadOnly" readOnly/>

            <p>BeerBase is not accepting passwords at this time</p>



          <hr/>



          <h3>SIGN UP</h3>

          <h5> UserName </h5>

          <form onSubmit={(e) => this.handleSignUp(e)}>
            <input name="inputSignUp" type="text"
              autoComplete="off"
              placeholder="enter username"
              onChange={(e) => this.handleChange(e)}
            />
          </form>

            <h5> Password </h5>
            <input type="password" value="poopoo" className="sideReadOnly"  readOnly/>
            <p>BeerBase is not accepting passwords at this time</p>


        </div>
      )
    }

    else if (this.props.user) {
      return (
        sideBarDisplay =
        <div className="SideBarDiv">
          <h3>ACCOUNT OVERVIEW</h3>
          <img src={this.props.user.photo} alt={this.props.user.username} />
          <h4>USER: &nbsp; {this.props.user.username}</h4>
          <h4>FAVORITES: &nbsp; {this.props.user.favorites.length}</h4>
          <button id="signOutButton" onClick={this.props.signOut}>sign out</button>
        </div>
      )
    }





//// RETURN //////////////////////////////////////////////////////////////
    return (
        {sideBarDisplay}
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default SideBar;



// END ///////////////////////////////////////////////////////////////////
