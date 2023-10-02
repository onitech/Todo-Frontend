import React, { useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';
import { TaskData } from '../.types/TaskTypes';

interface TaskFormProps {
    addTask: (title: TaskData['title']) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        onAdd();
    }

    const onAdd = (event?: MouseEvent<HTMLButtonElement>) => {
        if (event) event.stopPropagation();
        if (title.trim() === '') return;
        addTask(title);
        setTitle('');
    };

    return (
        <div className=''>
            <form className="px-20 flex" onSubmit={onSubmit}>
                <input
                    className='w-full py-3 px-4 appearance-none border rounded-l focus:outline-none text-gray-700'
                    type="text"
                    placeholder="Enter New Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button 
                    className='bg-cyan-500 hover:bg-cyan-600 rounded-r text-white px-5 py-2 w-40'
                    onClick={onAdd}
                >Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
