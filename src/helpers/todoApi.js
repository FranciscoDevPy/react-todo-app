class TodoApi {

    //Obtener todas las tareas
    static getTodo = async()=>
    {
        const host      = process.env.REACT_APP_API_URL_HOST_TODO_APP;
        const url       = host+'/api/todo';
        const headers   = { "content-type": "application/json"};
        const resp      = await fetch(url, {method: 'GET', headers, mode: 'cors'});
        const {data}    = await resp.json(); 
        return data;
    }

    /**
     * Crear tarea
     * @param {string} todo 
     * @returns {json} todo
     */
    static createTodo = async(dataTodo)=>
    {
        const body      = JSON.stringify({todo: dataTodo});
        const host      = process.env.REACT_APP_API_URL_HOST_TODO_APP;
        const url       = host+'/api/todo';
        const headers   = { "content-type": "application/json"};
        const resp      = await fetch(url, {method: 'POST', headers, body, mode: 'cors'});
        const todo      = await resp.json(); 
        return todo;
    }

    /**
     * Crear tarea
     * @param {string} id 
     * @returns {json} todo
     */
    static deleteTodo = async(id)=>
    {
        const host      = process.env.REACT_APP_API_URL_HOST_TODO_APP;
        const url       = host+'/api/todo/'+id;
        const headers   = {"content-type": "application/json"};
        const resp      = await fetch(url, {method: 'DELETE', headers, mode: 'cors'});
        const todo      = await resp.json(); 
        return todo;
    }

    /**
     * Eliminar todas las tareas
     * @returns {msg}
     */
    static deleteAllTodo = async()=>
    {
        const host      = process.env.REACT_APP_API_URL_HOST_TODO_APP;
        const url       = host+'/api/todo';
        const headers   = { "content-type": "application/json"};
        const resp      = await fetch(url, {method: 'DELETE', headers, mode: 'cors'});
        const todo      = await resp.json(); 
        return todo;
    }

}

export default TodoApi;