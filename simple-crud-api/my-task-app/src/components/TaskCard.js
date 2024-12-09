import React from 'react';

const TaskCard = ({ tas, onEdit, onDelete}) => {
    return (
        <div className='task-card'>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};
export default TaskCard;