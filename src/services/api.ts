import { TaskData } from '../.types/TaskTypes';

const BASE_URL = 'http://localhost:3000/api/tasks';

const fetchApi = async (url: string, options: RequestInit = {}): Promise<Response> => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`API request error: ${response.statusText}`);
        }

        return await response;
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}

export const getAllTasks = async (): Promise<TaskData[]> => {
    const url = BASE_URL;
    const response = await fetchApi(url);
    return await response.json();
};

export const addTask = async (title: TaskData['title']): Promise<TaskData> => {
    const url = BASE_URL;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    };

    const response = await fetchApi(url, options);
    return await response.json();
};

export const updateTask = async (
    id: TaskData['_id'], 
    value: {
        completed?: TaskData['completed']
        title?: TaskData['title']
    }
): Promise<TaskData> => {
    const url = `${BASE_URL}/${id}`;
    const options: RequestInit = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    };

    const response = await fetchApi(url, options);
    return await response.json();
};
  
export const deleteTask = async (id: TaskData['_id']): Promise<Response> => {
    const url = `${BASE_URL}/${id}`;
    const options: RequestInit = {
      method: 'DELETE',
    };
    
    return await fetchApi(url, options);
};