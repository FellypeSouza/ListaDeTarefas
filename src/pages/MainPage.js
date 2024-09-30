import React from "react";
import Welcome from "../components/Welcome";

export default function MainPage({userName}, props){
    return(
        <section>
            <h1 userName={userName}>Hello {userName}</h1>
        </section>
    );
}