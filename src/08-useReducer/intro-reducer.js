
const initialState = [{
    id: 1,
    todo: 'Colect soul stone',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

    if ( action.type === '[TODO] add todo' ){
        return [...state, action.payload];//...copia del estado anterior para evitar mutarlo
    }

    return state;//Esta regresando el mismo estado

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Colect power stone',
    done: false,

}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});
