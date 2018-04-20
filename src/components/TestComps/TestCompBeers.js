
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import axios from 'axios'

import { API_URL } from '../../urls'

import './TestComps.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class TestCompBeers extends Component {



//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      beers: [],
    }
  }



//// DID MOUNT //////////////////////////////////////////////////////////
  componentDidMount() {

    axios.get(`${API_URL}/api/beers`)
    .catch(err => console.log(err))
    .then((res) => {
      this.setState({
        beers: res.data
      })
    })
  }






//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let beers = this.state.beers ?
      this.state.beers.map((beer, indx) => {
        return (
          <div className="BeerCardDiv" key={indx}>
            <h4>{beer.name}</h4>
            <p>{beer.type}</p>
            <p>{beer.price}</p>
            <img src={beer.photo} height="150px" width="150px" alt={beer.name}/>
          </div>
        )
      })
      : null

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="TestCompBeersDiv">
        {beers}
      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default TestCompBeers;



// END ///////////////////////////////////////////////////////////////////
