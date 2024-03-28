import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    
    const {counter, increment} = useCounter (10);
    const [show, setShow] = useState(true);
  
    return (
    <>
        <h1>Counter: <Small value={counter}/></h1>
        <hr/>

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
