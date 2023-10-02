import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskData } from './.types/TaskTypes';
import TaskHelper from './helpers/task';

const App = () => {
    const { 
        getAllTask, 
        handleAddTask, 
        handleCompleteTask, 
        handleUpdateTask, 
        handleDeleteTask 
    } = TaskHelper;
    const [tasks, setTasks] = useState<TaskData[]>([]);

    useEffect(() => {
        getAllTask(setTasks);
    }, []);

    return (
        <div className="bg-[url('../public/BG.avif')] bg-cover bg-no-repeat bg-center h-screen w-full">
            <div className='text-center flex items-center flex-col'>
                <div className='container w-1/2 h-[900px] mt-20 shadow-2xl backdrop-blur-md bg-slate-50/10  rounded-md py-10'>
                    <h1 className='text-4xl font-semibold text-slate-50 my-5'>TO DO LIST</h1>
                    <TaskForm addTask={(title) => handleAddTask(title, tasks, setTasks)} />
                    <TaskList
                        tasks={tasks}
                        onComplete={(id, completed) => handleCompleteTask(id, completed, tasks, setTasks)}
                        onUpdate={(id, title) => handleUpdateTask(id, title, tasks, setTasks)}
                        onDelete={(id) => handleDeleteTask(id, tasks, setTasks)}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
