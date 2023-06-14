import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css"

function ItemList ( {Items} ){
  return (
    <div className="card-container">
      {Items.map((evento) => {
          return <ProductCard key={evento.id} evento={evento}/>;
        })}
    </div>
  )
}

export default ItemList