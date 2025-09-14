import Home from '../Pages/Home';
import Login from "../Components/Log";
import Register from "../Components/Register";
import Todo from '../Pages/Todo';
import Inicio from '../Pages/Inicio';
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default Routing;