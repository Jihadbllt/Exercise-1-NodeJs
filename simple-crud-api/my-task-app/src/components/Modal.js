import { model } from 'mongoose';
import React, { useState } from 'react';

const Modal = ({ isOpen, isClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData || {name:'', description: ''});

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onclose();
    };

    return (
        <div className='modal'>
            <form onSubmit={{handleSubmit}}></form>
            <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Task name'
            />
            <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Task Description'
            />
            <button type='submit'>Submit</button>
            <button type='button' onClick={onclose}>Close</button>
        </div>
    );
};

export default Modal;