
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import FavBeer from '../FavBeer/FavBeer'

import './Favorites.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Favorites extends Component {




//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let favorites = null

    if (this.props.user) {
    // if (this.props.user.favorites) {

      favorites = this.props.user.favorites.map((favorite, indxFav) => {
        return (
          <div key={indxFav}>

            <FavBeer beerId={favorite.beerId} user={this.props.user}/>

            {/* {
              favorite.comments.map((comment, indxCmt) => {
                return (
                  <div key={indxCmt}>
                    <h6>{comment.title}</h6>
                    <p>{comment.body}</p>
                  </div>
                )
              })
            } */}

          </div>
        )
      })
    }



//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="FavoritesDiv">
        {favorites}
      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Favorites;



// END ///////////////////////////////////////////////////////////////////
