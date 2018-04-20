
//// DEPENDENCIES, MODULES, COMPONENTS, STYLES ///////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import './EditForm.css';




//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class EditForm extends Component {

//// CONSTRUCTOR ///////////////////////////////////////////////////////
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.user.username,
      photo: this.props.user.photo
    }
  }

//// HANDLE EDIT ///////////////////////////////////////////////////////
  handleEdit(e) {
    e.preventDefault()
    this.props.editAccount(this.state)
    this.props.toggleEditView()
  }

//// HANDLE CHANGE ///////////////////////////////////////////////////////
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let username = this.state.username
    let photo = this.state.photo

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="EditFormDiv">

        <form onSubmit={(e) => this.handleEdit(e)}>
          <div>
            <label>USERNAME: &nbsp; &nbsp; </label>
            <input name="username" value={username} autoComplete="off" onChange={(e) => this.handleChange(e)}/>
          </div>
          <div>
            <label>PHOTO URL: &nbsp; &nbsp; </label>
            <input name="photo" value={photo} autoComplete="off" onChange={(e) => this.handleChange(e)}/>
          </div>

          <input className="submit" type="submit" value="Save Changes"></input>
        </form>

      </div>
    );
  }
}




//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default EditForm;



// END ///////////////////////////////////////////////////////////////////
