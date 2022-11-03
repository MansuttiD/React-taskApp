import React from 'react'
import '../styles/task.css'
import {AiOutlineCloseCircle} from "react-icons/ai";

const Task = ({id, text, complete, taskComplete, taskDelete}) => {



  return (
    <div className={complete ? 'container__task complete' : 'container__task'}>
        
        <div onClick={() => taskComplete(id)} className='container__task-text'>
            {text}
        </div>

        <div className='container__task-icons' onClick={() => taskDelete(id)}>

            <AiOutlineCloseCircle className='container__task-icon'/>
        </div>

    </div>
  )
}

export default Task