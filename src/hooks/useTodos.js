import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

    const [ todos, dispatch] = useReducer(todoReducer, [], init); //todos = state

    //Efecto secundario
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))//solo se pueden grabar strings
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => { //payload a enviar al Reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //Dispach: funcion para mandar la accion 
        dispatch (action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        
        });
    }

    return{
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
