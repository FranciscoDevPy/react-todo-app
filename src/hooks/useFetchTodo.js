import { useEffect, useState } from "react";
import TodoApi from "../helpers/todoApi";

const useFetchTodo = (todo) => 
{
    const [state, setState] = useState({
        data: []
    });

    useEffect(()=>{
        TodoApi.getTodo()
            .then( data => {
                setState({
                    data
                })
            });
    },[todo]);

    return state;
}

export default useFetchTodo;