import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { createItem, updateItem } from './api/items';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleCreate = async (data) => {
        if (editingTask) {
            await updateItem(editingTask.id, data);
        } else {
            await createItem(data);
        }
        setModalOpen(false);
        setEditingTask(null);
    };

    const handleEdit = (task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    return (
        <div className="app">
            <button onClick={() => setModalOpen(true)}>Add Task</button>
            <TaskList onEdit={handleEdit} />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleCreate}
                initialData={editingTask}
            />
        </div>
    );
};

export default App;
