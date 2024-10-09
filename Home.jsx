import React from "react"; 
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <div className="home-section">
            <header className="header">
                <div className="logo">
                    <h1>Help Pet</h1>
                </div>
                <nav className="navbar">
                    <a href="#home"><strong>Home</strong></a>
                    <a href="#about">Sobre nós</a>
                    <a href="#services">Serviços</a>
                </nav>
                <button className="cta-button" onClick={handleLoginClick}>ENTRAR</button>
            </header>

            <div className="welcome-section">
                <h2>Bem-vindo ao Help Pet!</h2>
                <p>
                    Junte-se a nós na missão de ajudar animais necessitados.
                    Explore nossos serviços e faça parte da mudança!
                </p>
            </div>
        </div>
    );
}

export default Home;
