import React, { useState, useEffect } from 'react'
import { getT, agregarT, eliminarT, actualizarT } from '../Services/Services'


function TaskList() {
  const [tareas, setTareas] = useState([])
  const [nuevaT, setNuevaT] = useState('')

  useEffect(() => {
    cargarT()
  }, [])

  const cargarT = async () => {
    try {
      const lista = await getT()
      setTareas(lista)
    } catch (error) {
      console.error("Error al cargar tareas:", error)
    }
  }

  const agregarNuevaT = async () => {
    if (!nuevaT.trim()) return
    try {
      await agregarT({ titulo: nuevaT, completada: false })
      setNuevaT('')
      cargarT()
    } catch (error) {
      console.error("Error al agregar tarea:", error)
    }
  }

  const borrarT = async (id) => {
    try {
      await eliminarT(id)
      cargarT()
    } catch (error) {
      console.error("Error al eliminar tarea:", error)
    }
  }

  const Complete = async (tarea) => {
    try {
      await actualizarT({ ...tarea, completada: !tarea.completada })
      cargarT()
    } catch (error) {
      console.error("Error al actualizar tarea:", error)
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={nuevaT}
          onChange={e => setNuevaT(e.target.value)}
          onKeyDown={(e) => { if(e.key === "Enter")agregarNuevaT() }}
        />
        <button onClick={agregarNuevaT}>Agregar</button>
      </div>

      <div>
        <p>Tareas Completadas: {tareas.filter(t => t.completada).length}</p>
      </div>

      <div>
        {tareas.map(t => (
          <div key={t.id}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => Complete(t)}
            />
            <span>{t.titulo}</span>
            <button onClick={() => borrarT(t.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList