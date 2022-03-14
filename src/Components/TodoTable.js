import { useEffect } from 'react';
import TodoApi from "../helpers/TodoApi";
import useFetchTodo from '../hooks/useFetchTodo'

const TodoTable = ( {todo, setTodo, setTodoTotal} ) => 
{
    const {data} = useFetchTodo(todo);

    useEffect(()=>{
        setTodoTotal( data?.length || 0 )
    },[data]);

    const handleSubmit = (id)=>{
        TodoApi.deleteTodo(id)
            .then((todo)=>{
                setTodo(todo);
            });
    }

    const handleShowBtnDelete = (e)=>{
        const btnDelete = e.currentTarget.children[1].children[0];
        btnDelete.classList.remove('oculto');
        btnDelete.classList.add('animate__fadeIn');
    }

    const handleHideBtnDelete = (e)=>{
        const btnDelete = e.currentTarget.children[1].children[0];
        btnDelete.classList.add('oculto');
        btnDelete.classList.remove('animate__fadeIn');
    }

    return ( 
        <table className="table-todo-app w-100">
            <tbody>
                { !data?.length ?
                    <tr><td className='text-center' >No todo list</td></tr> :
                    data.map((value)=>(
                        <tr 
                            key={value.id} 
                            onMouseOver={(e)=>handleShowBtnDelete(e)}
                            onMouseLeave={(e)=>handleHideBtnDelete(e)} >
                            <td>{value.todo}</td>
                            <td>
                                <button 
                                    title='Delete Todo'
                                    className="oculto animate__animated btn-delete txt-white" 
                                    onClick={()=>{handleSubmit(value.id)}} 
                                >
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