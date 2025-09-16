Este proyecto es una aplicación web de lista de tareas (To-Do List) creada con React. Permite a los usuarios registrarse, iniciar sesión y gestionar sus tareas mediante funciones para crear, editar, completar y eliminar ítems. La aplicación utiliza rutas protegidas para asegurar que solo usuarios autenticados puedan acceder a las páginas principales
y emplea animaciones suaves con Framer Motion para mejorar la experiencia de usuario. El backend está simulado con json-server para almacenar usuarios y tareas.

Tecnologías y Librerías 
Debe Clonar el repositorio:

```bash
git clone https://github.com/carletcruzpineda-code/ProyectoToDoListReact.git
cd tu-repo

Instalar dependencias:

bash
Copiar código
npm install
Ejecutar json-server para simular backend:

bash
Copiar código
npx json-server --watch db.json --port 3001

1. Descripción general 

-Tiene Registro de usuario con validación y verificación de usuarios existentes.
- Inicio de sesión validando usuario y contraseña.
- Sesión activa guardada en `sessionStorage` para control de acceso.
- Rutas protegidas para que solo usuarios autenticados puedan acceder a `/Home` y `/Todo`.
- CRUD completo de tareas: agregar, editar, eliminar, marcar completadas.
- Animaciones suaves usando Framer Motion en transiciones y elementos UI.
- Barra de navegación con opción de cerrar sesión (limpia sesión y redirige a login).

2.Descripción de Componentes y paginas
Log.jsx

Formulario para iniciar sesión, verifica usuario y contraseña contra backend y guarda sesión.

Register.jsx

Formulario para registro con validación, verifica usuario duplicado y guarda nuevo usuario.

NavBar.jsx

Barra con links a las páginas, y botón para cerrar sesión que limpia sessionStorage.

TaskList.jsx

Muestra lista de tareas, permite CRUD, y controla estado local sincronizado con backend.

Home.jsx y Todo.jsx

Páginas principales que usan NavBar y TaskList, con animaciones visuales.
