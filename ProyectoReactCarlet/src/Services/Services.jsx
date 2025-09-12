/* Obtener todas las tareas */
export async function getT() {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const tareas = await response.json();
        return tareas;
    } catch (error) {
        console.error(" error al recuperar tareas", error);
        throw error;
    }
}

/* Eliminar tarea x id */
export async function agregarT(tarea) {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarea)
        });
        return await response.json();
    } catch (error) {
        console.error("error al agregar la tarea", error);
        throw error;
    }
}

/*  Eliminar tarea x por id */
export async function eliminarT(id) {
    try {
        await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("error al eliminar la tarea", error);
        throw error;
    }
}


/* Actualizar tarea */
export async function actualizarT(tarea) {
    try {
        const response = await fetch(`http://localhost:3001/tareas/${tarea.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarea)
        });
        return await response.json();
    } catch (error) {
        console.error("error al actualizar la tarea", error);
        throw error;
    }
}

/* Obtener nuevo usuario */
export async function getUsuario(usuario, clave) {
  try {
    const response = await fetch('http://localhost:3001/usuarios?usuario=' + usuario + '&clave=' + clave, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json(); // Devuelve un array
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
}

/* Obtener Usuario por Nombre y Clave */

export async function agregarUsuario(usuarioObj) {
  try {
    const response = await fetch('http://localhost:3001/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuarioObj)
    });
    return await response.json();
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
}

