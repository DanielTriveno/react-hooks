import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iteratioNumber=100) => {
    for (let i = 0; i < iteratioNumber; i++){
        console.log('Ahí vamos'); 
    } 
    return `${ iteratioNumber } iteraciones realizadas`
}

export const MemoHook = () => {
    
    const {counter, increment} = useCounter (4000);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(()=> heavyStuff(counter), [counter])//Si y solo si las dependencias (counter) cambia
  
    return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr/>
        <h4>{memorizedValue}</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment()}//mandamos un argumento
        >
            +1
        </button>
        <button
            className="btn btn-outline-primary" //Valor boolean no se puede mostrar en pantalla  
            onClick={()=> setShow(!show)}//alternar true false
        >
            Show/Hide {JSON.stringify(show)}           
        </button>

    </>
  )
}
