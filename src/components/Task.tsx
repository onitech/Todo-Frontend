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

        onUpdate(task._id, newTitle);
        setTitle(newTitle)
    }

    const handleDelete = () => {
        onDelete(task._id);
    };

    return (
        <div className='flex px-5 sm:px-20 my-0.5 sm:my-1'>
            <div className='flex items-center bg-white rounded-l w-full
                px-0 pl-2
                sm:px-5 sm:pl-3
            '>
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
            <button 
                className='bg-red-500 hover:bg-red-600 rounded-r text-white py-2 px-2 sm:px-5'
                onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Task;
