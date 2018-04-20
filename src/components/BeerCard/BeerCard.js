
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import axios from 'axios'

import { API_URL } from '../../urls'

import './BeerCard.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class BeerCard extends Component {


//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      commentsView: false,
      avgRating: null,
      reviews: []
    }
  }





//// DID MOUNT //////////////////////////////////////////////////////////
  componentDidMount() {

    let ratingsSum = null
    let avgRatingNew = null

    this.props.beer.ratings.map(rating => {
      return (
        ratingsSum += rating.score
      )
    })

    avgRatingNew = ratingsSum ? Math.ceil(ratingsSum / this.props.beer.ratings.length) : "-"

    this.setState({
      avgRating: avgRatingNew,
    })

  }












//// TOGGLE COMMENTS VIEW ////////////////////////////////////////////////
  toggleCommentsView = () => {
    this.setState(prevState => ({
      commentsView: !prevState.commentsView
    }))
  }

//// ADD FAVORITE /////////////////////////////////////////////////////
  addFav = () => {

    let userCopy = this.props.user
    userCopy.favorites.push( { beerId: this.props.beer._id})

    axios.put(`${API_URL}/api/users/${this.props.user._id}`, userCopy)
    .catch(err => console.log(err))
    .then(res => {
      console.log(res.data)
    })


    this.toggleFav()
  }

//// TOGGLE FAVORITE /////////////////////////////////////////////////////
  toggleFav = () => {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }))
  }



//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let commentsWindow = null

    if (this.state.commentsView) {
      commentsWindow =
        <div className="BeerCardUserRevs">

          <ul>
            {
              this.props.beer.reviews.map((review, idx) => {
                return(
                  <li key={idx}>
                    {review.userName} : &nbsp; {review.body}
                  </li>
                )
              })
            }
        </ul>
        </div>
    }




    let isFav = false

    if (this.props.user) {
      this.props.user.favorites.forEach(fav => {
        if (fav.beerId === this.props.beer._id) {
          isFav = true
        }
      })
    }



    let favButton = null

    if (isFav && this.props.user) {
      favButton =
        <button style={{backgroundColor: 'red'}}>
          <span style={{color: 'white'}}>FAVORITE!</span>
        </button>
      }
    else if (!isFav && this.props.user) {
      favButton =
        <button onClick={this.addFav} style={{backgroundColor: 'gray'}}>
          NOT FAVORITE
        </button>
    }




//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="BeerCardDiv">

        <div className="BeerCardLeft">
          <img src={this.props.beer.photo} height="250px" width="250px" alt={this.props.beer.name}/>
        </div>

        <div className="BeerCardRight">
          <h4>{this.props.beer.name}</h4>

          <div className="BeerCardInfo">
            <p>TYPE: &nbsp; {this.props.beer.type}</p>
            <p>PRICE: &nbsp; ${this.props.beer.price}</p>
          </div>

          <div className="BeerCardUserStats">

            <h5>AVG. USER RATING: &nbsp; <span style={{fontSize: '22px'}}>{this.state.avgRating}</span></h5>

            {commentsWindow}

            <button onClick={this.toggleCommentsView} style={{backgroundColor: 'yellow'}}>
              {this.state.commentsView ? "HIDE REVIEWS" : "SHOW REVIEWS"}
            </button>

            {favButton}


          </div>

        </div>

      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default BeerCard;




// END ///////////////////////////////////////////////////////////////////
