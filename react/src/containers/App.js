import React, { Component } from 'react';
import AssignmentsContainer from '../components/AssignmentsContainer'
import FormContainer from './FormContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/assignments')
      .then(response => response.json())
      .then(body => {
      this.setState({ assignments: body.assignments })
    })
  }

  addFaveAssignment() {
    // post fetch here
  }

  render() {
    return(
      <div className="container">
        <h1>My Favorite Launch Assignments</h1>
        <hr />
        <AssignmentsContainer
          assignments={this.state.assignments}
        />
        <FormContainer />
      </div>
    )
  }

}

export default App;
