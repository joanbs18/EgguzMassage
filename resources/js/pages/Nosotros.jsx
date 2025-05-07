import Footer from "../components/Footer";
import "../../css/nosotros.css";
import FlipCard from "../components/FlipCard";
import Slider from "../components/Slider";

const Nosotros = () => {
    return (
        <>
            <section className="hero-nosotros">
                <div className="titulo_section">
                    <h1 className="titulo">Nosotros</h1>
                    <p className="subtitulo-section">
                        Bienvenido a nuestro centro de masajes, donde la
                        relajación y el bienestar son nuestra prioridad. Nuestro
                        equipo de terapeutas altamente capacitados está aquí
                        para ayudarte a sentirte mejor.
                    </p>
                </div>
            </section>

            {/* <Slider /> */}

            <section className="sobre-mi">
                <div className="titulo_section">
                    <h4 className="mini-titulo center">
                        Tu bienestar, nuestra misión
                    </h4>
                    <h2 className="titulo center">Sobre mí</h2>
                    <p className="subtitulo-section">
                        Soy un apasionado de la terapia de masajes y el
                        bienestar. Con años de experiencia en el campo, he
                        dedicado mi vida a ayudar a las personas a encontrar
                        alivio y relajación a través de mis manos. Mi enfoque se
                        basa en la atención personalizada y la comprensión de
                        las necesidades individuales de cada cliente.
                    </p>
                </div>
                <div className="sobremi-grid">
                    <div className="box-sobremi">
                        <img className="img-sobremi" src="/images/image.webp" alt="Foto del elberth" />
                    </div>
                    <div className="box-sobremi">
                        <FlipCard />
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    );
};

export default Nosotros;
