import { useState } from "react";


/* function Counter(){
    const [contador, setContador] = useState (0);
    
    function sumar(){
        setContador(contador + 1)
    }
    return ( 
        <div>
            <h2>{contador}</h2>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
} */

/* function Counter(){
    const [contador, setContador] = useState (0);
    
    return ( 
        <div>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </div>
    )
} */

function Counter(){
    const [contador, setContador] = useState (0);
    return ( 
        <div>
            <h2>{contador}</h2>
            <button onClick={ ()=> setContador(contador + 1)}>Sumar</button>
            <button onClick={()=> setContador(contador - 1)}>Resart</button>
        </div>
    )
}


/* function Counter(){
    function saludar (name){
        console.log("Hola "+ name);
    }
    
    return ( 
        <div>
            <button onClick={ ()=> {saludar("Karla")} }>Saludar</button>
        </div>
    )
} */

export default Counter