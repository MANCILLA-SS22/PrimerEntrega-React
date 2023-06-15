import { useNavigate } from "react-router-dom"

function CartContainer() {

  const navigate = useNavigate()

  function realizarCompra() {
    console.log("se compraron los productos")
    // navegar
    navigate("/") //navigate() se usa cuando estamos en un JS. En cambio, <link></link> se usa para el html
  }

  return (
    <div>
        <h1>Aqui van los productos agregados al carrito</h1>
        <button onClick={realizarCompra}>Comprar</button>
    </div>
  )
}

export default CartContainer