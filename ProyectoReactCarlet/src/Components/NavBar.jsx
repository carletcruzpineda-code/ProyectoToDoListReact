import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  const navigate =useNavigate();
  
  const cerrarS = () => {
    sessionStorage.clear();
    navigate("/login");
    }
  return (
    <motion.div
      className="move"
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}  
      transition={{ duration: 0.6, ease: "easeOut" }} 
    >
      <h2>To Do List React</h2>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/Todo">Tareas</Link> |{" "}
        <button onClick={cerrarS }>Cerrar sesión</button>
      </nav>
    </motion.div>
  );
}
 export default NavBar; 
