
import React from "react";
import "./Login.css"; // Você pode criar um CSS separado para o Login se necessário

function Login() {
    return (
        <div className="login-section">
            <h3>Login</h3>
            <form>
                <input
                    type="text"
                    placeholder="Nome de usuário ou email"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
