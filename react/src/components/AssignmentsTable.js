import React from 'react';

const AssignmentsTable = props => {

  return(
      <tr>
        <td>{props.name}</td>
        <td>{props.subject}</td>
        <td>{props.dueDate}</td>
      </tr>
  )
}

export default AssignmentsTable;
