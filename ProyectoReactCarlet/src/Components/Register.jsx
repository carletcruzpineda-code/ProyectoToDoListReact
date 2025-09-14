import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { agregarUsuario,getUsuario } from '../Services/Services'

function Register() {
    const [usuario,setUsuario] = useState ("");
    const [clave, setClave] = useState ("")
    const [error,setError] = useState ("");
    const navigate = useNavigate();
    
     
    const registro = async (e) => {
        e.preventDefault()

         // Validar campos vacíos
        if (!usuario.trim() || !clave.trim()) {
            setError("Todos los campos son obligatorios");
            return;
        }

    try {
      // Verificar si usuario ya existe
      const existing = await getUsuario(usuario, clave);
      if (existing.length > 0) {
        setError("El usuario ya existe");
        return;
      }

      // Crear usuario nuevo
      await agregarUsuario({ usuario, clave });
      setError("");
      alert("Registro exitoso");
      navigate("/login"); // redirigir a login después del registro
    } 
    catch (error) {
      setError("Error en el servidor");
      console.error(error);
    }
  };



  return (
   <div>
      <h2>Registro</h2>
      <form onSubmit={registro}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );

}
export default Register   