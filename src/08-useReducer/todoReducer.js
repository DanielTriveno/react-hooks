


export const todoReducer = (initialState = [], action)=> {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]//evitar mutar los arreglos x push
            
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload);//filter () regresa un nuevo arrelgo
        
        case '[TODO] Toggle Todo':
            return initialState.map(todo => { //map transforma un arreglo

                if ( todo.id === action.payload){//id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }

}