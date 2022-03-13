import { useEffect, useState } from "react";
import { getTodo } from "../helpers/todoApi";

const useFetchTodo = (todo) => 
{
    const [state, setState] = useState({
        data: []
    });

    useEffect(()=>{
        getTodo()
            .then( data => {
                setState({
                    data
                })
            });
    },[todo]);

    return state;
}

export default useFetchTodo;