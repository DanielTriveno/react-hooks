
import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from '../03-examples';
import { PokemonCard } from '../03-examples';

export const Layout = () => {

    const {counter, decrement, increment} = useCounter(1);//initialvalue
    const {data,hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  
    return (
    <>
        <h1>Informacion de Pokémon</h1>
        <hr/>

        {
        isLoading 
        ? <LoadingMessage/>
        : (
            <PokemonCard 
            id={counter} 
            name={data.name}
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
                
            ]}
            />
            )
        }

        <h2>{data?.name}</h2>

        <button 
            className='btn btn-primary mt-2' 
            onClick={ () => counter > 1 ? decrement() : null}
        >
            Anterior
        </button>
        <button className='btn btn-primary mt-2 ' onClick={()=> increment()}>
            Siguiente
        </button>

    </>
    )
}
/**
 * <pre>{JSON.stringify(data, null, 2)}</pre>
 */