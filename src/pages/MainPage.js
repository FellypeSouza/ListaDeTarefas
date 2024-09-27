import React from "react";
import Welcome from "../components/Welcome";

export default function MainPage(userName){
    return(
        <Welcome userName={userName}/>
    );
}