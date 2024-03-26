import { useEffect, useState } from "react"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
      username: 'strider',
      email: 'dan@google.com'

    });

    const { username, email } = formState;

    // Cambio de input
    /*const onInputChange = (event) => {
      console.log(event.target.name);
    }*/
    const onInputChange = ({target}) =>{
      const {name,value} = target;
      setFormState({     
        ...formState, //Mantener todos los valores del fomrulario
        [ name ]: value //Propiedades computadas de objetos 
      })
    }

    useEffect(()=>{
      console.log('useEffect called!');
    });


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username}
            onChange={onInputChange}
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="dan@google.com"
            name="email"
            value={ email }
            onChange={onInputChange}

        />  
    </>
  )
}
