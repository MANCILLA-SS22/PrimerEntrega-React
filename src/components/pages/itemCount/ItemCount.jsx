//Elemento hijo
import { useCount } from "../../hooks/useCount";

export function ItemCount({stock, initial, onAdd}) { 
//                                                                1      5
    const {count, decrement, increment, /* reset */} = useCount(initial,stock, 1)

    return (
        <>
            <div className="count--container">
                <button className="sum_res" onClick={decrement}>-</button>
                <span className="cantidad">{count}</span>
                <button className="sum_res" onClick={increment}>+</button>
            </div>
            <button type="button" className="btn btn-light mt-4" onClick={() => onAdd(count)}>Agregar al carrito</button>
            {/* <button style={{display:"block", justifyContent:"center"}} onClick={reset}><h1>Reset</h1></button> */}
        </>
    )
}

