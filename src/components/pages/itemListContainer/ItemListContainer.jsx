/* export function ItemListContainer(res){ //Exportar nombrado
    const {x, z} = res;
    return(
        <>
            <h1>Aca van los productos</h1>
            <h3>Hola {x}</h3>
            <h4>MI edad es {z}</h4>
        </>
    )
    
} */

import Counter from "../../common/counter/Counter";

export function ItemListContainer({nombre,edad}){ //Exportar nombrado
    return(
        <>
            <h1>Aca van los productos</h1>
            <h3>Hola {nombre}</h3>
            <h4>MI edad es {edad}</h4>
            <Counter/>
        </>
    )
    
}