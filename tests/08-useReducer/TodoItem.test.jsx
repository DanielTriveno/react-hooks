import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el <TodoItem/> ', () => {
    
    const todo ={
        id: 1,
        description: 'Soul stone',
        done: false
    }
    const onDeleteTodoMock = jest.fn(); 
    const onToggleTodoMock = jest.fn(); 
    
    beforeEach( () => jest.clearAllMocks());

    test('Debe de mostrar el Todo Pendiente de completar', () => { 
        
        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onToggleTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);

        expect (liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
        //console.log(spanElement.className);
        
        //screen.debug();
    });


});