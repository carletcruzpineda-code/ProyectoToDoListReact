import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <motion.div
      className="move"
      initial={{ y: -50, opacity: 0 }} // Posición inicial arriba, oculto
      animate={{ y: 0, opacity: 1 }}   // Anima a posición normal, visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Duración y estilo
    >
      <h2>To Do List React</h2>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/Todo"> Tareas</Link>
      </nav>
    </motion.div>
  );
}

export default NavBar;
