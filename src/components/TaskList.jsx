import React, { useState } from 'react'
import Taskform from './Taskform'
import '../styles/tasklist.css'
import Task from './Task';



const TaskList = () => {

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const taskAct = [task, ... tasks];
            setTask(taskAct);
        }
    }

    const taskDelete = id => {
        const taskAct = tasks.filter(task => task.id !== id);
        setTask(taskAct)
    }

    const taskComplete = id => {
        const taskAct = tasks.map(task => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        })
        setTask(taskAct)
    }


  return (

    <>
        <Taskform onSubmit={addTask}/>

        <div className='contain__task-list'>

            {
                tasks.map( (task) => 
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        complete={task.complete}
                        taskComplete = {taskComplete}
                        taskDelete = {taskDelete}
                    />
                )
            }

        </div>

    </>

  )
}

export default TaskList