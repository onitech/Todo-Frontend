import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskData } from './.types/TaskTypes';
import TaskHelper from './helpers/task';

const App = () => {
    const { 
        getAllTask, 
        handleAddTask, 
        handleUpdateTask, 
        handleDeleteTask 
    } = TaskHelper;
    const [tasks, setTasks] = useState<TaskData[]>([]);

    useEffect(() => {
        getAllTask(setTasks);
    }, []);

    return (
        <div className="bg-[url('../public/BG.avif')] bg-cover bg-no-repeat bg-center h-screen w-full overflow-hidden">
            <div className='text-center flex items-center flex-col'>
                <div className='container shadow-2xl backdrop-blur-md bg-slate-50/10 rounded-md
                    w-80 mt-10 py-1
                    sm:w-10/12 sm:mt-20 sm:py-5
                    xl:w-1/2
                '>
                    <h1 className='text-4xl font-semibold text-slate-50 my-5'>TO DO LIST</h1>
                    <TaskForm addTask={(title) => handleAddTask(title, tasks, setTasks)} />
                    <TaskList
                        tasks={tasks}
                        onUpdate={(id, updateData) => handleUpdateTask(id, updateData, tasks, setTasks)}
                        onDelete={(id) => handleDeleteTask(id, tasks, setTasks)}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
