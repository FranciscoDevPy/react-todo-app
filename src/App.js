import {useState} from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';
import TodoApi from "./helpers/TodoApi";

function App() 
{
    const [todo, setTodo] = useState([]);
    const [todoTotal, setTodoTotal] = useState(0);
    const handleSubmit = ()=>{
        TodoApi.deleteAllTodo()
            .then((msg)=>{
                setTodo([])
            });
    }
    return (
        <div className="container">
            <div className="row todo-app">
                <div className="col-12 col-sm-12 col-md-9 col-lg-6">
                    <div className="card">
                        {/* CARD HEADER - ADD TODO */}
                        <div className="card-header bg-white">
                            <h5> <strong>Todo App</strong> </h5>
                            <TodoForm setTodo={setTodo} />
                        </div>
                        {/* / CARD HEADER - ADD TODO */}
                        {/* CARD BODY - LIST TODO */}
                        <div className="card-body pt-0">
                            <TodoTable todo={todo} setTodo={setTodo} setTodoTotal={setTodoTotal}/>
                        </div>
                        {/* / CARD BODY - LIST TODO */}
                        {/* CARD FOOTER - INFO TODO */}
                        <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                            <p className="m-0" >You have {todoTotal} pending tasks</p> 
                            <button className="btn bg-lila txt-white" onClick={handleSubmit} > Clear all</button>
                        </div>
                        {/* / CARD FOOTER - INFO TODO  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;