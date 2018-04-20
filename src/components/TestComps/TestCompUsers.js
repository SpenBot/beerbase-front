
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import axios from 'axios'

import { API_URL } from '../../urls'

import './TestComps.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class TestCompUsers extends Component {


constructor(props) {
  super(props)
  this.state = {
    users: [],
    beerId: this.props.beerId,
    // beerId: "5ad7abf410d27f7914fe29e1",
    beer: {}
  }
}

componentDidMount() {

  axios.get(`${API_URL}/api/users`)
  .catch(err => console.log(err))
  .then((res) => {
    this.setState({
      users: res.data
    })
  })

  axios.get(`${API_URL}/api/beers/${this.state.beerId}`)
  .catch(err => console.log(err))
  .then((res) => {
    this.setState({
      beer: res.data
    })
  })

}











// componentDidUpdate() {
//
//   let userFavsCopy = this.state.userFavs
//
//   if (this.props.users) {
//
//     this.props.users.map(user => {
//       user.favorites.map(favorite => {
//         userFavsCopy.push(favorite.beerId)
//       })
//     })
//
//   }

  // if (this.props.users[0]) {
  //   axios.get(`${API_URL}/api/beers/${this.props.users[0]}`)
  //   .catch(err => console.log(err))
  //   .then((res) => {
  //     this.setState({
  //       beers: res.data
  //     })
  //   })
  // }

// }


//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let users = this.state.users
      ? this.state.users.map((user, indxUsr) => {

          return (

            <div className="UserCardDiv" key={indxUsr}>

              <h4>{user.username}</h4>
              <img src={user.photo} height="150px" width="150px" alt={user.username}/>

              <h5>Favorite Beers</h5>
              <ul>
                {
                  user.favorites.map((favorite, indxFav) => {
                      return (
                        <li key={indxFav}>
                          {/* <h5>{favorite.beerId}</h5> */}
                          {/* <h5>{this.getBeerFavs(favorite.beerId)}</h5> */}
                          <h5>{this.state.beer.name}</h5>

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

                        </li>
                      )
                  })
                }
              </ul>

            </div>
          )
        })

      : null

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="TestCompUsersDiv">
        {users}
      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default TestCompUsers;



// END ///////////////////////////////////////////////////////////////////
