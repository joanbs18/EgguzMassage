import { useState } from "react";
import "../../css/contacto.css";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [captcha, setCaptcha] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://egguzmassage.com/api/contacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ nombre, numero, mensaje, captcha }),

        });

        if (response.ok) {
            alert("Mensaje enviado con éxito");
            setNombre("");
            setNumero("");
            setMensaje("");
        } else {
            alert("Ocurrió un error al enviar el mensaje");
        }
    };

    return (
        <>
            <section className="hero-contacto">
                <div className="titulo_section">
                    <h1 className="titulo">Contáctanos</h1>
                </div>
            </section>
          
            <section className="contacto">
                <div className="contacto__container">
                    <div className="box-contacto">
                        <h2 className="contacto__titulo">
                            Relájate con Nosotros
                        </h2>
                        <p className="contacto__subtitulo">
                            ¿Buscas un momento de relajación y bienestar?
                        </p>
                        <p className="contacto__texto">
                            Contáctanos para disfrutar de nuestros masajes
                            personalizados.
                            <br />
                            <br />
                            Nuestro equipo de expertos está aquí para ofrecerte
                            una experiencia única.
                          
                        </p>
                        <br />
                        <p className="contacto__subtitulo">
                            Información de Contacto
                        </p>
<br />
                        <p className="icons-contact">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            color={"#3c3c3d"}
                            fill={"none"}
                        >
                            <path
                                d="M16 6.5C15.9377 4.78752 15.7251 3.75009 14.9988 3.02513C13.9718 2 12.3188 2 9.01289 2C5.70698 2 4.05403 2 3.02701 3.02513C2 4.05025 2 5.70017 2 9V15C2 18.2998 2 19.9497 3.02701 20.9749C4.05403 22 5.70698 22 9.01289 22C12.3188 22 13.9718 22 14.9988 20.9749C15.7251 20.2499 15.9377 19.2125 16 17.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M8 19H10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 11.9908L16 11.9998M20.0483 16.4912C21.2541 15.3396 22 13.7486 22 11.9912C22 10.2339 21.2541 8.64286 20.0483 7.49121M18 9.74121C18.6029 10.317 18.9759 11.1125 18.9759 11.9912C18.9759 12.8699 18.6029 13.6654 18 14.2412"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6 2L6.089 2.53402C6.28188 3.69129 6.37832 4.26993 6.77519 4.62204C7.18918 4.98934 7.77614 5 9 5C10.2239 5 10.8108 4.98934 11.2248 4.62204C11.6217 4.26993 11.7181 3.69129 11.911 2.53402L12 2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                        +506 8849 4151{" "}
                    </p>
                    <p className="icons-contact">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            color={"#3c3c3d"}
                            fill={"none"}
                        >
                            <path
                                d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                        elberth@egguzmassage.com
                    </p>
                    
                    </div>

                    <form
                        className="contacto__formulario"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            className="input"
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingresa tu nombre completo"
                            required
                        />
                        <label htmlFor="numero">Número de Teléfono:</label>
                        <input
                            className="input"
                            type="text"
                            name="numero"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            placeholder="Ingresa tu número de teléfono"
                            required
                        />
                        <textarea
                            className="input"
                            placeholder="Mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                        ></textarea>
                        <ReCAPTCHA style={{ margin: "auto" }}
                            sitekey="6Ld26jErAAAAAO6URmH91Fb1U1YVnwTHSqRjzqg0"
                            onChange={(value) => setCaptcha(value)}
                        />

                        <button type="submit" className="boton--primario">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>

            <section className="maps">{/* Tu iframe sigue igual */}</section>

            <Footer />
        </>
    );
};

export default Contact;
