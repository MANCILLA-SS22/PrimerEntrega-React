import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

function ItemListContainer(){

    const [items, setItems] = useState([]); //console.log(items);

    const {categoryName} = useParams(); console.log(categoryName);
    
    useEffect(() => {
        let productosFiltrados = products.filter( (producto) => {
            return producto.category === categoryName;
        }); //console.log(productosFiltrados);

        const tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltrados : products);
            }, 1000);
        });

        // Metodo 1: async-await
        async function getData(){
            try {
                let res = await tarea;
                setItems(res);
            }catch (err) {
                console.log(err);
            }
        }
        getData()

    }, [categoryName]); 

    return <ItemList Items={items}/>;
}

export default ItemListContainer






/* // Metodo 2: .then() y .catch()
        tarea
            .then((res) => {setItems(res)})
            .catch((err) => {setItems(err)}) */

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

/* import Counter from "../../common/counter/Counter";

export function ItemListContainer({nombre,edad}){ //Exportar nombrado
    return(
        <>
            <h1>Aca van los productos</h1>
            <h3>Hola {nombre}</h3>
            <h4>MI edad es {edad}</h4>
            <Counter/>
        </>
    )
    
} */