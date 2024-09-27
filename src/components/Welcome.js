import "../styles/Welcome.scss";
import React, { useState } from "react";

export default function Welcome(props){

    const [userName, setUserName] = useState("");

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }

    return(
        <section className="container">
            <header>
                <h1>Seja bem-vindo(a)!</h1>
                <h3>Para começar insira seu nome</h3>
                <input type="text" id="inputName" value={userName} onChange={handleInputChange}/>
                <button onClick={()=>{window.location.href="/mainpage"}}>Entrar</button>
                <p>Nome inserido: {userName}</p>
            </header>
        </section>
    );
    
}