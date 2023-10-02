import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { TaskData } from '../.types/TaskTypes';

interface TaskProps {
    task: TaskData;
    onComplete: (id: TaskData['_id'], completed: TaskData['completed']) => void;
    onUpdate: (id: TaskData['_id'], title: TaskData['title']) => void;
    onDelete: (id: TaskData['_id']) => void;
}

const Task: React.FC<TaskProps> = ({ task, onComplete, onUpdate, onDelete }) => {
    const [title, setTitle] = useState(task.title);

    const addTextDecoration = task.completed ? 'line-through bg-white' : '';

    const handleComplete = () => {
        onComplete(task._id, !task.completed);
    };

    const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        
        if (newTitle.trim() === '') return;

        onUpdate(task._id, event.target.value);
        setTitle(event.target.value)
    }

    const handleDelete = () => {
        onDelete(task._id);
    };

    return (
        <div className='mx-20 my-0.5 flex'>
            <div className="flex items-center w-full bg-white rounded-l px-5">
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    className="w-5 h-5 mr-3" 
                    onChange={handleComplete}
                />

                <input 
                    type="text" 
                    disabled={task.completed}
                    className={`text-black/80 ${addTextDecoration}`}
                    onChange={handleUpdate}
                    value={title}
                />
            </div>
            <button className='bg-red-500 hover:bg-red-600 rounded-r text-white px-5 py-2 w-30' onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Task;
