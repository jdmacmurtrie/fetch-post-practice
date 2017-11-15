import React, { Component } from 'react';
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      dueDate: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
    this.handleChangeDueDate = this.handleChangeDueDate.bind(this)
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }

  handleChangeSubject(event) {
    this.setState({ subject: event.target.value })
  }

  handleChangeDueDate(event) {
    this.setState({ dueDate: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    // your code here
    this.handleClearForm()
  }

  handleClearForm() {
    this.setState({
      name: '',
      subject: '',
      dueDate: ''
    })
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextField
          label="Name"
          name="name"
          value={this.state.name}
          handleFormChange={this.handleChangeName}
        />
        <TextField
          label="Subject"
          name="subject"
          value={this.state.subject}
          handleFormChange={this.handleChangeSubject}
        />
        <TextField
          label="Due Date"
          name="dueDate"
          value={this.state.dueDate}
          handleFormChange={this.handleChangeDueDate}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
