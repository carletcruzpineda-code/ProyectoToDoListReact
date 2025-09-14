import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { getUsuario } from '../Services/Services'

function Log() {
    
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
  
    const contrlLogin = async (e) => {
        e.preventDefault()
        try {
            // validar usuario y clave
            
            const result = await getUsuario(usuario, clave);
            if (result.length > 0) {
                // Login exitoso, guardamos estado en sessionStorage (temporal)
            /*     sessionStorage.setItem("auth", "true"); */
                sessionStorage.setItem("usuarioActivo", usuario);
                setError("");
                navigate("/Home");
            } 
            else {
                setError("Usuario o contraseña incorrectos");
            }
        } 
        catch (error) {
            setError("Error en el servidor");
            console.error(error);
        }
    };

    return (
       <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={contrlLogin}>
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
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>

  )
};

export default Log