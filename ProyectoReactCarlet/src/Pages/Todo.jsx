import React from 'react'
import NavBar from '../Components/NavBar'
import TaskList from '../Components/TaskList'
  

function Todo() {
  return (
    <div>
      <NavBar/>
      <h1>Lista de Tareas</h1>
      <TaskList/>
    </div>
  )
}

export default Todo