import { useEffect } from 'react';
import { deleteTodo } from "../helpers/todoApi";
import useFetchTodo from '../hooks/useFetchTodo'

const TodoTable = ( {todo, setTodo, setTodoTotal} ) => 
{
    const {data} = useFetchTodo(todo);

    useEffect(()=>{
        setTodoTotal( data?.length || 0 )
    },[data]);

    const handleSubmit = (id)=>{
        deleteTodo(id)
            .then((todo)=>{
                setTodo(todo);
            });
    }

    return ( 
        <table className="table-todo-app w-100">
            <tbody>
                { !data?.length ?
                    <tr><td className='text-center' >No todo list</td></tr> :
                    data.map((value)=>(
                        <tr key={value.id} >
                            <td>{value.todo}</td>
                            <td>
                                <button className="btn-delete txt-white" onClick={()=>{handleSubmit(value.id)}} >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default TodoTable;