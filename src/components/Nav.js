import "../styles/Nav.scss";

export default function Nav(props){
    return(
        <nav>
            <section className="Logo">
                Lista de Tarefas
            </section>
            <section className="navLinks">
                <a href="/">início</a>
                <a href="/">Sobre</a>
            </section>
        </nav>
    );
}