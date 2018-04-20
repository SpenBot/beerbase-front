
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import axios from 'axios'

import { API_URL } from '../../urls'




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class TestForms extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      type: '',
      price: '',
      photo: ''
    }
  }



  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log("submit")

    axios.post(`${API_URL}/api/beers`, this.state)
    .catch(err => console.log(err))
    .then(res => {
      this.setState({...res.data})
      // this.props.history.push('/')
    })
  }






//// RENDER //////////////////////////////////////////////////////////////
  render() {


//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="TestFormsDiv">

        <h2> NEW FORM </h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>

          <input name="name" placeholder="name" onChange={(e) => this.handleChange(e)}/>
          <input name="type" placeholder="type" onChange={(e) => this.handleChange(e)}/>
          <input name="price" placeholder="price" onChange={(e) => this.handleChange(e)}/>
          <input name="photo" placeholder="image url" onChange={(e) => this.handleChange(e)}/>

          <input className="submit new" type="submit" value="submit"></input>

        </form>



      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default TestForms;



// END ///////////////////////////////////////////////////////////////////
