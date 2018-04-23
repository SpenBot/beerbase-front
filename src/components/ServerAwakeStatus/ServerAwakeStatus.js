
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './ServerAwakeStatus.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class ServerAwakeStatus extends Component {

  constructor() {
    super()
    this.state = {
      currentTimeout: null,
      loadingWidth: 10,
    }
  }


//// COMPONENT DID MOUNT /////////////////////////////////////////////////

  componentDidMount() {
    this.setState({ currentTimeout: window.setTimeout(this.increaseLoading, 200) })
  }


//// COMPONENT WILL UNMOUNT //////////////////////////////////////////////

  componentWillUnmount() {
    clearTimeout(this.state.currentTimeout)
  }


//// INCREASE LOADING /////////////////////////////////////////////////

  increaseLoading = () => {
    if (this.state.loadingWidth < 290) {

      this.setState(prevState => ({
        loadingWidth: prevState.loadingWidth + 10,
        currentTimeout: window.setTimeout(this.increaseLoading, 400)
}))
    }
    else {
      clearTimeout(this.state.currentTimeout)
    }
  }





//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="ServerAwakeStatusDiv">
        <h2> Waking Heroku server, please stand by :</h2>

        <div id="LoadingBarContainer">
          <div id="LoadingBarFill" style={{height: "30px", width: `${this.state.loadingWidth}px`}}></div>
        </div>

      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default ServerAwakeStatus;



// END ///////////////////////////////////////////////////////////////////
