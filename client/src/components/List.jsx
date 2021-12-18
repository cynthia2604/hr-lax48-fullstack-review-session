import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => (
    <div>
      {props.students.map((student) =>
        <ListElement student={student} key={student._id}/>
      )}
    </div>
)

export default List