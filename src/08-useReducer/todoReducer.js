


export const todoReducer = (initialState = [], action)=> {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]//evitar mutar los arreglos x push           
    
        default:
            return initialState;
    }

}