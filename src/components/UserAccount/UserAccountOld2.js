
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import FavBeer from '../FavBeer/FavBeer'

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



//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let favorites = null

    if (this.props.user) {
    // if (this.props.user.favorites) {

      favorites = this.props.user.favorites.map((favorite, indxFav) => {
        return (
          <div key={indxFav}>

            <FavBeer beerId={favorite.beerId} />

            {
              favorite.comments.map((comment, indxCmt) => {
                return (
                  <div key={indxCmt}>
                    <h6>{comment.title}</h6>
                    <p>{comment.body}</p>
                  </div>
                )
              })
            }

          </div>
        )
      })
    }





//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="UserAccountDiv">

      {favorites &&
        <div className="UserAccountSignedIn">
          <h2>USERNAME: &nbsp; {this.props.user.username}</h2>
          <img src={this.props.user.photo} alt={this.props.user.username} />
          {/* {favorites} */}

        </div>
      }

      {!favorites &&
        <div className="UserAccountSignedOut">
          <h2>SIGN IN TO SEE ACCOUNT INFO</h2>
        </div>
      }

    </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default UserAccount;



// END ///////////////////////////////////////////////////////////////////
