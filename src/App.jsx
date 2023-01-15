import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'



function App() {

  return (
    <div className="App">

      <div className="App">
        <div className='conteiner__task'>
          <h1>My Tasks</h1>
          <TaskList />
        </div>
      </div>

    </div>
  )
}

export default App
