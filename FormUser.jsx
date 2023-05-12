
import { useState } from "react";
import './FormUser.css';

const FormUser = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(todo);
    };

    return (
      <div><h2>Formulario de registro</h2>
        <div className="container mt-2">
            <form onSubmit={handleSubmit}>
                    <h3>Nombre</h3><input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un nombre"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={(e) =>
                        setTodo({ ...todo, todoNombre: e.target.value })
                    } 
                />
                    <h3>Apellidos</h3><input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese apellidos"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={(e) =>
                        setTodo({ ...todo, todoNombre: e.target.value })
                    } 
                />
                    <h3>Email</h3><input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un nombre"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={(e) =>
                        setTodo({ ...todo, todoNombre: e.target.value })
                    } 
                />
                <h3>Edad</h3><input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese edad"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={(e) =>
                        setTodo({ ...todo, todoNombre: e.target.value })
                    } 
                />
                
                <h4>Click on</h4><button className="btn btn-primary" type="submit">
                    Registrarse
                </button>
            </form>
        </div>
        </div>
    );
};

export default FormUser;