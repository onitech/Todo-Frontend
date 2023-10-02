import { Dispatch, SetStateAction } from 'react';
import { TaskData } from '../../.types/TaskTypes';
import { getAllTasks, addTask, updateTask, deleteTask } from '../../services/api';

type setTasksType = Dispatch<SetStateAction<TaskData[]>>;

const TaskHelper = {
    async getAllTask(setTasks: setTasksType) {
        try {
            const tasks: TaskData[] = await getAllTasks();
            setTasks(tasks)
        } catch (error) {
            console.error('Error Get All task:', error)
        }
    },

    async handleAddTask(title: TaskData['title'], tasks: TaskData[], setTasks: setTasksType) {
        try {
            const newTask: TaskData = await addTask(title);
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Error Adding task:', error)
        }
    },
    
    async handleCompleteTask(
        id: TaskData['_id'], 
        completed: TaskData['completed'],
        tasks: TaskData[],
        setTasks: setTasksType
    ) {
        try {
            const updatedTask: TaskData = await updateTask(id, {completed});
            const newTaskList = tasks.filter((task) => { 
                if (task._id === id) {
                    task.completed = updatedTask.completed;
                }
    
                return task;
            });

            setTasks(newTaskList);
        } catch (error) {
            console.error('Error Updating task:', error)
        }
    },

    async handleUpdateTask(
        id: TaskData['_id'], 
        title: TaskData['title'],
        tasks: TaskData[],
        setTasks: setTasksType
    ) {
        try {
            const updatedTask: TaskData = await updateTask(id, {title});
            const newTaskList = tasks.filter((task) => { 
                if (task._id === id) {
                    task.title = updatedTask.title;
                }
    
                return task;
            });

            setTasks(newTaskList);
        } catch (error) {
            console.error('Error Updating task:', error)
        }
    },
    
    async handleDeleteTask(id: TaskData['_id'], tasks: TaskData[], setTasks: setTasksType) {
        try {
            await deleteTask(id);

            const updatedTasks = tasks.filter((task) => task._id !== id);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task:', error)
        }
    },
}

export default TaskHelper