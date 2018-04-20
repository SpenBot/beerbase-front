
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './Home.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Home extends Component {






//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="HomeDiv">


        <div className="homeMainImgDiv" >

          <img id="homeMainImg" src="https://shawglobalnews.files.wordpress.com/2015/07/craft-beer-pints.jpg?quality=70&strip=all&crop=0px%2C0px%2C720px%2C480px&resize=720%2C480" alt="beer 1"/>

          <div id="homeMainImgText">
            <p> Come join a community of beer lovers! </p>
          </div>

        </div>

        <div className="homeMore">

          <div className="homeSecDiv">
            <img src="https://fixcom.azureedge.net/assets/content/19743/craft-beer-header.png"
            alt="beer3" height="100px" width="400px" />
            <h4>Award Winning Beers!</h4>
          </div>

            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibXcDU2t9HeQ/v6/800x-1.jpg"
            alt="beer2" height="134px" width="210" />

        </div>

      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Home;



// END ///////////////////////////////////////////////////////////////////
