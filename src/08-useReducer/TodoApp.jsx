import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks";




export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
    // todos.filter(todo => !todo.done).length
  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pending: { pendingTodosCount}</small></h1>
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
 