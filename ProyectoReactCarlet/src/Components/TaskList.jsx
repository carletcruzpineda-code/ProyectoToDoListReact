import React, { useState, useEffect } from 'react' /* hooks */
import { getT, agregarT, eliminarT, actualizarT } from '../Services/Services'/* conecto con el backend (API/json-server). */


function TaskList() {
  const [tareas, setTareas] = useState([]) /* Guarda tareas que traes del backend */
  const [nuevaT, setNuevaT] = useState('') /* guarda Texto del input */
  const [modoEdicion, setModoEdicion] =useState(false) /* controla true or false */
  const [tareaActual,setTareaActual] = useState(null) /* Guarda la tarea que quieres editar */

  /* Función cargarT */
  useEffect(() => { /* se ejecute cargarT y traiga todas las tareas de BaseDatos */
    cargarT()
  }, []) /* arreglo dependencias Se ejecuta una vez se segura q lista no este vacía cuando usuario entra la pagina*/


  const cargarT = async () => { /* llama al servicio get() recibe las tareas y guarda en tareas*/
    try {
      const lista = await getT()
      setTareas(lista)
    } catch (error) {
      console.error("Error al cargar tareas:", error)
    }
  }

  const agregarNuevaT = async () => {/* si el input esta vacion no hace nada */
    if (!nuevaT.trim()) return 
    try {
      await agregarT({ titulo: nuevaT, completada: false , fecha:  new Date().toISOString().slice(0,10)})/* si tiene texto,crea una nueva tarea con esto */
      setNuevaT('')
      cargarT()
    } catch (error) {
      console.error("Error al agregar tarea:", error)
    }
  }

  const borrarT = async (id) => {/* Borra x id y actualiz lista */
    try {
      await eliminarT(id)
      cargarT()
    } catch (error) {
      console.error("Error al eliminar tarea:", error)
    }
  }

  const Complete = async (tarea) => {/* Marca tarea como completada o no invierte el estado y actualiza lista */
    try {
      await actualizarT({ ...tarea, completada: !tarea.completada })
      cargarT()
    } catch (error) {
      console.error("Error al actualizar tarea:", error)
    }
  }

  /* Iniciar edición */
  const editarTarea =(tarea) => {
  setModoEdicion(true)/* Entra */
  setTareaActual(tarea)/* Guarda */
  setNuevaT(tarea.titulo)/* carga texto en el input */
  }


/* Enviar cambios de edicion */
  const enviarEdicion = async () => {
  if (!nuevaT.trim()) return   // No permitir editar a texto vacío

  try {
    await actualizarT({ ...tareaActual, titulo: nuevaT })/* Actualiza tarea con nuevo titulo */
    setModoEdicion(false)     /* sale modo edicion */
    setTareaActual(null)      /* Limpia la tarea que estaba siendo editada, eliminando la referencia a tareaActual. */
    setNuevaT('')              /* limpia el input */
    cargarT()                   /* recarga lista de tareas */
  } catch (error) {
    console.error("Error al editar tarea:", error)
  }
}

/* Inputs y botones para agregar o editar */
 return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={nuevaT} /* contenido del input viene del estado nuevaT */
          onChange={e => setNuevaT(e.target.value)}/* cada q escribo se actualiza nuevaT */
          onKeyDown={e => {
            if (e.key === "Enter") {/*si estan  modoedicion se llama enviarEdicion, sino agregarNuevaT*/
              modoEdicion ? enviarEdicion() : agregarNuevaT()
            }
          }}
        />

        {modoEdicion ? (/* Agregar, Actualizar, Cancelar */
          <>
            <button onClick={enviarEdicion}>Actualizar</button>
            <button
              onClick={() => {
                setModoEdicion(false)
                setTareaActual(null)
                setNuevaT('')
              }}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button onClick={agregarNuevaT}>Agregar</button>
        )}
      </div>

      <div>
        <p>Tareas Completadas: {tareas.filter(t => t.completada).length}</p>
      </div>

      <div> {/* Mostrar lista con opciones */}
        {tareas.map(t => (
          <div key={t.id}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => Complete(t)}
            />
            <span>Tarea: {t.titulo}|       </span>
            
            <span>Fecha:{t.fecha} </span>
            <button onClick={() => editarTarea(t)}>Editar</button>
            <button onClick={() => borrarT(t.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList