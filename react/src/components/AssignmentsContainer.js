import React from 'react';
import AssignmentsTable from './AssignmentsTable'

const AssignmentsContainer = props => {

  let assignments = props.assignments.map(assignment => {
    return(
      <AssignmentsTable
        key={assignment.id}
        name={assignment.name}
        subject={assignment.subject}
        dueDate={assignment.due_date}
      />
    )
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        { assignments }
      </tbody>
    </table>
  );
}

export default AssignmentsContainer;
