//Elemento padre
import { ItemCount } from "../itemCount/ItemCount"
import "./ProductDetail.css";
import "../itemCount/ItemCount.css"
function ProductDetail({productSelected}){  //console.log(productSelected);

  function onAdd( cantidad ){
      let data ={
        ...productSelected,
        quantity: cantidad
      }
      
      console.log(data);
  }

  return (
    <>
        <h1 style={{fontSize:"40px"}} className="text-dark pt-4">{productSelected.title}</h1>
        <div className="container text-center">

          <div className="tarjeta row row-cols-2 text-light p-4 m-5 mt-4">
            <div className="col align-self-center">
              <img className="ind" src={productSelected.img} alt="" />
            </div>
  
            <div className="col align-self-center">
              {
                productSelected.stock > 0 ? (<ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} style={{color:"white"}}/>) : (<h3>No hay nada</h3>)
              }
            </div>
            <div className="col mt-5 align-self-start">
              <p style={{fontSize:"20px"}} className="text-start text-light">{productSelected.completeDescription}</p>
            </div>
            <div className="col d-flex flex-row">
              
              <div className="container text-center">
                <div className="col">
                  <div className="row">
                    <img className="logo" src="https://cdn7.bigcommerce.com/s-1kqh9qmybo/product_images/uploaded_images/freeshipping2.png" alt=""/>
                  </div>
                  <div className="col">
                    <h6>{productSelected.rate}<span>(2 reviews)</span> <span>Write a review</span></h6>
                  </div>
                  <div className="col">
                    <span> ${productSelected.priceBefore}</span> - ${productSelected.priceNow} <span> </span>
                    <p>(You save ${(productSelected.priceBefore - productSelected.priceNow).toFixed(2)}) </p>
                  </div>
                  <div className="col">
                    <h6>{productSelected.credit}</h6>
                  </div>
                  <div className="col">
                    <h6>{productSelected.stockDetail}</h6>
                  </div>
                  <div className="col">
                    <h6>{productSelected.shipping}</h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h6>SKU: </h6>
                    <h6>BRAND: </h6>
                    <h6>Manufacturer Number: </h6>
                    <h6>Caliber: </h6>
                    <h6>Model: </h6>
                    <h6>Rounds: </h6>
                    <h6>Unit of Measure: </h6>
                    <h6>Classification: </h6>
                    <h6>Interests: </h6>
                  </div>

                  <div className="col">
                    <h6>{productSelected.sku}</h6>
                    <h6>{productSelected.brand}</h6>
                    <h6>{productSelected.manufacturerNumber}</h6>
                    <h6>{productSelected.caliber}</h6>
                    <h6>{productSelected.title}</h6>
                    <h6>{productSelected.rounds}</h6>
                    <h6>{productSelected.unitofMeasure}</h6>
                    <h6>{productSelected.classification}</h6>
                    <h6>{productSelected.interests}</h6>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>


    </>
  )
}

export default ProductDetail


/* 

/* <>
      <div>
        <h2 style={{color:"white"}}>{productSelected.title}</h2>
        <img className="ind" src={productSelected.img} alt="" />
      </div>
      {
        productSelected.stock > 0 ? (<ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} style={{color:"white"}}/>) : (<h3>No hay nada</h3>)
      }
    </>
 */