import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName : '',
      toggleEdit : false
    }
    this.editMode = this.editMode.bind(this);
    this.changeNameMode = this.changeNameMode.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.updateNameRequest = this.updateNameRequest.bind(this);
  }
  updateNameRequest() {
    axios.put(`/studentlist/students/${this.props.student._id}`, {
      name : this.state.inputName,
      studentId : this.props.student._id
    })
      .then(() => this.props.getStudents())
      .catch((err) => console.error(err))
  }
  // changeName // track of input change name
  changeNameMode() {
    if (this.state.toggleEdit) {
      return (
        <div>
          <input type="text" name="name" placeholder={this.props.student.name} onChange={this.handleNameChange}></input>
          <button>Cancel</button>
          <button onClick={this.updateNameRequest}>Update</button>
        </div>
      )
    }
  }
  // hide or disappear changename component
  editMode() {
    this.setState({
      toggleEdit : !this.state.toggleEdit
    })
  }
  handleNameChange(e) {
    this.setState({
      inputName : e.target.value
    })
  }
  render() {
    return (
    <span>
      <div onClick={this.editMode}>{this.props.student.name}</div>
      {this.changeNameMode()}
      <img src={this.props.student.imageUrl}></img>
    </span>
    )
  }
}
export default ListElement