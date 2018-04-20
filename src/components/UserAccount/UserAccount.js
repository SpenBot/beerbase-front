
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import EditForm from '../Forms/EditForm'

import './UserAccount.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class UserAccount extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      editView: false
    }
  }


//// TOGGLE EDIT VIEW /////////////////////////////////////////////////////
  toggleEditView = () => {
    this.setState(prevState => ({
      editView: !prevState.editView
    }))
  }



//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let userAccountPage = null

    if (this.props.user && !this.state.editView) {
        userAccountPage =
        <div className="UserAccountSignedIn">
          <h2>USERNAME: &nbsp; {this.props.user.username}</h2>
          <img src={this.props.user.photo} alt={this.props.user.username} />
          <p> Email : &nbsp; not set </p>
          <p> Account Type: &nbsp; not set </p>
          <p> User Rating: &nbsp; not set </p>
          <p> Favorites: &nbsp; {this.props.user.favorites.length} </p>
          <button onClick={this.toggleEditView}>EDIT ACCOUNT INFO</button>
        </div>
    }
    else if (this.props.user && this.state.editView) {
      userAccountPage =
      <div className="UserAccountEdit">
        <h2>EDIT ACCOUNT</h2>
        <EditForm
          editAccount={this.props.editAccount}
          toggleEditView={() => this.toggleEditView()}
          user={this.props.user} />
        <button onClick={this.toggleEditView}>BACK TO ACCOUNT</button>
      </div>
    }
    else if (!this.props.user) {
        userAccountPage =
        <div className="UserAccountSignedOut">
          <h2>SIGN IN TO SEE ACCOUNT INFO</h2>
        </div>
    }




//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="UserAccountDiv">
        {userAccountPage}
      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default UserAccount;



// END ///////////////////////////////////////////////////////////////////
