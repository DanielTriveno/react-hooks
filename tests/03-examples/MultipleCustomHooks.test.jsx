import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks>', () => { 

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue( {
            counter: 1,
            increment: mockIncrement
        });
    
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue( {
            data: null,
            hasError: false,
            isLoading: true,
        });

        render(<MultipleCustomHooks/>);
        
        expect(screen.getByText('Cargando'));
        expect(screen.getByText('Informacion de Pokémon'));
        
        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        //console.log( nextButton.disabled )
        expect( nextButton.disabled).toBeTruthy();
        //screen.debug();

    });

    test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue( {
            data: {
                name: 'Pikachu',
                sprites: {
                    front_default: 'url_to_front_default_sprite',
                    front_shiny: 'url_to_front_shiny_sprite',
                    back_default: 'url_to_back_default_sprite',
                    back_shiny: 'url_to_back_shiny_sprite',
                },
            },
            hasError: null,
            isLoading: false,
        });

        

        render ( <MultipleCustomHooks/>);
        expect(screen.getByText('Pikachu')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        expect( nextButton.disabled).toBeFalsy();

     })

     test('Debe de llamar la funcion de incrementar', () => {

        
        useFetch.mockReturnValue( {
            data: {
                name: 'Pikachu',
                sprites: {
                    front_default: 'url_to_front_default_sprite',
                    front_shiny: 'url_to_front_shiny_sprite',
                    back_default: 'url_to_back_default_sprite',
                    back_shiny: 'url_to_back_shiny_sprite',
                },
            },
            hasError: null,
            isLoading: false,
        });

        

        render ( <MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button', {name:'Siguiente'});
        fireEvent.click( nextButton);

        expect(mockIncrement).toHaveBeenCalled();

     })

 });