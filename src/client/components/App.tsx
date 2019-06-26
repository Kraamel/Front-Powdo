import React, {useEffect, useState} from 'react';

import Task from './Task';

import '../css/style.css';


const App: React.FC<Task> = () => {

    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<array>([]);

    const fetchTasks = async () => {
        const url = "http://localhost:4000/task";
        let response = await fetch(url);
        let tasks = await response.json();
        return setTasks(tasks);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <form style={{marginBottom: 32}}>
                <input placeholder={"add task..."}/>
            </form>
            {tasks.map(task => (
                <div  key={task.id} className="container">
                    <label className={"task"}>
                        <input type="checkbox" data-id={task.id}/>
                        <span className="task-title">{task.title}</span>
                        <form style={{display: "inline-block"}} data-id={task.id}>
                            <input className="task-title hidden" type="text" value={task.title}/>
                        </form>
                        <span className="checkmark"/>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default App

