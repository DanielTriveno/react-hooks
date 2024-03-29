import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    
    
    //{
    //    id: new Date().getTime(),
    //    description: 'Colect soul stone',
    //    done: false,
    //},
    
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch] = useReducer(todoReducer, initialState, init); //todos = state

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

  return (
    <>
        <h1>TodoApp: 10, <small>pending: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                <TodoList 
                    todos={todos} 
                    onDeleteTodo={id => handleDeleteTodo(id)}
                    onToggleTodo={handleToggleTodo}
                />

            </div>
            <div className="col-5">

                <h4>Add TODO</h4>
                <hr />
                
                <TodoAdd onNewTodo={handleNewTodo}/>

            </div>
        </div>

    </>
  )
}
 