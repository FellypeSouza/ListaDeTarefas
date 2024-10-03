import React, { useState } from "react";
import "../styles/MainContent.scss";

export default function MainContent(props){

    const [tasks, setTasks] = useState(null);

    if (tasks == null) {
        setTasks("Nenhuma tarefa adicionada");
    }

    return(
        <section>
            <section className="tasks">
                <h1>{tasks}</h1>
            </section>
        </section>
    );
}
