import React, { useState } from 'react'
import '../styles/taskform.css'
import { v4 as uuidv4} from 'uuid';


const Taskform = (props) => {

  const [input, setInput] = useState('')

  const manejarCambio = e => {
    setInput(e.target.value);
    

  }

  const manejarEnvio = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completada: false
    }

    props.onSubmit(newTask)

  }



  return (

    <form className='task__form'
    onSubmit={manejarEnvio}>
        <input className='task__input' 
        type="text" 
        placeholder='write a task'
        name= 'text'
        onChange={manejarCambio}
        />
    
    <button className='button-task'>
    Add Task
    </button>
    
    
    </form>

  )
}

export default Taskform;