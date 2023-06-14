// Elemento padre
import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

function ProductDetailContainer(){
    const [productSelected, setProductSelected] = useState({});

    //PARTE 2. Con useParams recuperamos el lo contenido en itemDetail/2. Es decir, el numero 2, que es la parte dinamica. Para despues, desplegar la nueva pagina con los 
    //detalles del calzado seleccionado. num_id debe ser el mismo nombre de la ruta en la linea 23 en App.js porque es el nombre del parametro dinamico en el mismo.
    const { num_id } = useParams();
    console.log(num_id);

    useEffect(() => {

        let productFind = products.find((evento) => {
            return evento.id === Number(num_id)
        });

        const getProduct = new Promise((res, /* err */) => {
            return res(productFind);
        })

        getProduct
        .then((res) => {setProductSelected(res)})
        .catch((err) => {console.log("Error: ", err);});
    }, [num_id]);
    
    //console.log(productSelected);

    return (
        <ProductDetail productSelected={productSelected}/>
    )
}

export default ProductDetailContainer