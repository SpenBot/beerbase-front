
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
// import axios from 'axios'
//
// import { API_URL } from '../../urls'

import './UserAccount.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class UserAccount extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      user: null
      // favoriteBeers: []
    }
  }


//// DID MOUNT //////////////////////////////////////////////////////////
  componentDidMount() {

    console.log("componentDidMount")

    this.setState({
      user: this.props.user
    }, ()=> console.log(this.state.user.username))



    // console.log(this.state.user.username)

    // if (this.props.user.favorites) {
    //   axios.get(`${API_URL}/api/users/${this.props.user.favorites[0].beerId}`)
    //   .catch(err => console.log(err))
    //   .then((res) => {
    //     this.setState({
    //       favoriteBeers: res.data
    //     }, ()=> console.log(this.state.favoriteBeers))
    //   })
    // }


  }





//// RENDER //////////////////////////////////////////////////////////////
  render() {

    console.log("render")
    console.log(this.state.user)

    // if(this.state.user.username) {
    //   console.log(this.state.user.username)
    // }

    let favorites = null

    // if (this.props.user.favorites && this.state.favoriteBeers.length > 0) {
    //   favorites = this.props.user.favorites.map((favorite, indxFav) => {
    //     return (
    //       <div key={indxFav}>
    //         <h3>{favorite.beerId}</h3>
    //
    //         {
    //           favorite.comments.map((comment, indxCmt) => {
    //             return (
    //               <div key={indxCmt}>
    //                 <h6>{comment.title}</h6>
    //                 <p>{comment.body}</p>
    //               </div>
    //             )
    //           })
    //         }
    //
    //
    //       </div>
    //     )
    //   })
    // }





//// RETURN //////////////////////////////////////////////////////////////
    return (
      // <div className="UserAccountDiv">
      //   {this.state.user.username}
      //   <img src={this.state.user.photo} alt={this.state.user.username} />
      //   {favorites}
      // </div>
      <div>poo</div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default UserAccount;



// END ///////////////////////////////////////////////////////////////////
