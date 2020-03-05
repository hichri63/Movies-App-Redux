import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addMovie, editMovie } from '../actions/movieActions'
import { v4 as uuidv4 } from 'uuid'

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      year: "",
      rating: 0,
      image: ""
    };
  }
  handleShow = () => {
      this.props.info ? this.setState({ 
        show: !this.state.show,
        title: this.props.info.title,
        year: this.props.info.year,
        rating:this.props.info.rating,
        image: this.props.info.image,
        id: this.props.info.id,
    })
    : this.setState({show: !this.state.show})
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  editMyMovie = () => {
      this.props.edit(this.state)
      this.setState({show: false})
  }
  addNewMovie = () => {
      this.props.editMode ? this.editMyMovie() :
      this.props.add({...this.state, id: uuidv4()})
      this.setState({show: false})
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? 'Edit' : 'Add New Movie'}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} value={this.state.title} name="title" />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} value={this.state.image} name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" onChange={this.handleChange} value={this.state.rating} name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" onChange={this.handleChange} value={this.state.year} name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.addNewMovie} variant="primary">
              {this.props.editMode ? 'Edit' : 'Add Movie'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return{
        add: x => dispatch(addMovie(x)),
        edit: x => dispatch(editMovie(x))
    }
}

export default connect(null, mapDispatchToProps)(MyModal);