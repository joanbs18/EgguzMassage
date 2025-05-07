import "../../css/contacto.css";
import Footer from "../components/Footer";


const Contact = () => {
    return (
        <>
            <section className="hero-contacto">
                <div className="titulo_section">
                    <h1 className="titulo">Contacto</h1>
                </div>
            </section>
            <section className="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31387.985561154193!2d-84.99210496529818!3d10.461336291301814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9ff8c0c0eb6849%3A0x3fb8283bfa1fdc03!2sProvincia%20de%20Guanacaste%2C%20Tilar%C3%A1n!5e0!3m2!1ses!2scr!4v1745727995171!5m2!1ses!2scr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
