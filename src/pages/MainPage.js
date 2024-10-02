import React, { useState } from "react";
import Nav from "../components/Nav";
import MainContent from "../components/MainContent";

export default function MainPage(props){
    
    
    return(
        <section>
            <Nav/>
            <section>
                <MainContent/>
            </section>
        </section>
    );
}