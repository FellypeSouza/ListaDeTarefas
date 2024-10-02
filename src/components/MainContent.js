import React from "react";
import "../styles/MainContent.scss";

export default function MainContent(props){
    return(
        <section>
            <section className="inputNameBackGround">
                <section className="inputNameContainer">
                    <section className="inputs">
                        <input type="text" placeholder="Insira seu nome"></input>
                        <input type="number" placeholder="Insira sua idade" min={0} max={99}></input>
                        <button>Entrar</button>
                    </section>
                </section>
            </section>
        </section>
    );
}
