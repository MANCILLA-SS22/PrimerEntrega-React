import CartContainer from "../components/pages/cart/CartContainer"
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer"

export const MenuRoutes = [
    {
        id: "home",
        path:"/",
        Element: ItemListContainer 
    },
    {
        id: "categories",
        path:"/category/:categoryName",
        Element: ItemListContainer 
    },
    {
        id: "itemDetail",
        path:"/itemDetail/:num_id",
        Element: ProductDetailContainer 
    },
    {
        id: "guns",
        path:"/guns",
        Element: CartContainer
    },
    {
        id: "carrito",
        path:"/carrito",
        Element: CartContainer
    }
];
