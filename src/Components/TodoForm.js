import { useState } from "react";
import TodoApi from "../helpers/TodoApi";
const TodoForm = ({setTodo}) => 
{
    const [inputTodo, setInputTodo] = useState('');

    const handleInputTodoChange = (e)=>
    {
        setInputTodo(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        TodoApi.createTodo(inputTodo)
            .then((todo)=>{
                setTodo(todo);
            });
        setInputTodo('');
    }

    return ( 
        <form onSubmit={handleSubmit} >
            <div className="row pt-1">
                    <div className="col-10 pe-1">
                        <input 
                            onChange={handleInputTodoChange}
                            type="text" 
                            value={inputTodo}
                            className="form-control" 
                            placeholder="Add your new todo"
                            required
                            maxLength="50" />
                    </div>
                    <div className="col-2 ps-0">
                        <button 
                            className="btn btn-add bg-lila txt-white" > 
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
            </div>
        </form>
    );
}

export default TodoForm;