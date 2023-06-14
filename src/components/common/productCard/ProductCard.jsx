// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import "./productCard.css"

function ProductCard({evento}){
    return (
        
        <>
            <div className="main">
                <ul className="cards">
                    <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img className="ss" src={evento.img}/></div>
                        <div className="card_content">
                            <h1>{evento.title}</h1>
                        <p className="card_text">{evento.description}</p>
                        <Link to={`/itemDetail/${evento.id}`}>  <button>Ver detalles</button>  </Link>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductCard