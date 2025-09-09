/* Obtener todas las tareas */
export async function getT() {
    try {
        const response = await fetch('http://localhost:3001/Tareas', {
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
        const response = await fetch('http://localhost:3001/Tareas', {
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
        await fetch(`http://localhost:3001/Tareas/${id}`, {
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
        const response = await fetch(`http://localhost:3001/tareas/${Tareas.id}`, {
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
