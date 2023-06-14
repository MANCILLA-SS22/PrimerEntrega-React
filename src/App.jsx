import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from './components/layout/navbar/Navbar';
// import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
// import ProductDetailContainer from './components/pages/productDetail/ProductDetailContainer';
// import CartContainer from './components/pages/cart/CartContainer';
// import Form from './components/pages/Form/Form';
import Layout from './components/layout/Layout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {MenuRoutes} from "./routes/MenuRoutes"
//import Users from './components/Users';
//import Comments from './components/Comments';
//import Posts from './components/Posts';
//import Fetching from './components/pages/fetching/Fetching';
//import FetchingDeDatosContainer from './components/pages/fetchingDeDatos/FetchingDeDatosContainer';
//import { ItemCount } from './components/itemCount';


function App() {
  return(

    <BrowserRouter>
      <Routes>

        <Route element={<Layout/>}>

          {
            MenuRoutes.map( ({id, path, Element}) => {
              return <Route key={id} path={path} element={<Element/>}/>
            })
          }

        </Route>

        <Route path='*' element={<h1>404 not found</h1>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;


/* import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from './components/layout/navbar/Navbar';
// import Section from './components/layout/section/Section';
// import Footer from './components/layout/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuRoutes } from './routes/MenuRoutes';
import Layout from './components/layout/Layout';


// let greeting = "Hola, bienvenido a mi pagina 💣"
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          {
            MenuRoutes.map( ({id, path, Element}) => (<Route key={id} path={path} element={<Element/>}/>))
          }
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App; */


/* //Seccion correspondiente al after class
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Login} from './components/pages/login/Login';
import GridComponent from './components/common/gridComponent/GridComponent';

function App() {

  return(
    <div>
      <Login/>
      <GridComponent/>
    </div>
  )
}

export default App; */