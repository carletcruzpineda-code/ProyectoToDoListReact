import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/NavBar';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}    
            animate={{ opacity: 1, y: 0 }}      
            transition={{ duration: 0.5 }}     
        >
            <NavBar/>
            <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Bienvenido
            </motion.h1>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Registro de Tareas
            </motion.p>
        </motion.div>
    );
}

export default Home;