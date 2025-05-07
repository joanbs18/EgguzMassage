import React, { useState } from "react";
import "../../css/login.css";
import { message } from "antd"; // Importa el componente de mensaje de Ant Design

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://egguzmassage.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Muestra un mensaje de éxito al iniciar sesión correctamente
                message.success("Inicio de sesión exitoso.");
                window.location.href = "/admin";
            } else {
                // Muestra un mensaje de error si las credenciales son incorrectas
                message.error("Error al iniciar sesión: " + (data.message || "Credenciales incorrectas"));
                console.log("Error:", data);
            }
        } catch (error) {
            // Muestra un mensaje de error si ocurre un error de red
            console.error("Error de red:", error);
            message.error("Error de red. Revisa la consola.");
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <img src="images/Elberth Logo.webp" alt="Logo eggz" />
                <div className="flex-column">
                    <label>Email</label>
                    <div className="inputForm">
                        <svg
                            height="20"
                            viewBox="0 0 32 32"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Layer_3" data-name="Layer 3">
                                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                            </g>
                        </svg>
                        <input
                            type="email"
                            className="input-login"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex-column">
                    <label>Password</label>
                    <div className="inputForm">
                        <svg
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-64 0 512 512"
                        >
                            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        </svg>
                        <input
                            type="password"
                            className="input-login"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex-row">
                    <span className="span">Forgot password?</span>
                </div>

                <button type="submit" className="button-submit">
                   Iniciar sesión
                </button>

                <p className="p">
                    Don't have an account? <span className="span">Sign Up</span>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
