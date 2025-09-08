import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
        <div>
            <h2> To Do App</h2>
                <nav>
                    <Link to="/">Inicio</Link> | 
                    <Link to="/Todo"> Tareas</Link>
                </nav>
        </div>
  )
}

export default NavBar