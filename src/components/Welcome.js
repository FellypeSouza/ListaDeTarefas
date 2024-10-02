import "../styles/Welcome.scss";
import React, { useState } from "react";
import Nav from "./Nav";

export default function Welcome(props){

    return(
        <section>
            <Nav/>
            <section className="container">
                <header>
                    <h1>Seja bem-vindo(a)!</h1>
                    <h4>Esse projeto está sendo desenvolvido em ReactJS e React Router. Tem como objetivo colocar em prática
                        meus conhecimentos adquiridos em cursos realizados, tanto em Frontend como em Backend. Para visualizar o código fonte 
                        acesse meu <a href="https://github.com/FellypeSouza" target="_blank">Github</a>
                    </h4>
                    <button onClick={()=>{window.location.href="/mainpage"}}>Entrar</button> 
                </header>
            </section>
            
        </section>
    );
    
}