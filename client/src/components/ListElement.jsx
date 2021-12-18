import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEdit : false
    }
    this.editMode = this.editMode.bind(this);
    this.changeNameMode = this.changeNameMode.bind(this);
  }
  // changeName // track of input change name
  changeNameMode() {
    if (this.state.toggleEdit) {
      return (
        <div>
          <input type="text" name="name" placeholder={this.props.student.name}></input>
          <button>Cancel</button>
          <button>Update</button>
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