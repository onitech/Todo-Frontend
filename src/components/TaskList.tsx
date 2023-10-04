import React from 'react';
import Task from './Task';
import { TaskData } from '../.types/TaskTypes';

interface TaskListProps {
    tasks: TaskData[];
    onUpdate: (id: TaskData['_id'], updateData: Partial<TaskData>) => void;
    onDelete: (id: TaskData['_id']) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
    const showTaskList = () => tasks.length > 0 ? (
        tasks.map((task) => (
            <Task 
                key={task._id} 
                task={task} 
                onUpdate={onUpdate}
                onDelete={onDelete} 
            />
        ))
    ) : (
        <label className='text-white mt-10'>No Task</label>
    );

    return (
        <div className='container overflow-y-auto pb-[100px]
            h-[700px] mt-7
            sm:h-[600px] sm: mt-20
        '>
            {showTaskList()}
        </div>
    );
};

export default TaskList;
