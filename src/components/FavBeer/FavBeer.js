
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import axios from 'axios'

import { API_URL } from '../../urls'

import './FavBeer.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class FavBeer extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      beer: {},
      editView: false,
      myRating: null,
      myReview: null
    }
  }


//// DID MOUNT //////////////////////////////////////////////////////////
  componentDidMount() {

    axios.get(`${API_URL}/api/beers/${this.props.beerId}`)
    .catch(err => console.log(err))
    .then((res) => {
      this.setState({
        beer: res.data
      }, ()=> this.findUserInfo())
    })

  }


//// FIND USER INFO //////////////////////////////////////////////////////
  findUserInfo () {
    this.findRating()
    this.findReview()
  }



//// FIND RATING //////////////////////////////////////////////////////////
  findRating() {

    let foundRating = null

    this.state.beer.ratings.forEach(rating => {
      if (rating.userName === this.props.user.username) {
        foundRating = rating.score
      }
    })

    this.setState({
      myRating: foundRating
    })

  }

//// FIND REVIEw //////////////////////////////////////////////////////////
  findReview = ()=> {

    let foundReview = null

    this.state.beer.reviews.forEach(review => {
      if (review.userName === this.props.user.username) {
        foundReview = review.body
      }
    })

    this.setState({
      myReview: foundReview
    })

  }




//// TOGGLE EDIT VIEW /////////////////////////////////////////////////////
  toggleEditView = () => {
    this.setState(prevState => ({
      editView: !prevState.editView
    }))
  }

//// HANDLE SUBMIT ////////////////////////////////////////////////////////
  handleSubmit() {

    let beerCopy = this.state.beer

    let ratingIdx = null

    ratingIdx = beerCopy.ratings.findIndex((rating) => rating.userName === this.props.user.username)


    if (ratingIdx !== -1) {
      beerCopy.ratings[ratingIdx].score = this.state.myRating
    }
    else if (ratingIdx === -1) {
      beerCopy.ratings.push({userName: this.props.user.username, score: this.state.myRating})
    }



    let reviewIdx = null

    reviewIdx = beerCopy.reviews.findIndex((review) => review.userName === this.props.user.username)

    if (reviewIdx !== -1) {
      beerCopy.reviews[reviewIdx].body = this.state.myReview
    }
    else if (reviewIdx === -1) {
      beerCopy.reviews.push({userName: this.props.user.username, body: this.state.myReview})
    }




    this.setState({
      beer: beerCopy
    }, () => this.uploadNewUserStats() )

    this.toggleEditView()
  }

//// UPLOAD NEW USER STATS ////////////////////////////////////////////////
  uploadNewUserStats() {
    axios.put(`${API_URL}/api/beers/${this.state.beer._id}`, this.state.beer)
    .catch(err => console.log(err))
    .then(res => {
      this.setState({
        beer: res.data
      })
    })
  }



//// HANDLE CHANGE ///////////////////////////////////////////////////////
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }








//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let showEditRating = null
    let showEditReview = null

    if (!this.state.editView) {
      showEditRating = <h5>{this.state.myRating}/10</h5>
      showEditReview = <p>{this.state.myReview}</p>
    }
    else if (this.state.editView) {
      showEditRating = <input name="myRating" type="number"
        value={this.state.myRating ? this.state.myRating : ""} onChange={(e) => this.handleChange(e)}/>

      showEditReview = <textarea name="myReview" value={this.state.myReview ? this.state.myReview : ""}
        onChange={(e) => this.handleChange(e)}/>
    }



    let beerInfo = this.state.beer.name ?
      <div className="FavBeerDiv">


        <div className="FavBeerLeft">
          <h3>{this.state.beer.name}</h3>
          <div className="FavBeerLeftCont">
            <img src={this.state.beer.photo} height="90px" width="90px" alt={this.state.beer.name}/>
            <div>
              <p>TYPE: {this.state.beer.type}</p>
              <p>PRICE: {this.state.beer.price}</p>
            </div>
          </div>

        </div>


        <div className="FavBeerRight">
          <h4>MY RATING</h4>
          {showEditRating}
          <h4>MY REVIEW</h4>
          {showEditReview}

          {/* <button onClick={this.toggleEditView}>
            {this.state.editView ? "CANCEL" : "EDIT"}
          </button> */}
          {!this.state.editView ? <button onClick={this.toggleEditView}>EDIT</button> : null}

          {this.state.editView ? <button onClick={(e) => this.handleSubmit(e)}>SAVE CHANGES</button> : null}
        </div>


      </div>
      : null


//// RETURN //////////////////////////////////////////////////////////////
    return (

        beerInfo

    );
  }

}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default FavBeer;



// END ///////////////////////////////////////////////////////////////////
