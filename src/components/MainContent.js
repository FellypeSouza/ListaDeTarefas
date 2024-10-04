import React, { useState } from "react";
import "../styles/MainContent.scss";
import addIcon from "../images/addIcon.png";
import emptyIcon from "../images/emptyIcon.png";

export default function MainContent(props){

    const [tasks, setTasks] = useState(null);

    if (tasks == null) {
        setTasks("Nenhuma tarefa adicionada");
    }

    return(
        <section>
            <section className="tasks">
                <section className="emptyTasks">
                    <img src={emptyIcon} width={50} height={50} alt="Vazio"/>
                    <h1>{tasks}</h1>
                </section>
                <section className="tasksBtn">
                    <button id="addBtn">Adicionar Tarefa</button>
                    <button id="delBtn">Excluir Tarefa</button>
                </section>
            </section>
        </section>
    );
}
