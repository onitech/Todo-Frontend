import React from 'react';
import Task from './Task';
import { TaskData } from '../.types/TaskTypes';

interface TaskListProps {
    tasks: TaskData[];
    onComplete: (id: TaskData['_id'], completed: TaskData['completed']) => void;
    onUpdate: (id: TaskData['_id'], title: TaskData['title']) => void;
    onDelete: (id: TaskData['_id']) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onUpdate, onDelete }) => {
    const showTaskList = () => tasks.length > 0 ? (
        tasks.map((task) => (
            <Task 
                key={task._id} 
                task={task} 
                onComplete={onComplete} 
                onUpdate={onUpdate}
                onDelete={onDelete} 
            />
        ))
    ) : (
        <label className='text-white mt-10'>No Task</label>
    );

    return (
        <div className='container h-[600px] overflow-y-auto mt-20'>
            {showTaskList()}
        </div>
    );
};

export default TaskList;
