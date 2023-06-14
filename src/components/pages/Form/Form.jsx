import { useState } from "react";

function Form() {

    const [userData, setUserData] = useState({name: "",lastName:""}); //console.log(userData);

    function handleSubmit(evento){
        evento.preventDefault();
        //console.log(evento);

        if (!userData.lastName.includes("@") || userData.name.length < 3) {
            console.log("El campo no es vallido");
            return;
        }


        let data = {
            nombreUsuario: userData.name,
            apellidoUsuario: userData.lastName
        }
    console.log(data);
    }

    function handleChange(evento){
        setUserData({...userData, [evento.target.name]: evento.target.value})
    }


    return (
        <div>
            <h2>Este es el formlario</h2>
    
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre" name="name" onChange={handleChange}/>
                <input type="text" placeholder="Ingrese su apellido" name="lastName" onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form


/* 
import { useState } from "react";

function Form() {

    const [name, setName] = useState(""); //console.log(name);
    const [lastName, setLastName] = useState("");  //console.log(lastName);

    function handleSubmit(evento){
        evento.preventDefault();
        //console.log(evento);

        let data = {
            nombreUsuario: userData.name,
            apellidoUsuario: userData.lastName
        }
    console.log(data);
    }


    function handleName(evento){
        console.log(evento.target.name);
        setUserData({...userData, ["name"]: evento.target.value})
        //setName(evento.target.value);
    }

    function handleLastName(evento){
        console.log(evento.target.name);
        setUserData({...userData, ["lastname"]: evento.target.value})
        //setLastName(evento.target.value);
    }


    return (
        <div>
            <h2>Este es el formlario</h2>
    
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese su nombre" name="name" onChange={handleName}/>
                <input type="text" placeholder="Ingrese su apellido" name="lastName" onChange={handleLastName}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
} 

export default Form
*/
