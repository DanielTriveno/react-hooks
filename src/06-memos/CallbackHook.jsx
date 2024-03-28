import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        setCounter ( (value) => value +1);// Mandamos un callback
      },
      [],
    )// Esto no cambia porque siempre apunta al mismo lugar de memoria
    

    //const incrementFather = () => {
    //    setCounter ( counter + 1 );
    //}
    
  return (
    <>
        <h1>useCallbackHook: {counter} </h1>
        <hr/>
        <ShowIncrement increment={incrementFather}/>

    </>
  )
}

