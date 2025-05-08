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
                message.error(
                    "Error al iniciar sesión: " +
                        (data.message || "Credenciales incorrectas")
                );
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
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={20}
                            height={20}
                            
                            fill={"none"}
                        >
                            <path
                                d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 15.49V15.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 15.49V15.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 15.49V15.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
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

                {/* <div className="flex-row">
                    <span className="span">Forgot password?</span>
                </div> */}

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
