import React from 'react'
import NavBar from '../Components/NavBar'
import TaskList from '../Components/TaskList'
  

function Todo() { 
  return (
    <div>
      <div className='container'><NavBar/></div>
      <div>
         <h1 className='mover'>Lista de Tareas</h1>
      <TaskList/>
      </div>
     
    </div>
  )
}

export default Todo