import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { getItems, deleteItem } from '../api/items';

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getItems();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        await deleteItem(id);
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;
