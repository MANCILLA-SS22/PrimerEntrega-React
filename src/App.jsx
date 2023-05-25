import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/layout/navbar/Navbar';
import Section from './components/layout/section/Section';



let greeting = "Hola, bienvenido a mi pagina 💣"
function App() {
  return(
    <>
      <Navbar/>
      <Section x={greeting}/>
    </>
  )
}

export default App;


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