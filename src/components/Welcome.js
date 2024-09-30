import "../styles/Welcome.scss";
import React, { useState } from "react";
import Nav from "./Nav";
import MainPage from "../pages/MainPage";

export default function Welcome(props){

    const [userName, setUserName] = useState("");

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }

    return(
        <section>
            <Nav/>
            <section className="container">
                <header>
                    <h1>Seja bem-vindo(a)!</h1>
                    <input type="text" id="inputName" value={userName} onChange={handleInputChange} placeholder="Insira seu nome"/>
                    <button onClick={()=>{window.location.href="/mainpage"}}>Entrar</button>
                    {/* <p>Nome inserido: {userName}</p> */}
                </header>
            </section>
        </section>
    );
    
}