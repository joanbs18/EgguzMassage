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
