import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
        <div className='move'>
            <h2> To Do List React</h2>
                <nav>
                    <Link to="/">Inicio</Link> | 
                    <Link to="/Todo"> Tareas</Link>
                </nav>
        </div>
  )
}

export default NavBar