import "../../css/index.css";
import Carousel from "../components/Carousel";
import Card_Servicio from "../components/Card-Servicio";
import Footer from "../components/Footer";
import Testimonios from "../components/Testimonios";
import SocialSection from "../components/SocialSection";
import WhatsAppBtn from "../components/WhatSappBtn";


const servicios = [
    {
        imageUrl: {
            webp: "../images/fisioterapia.webp",
            jpg: "../images/deportivo.jpg",
        },
        title: "Masaje Deportivo",
        description:
            "Ideal para atletas y personas activas. Ayuda a la recuperación muscular y mejora la circulación.",
            link: "/citas",
    },
    {
        imageUrl: {
            webp: "../images/fisioterapia2.webp",
            jpg: "../images/relajante.jpg",
        },
        title: "Masaje Descontracturante",
        description:
            "Disfruta de una experiencia de relajación profunda con técnicas suaves y armoniosas. Perfecto para liberar tensiones acumuladas.",
            link: "/citas",

    },
    {
        imageUrl: {
            webp: "../images/fisioterapia3.webp",
            jpg: "../images/terapeutico.jpg",
        },
        title: "Masaje Terapéutico",
        description:
            "Especializado en aliviar dolores musculares y mejorar la movilidad.",
            link: "/citas",

    },
    {
        imageUrl: {
            webp: "../images/fisioterapia4.webp",
            jpg: "../images/deportivo.jpg",
        },
        title: "Descarga Muscular",
        description:
            "Un masaje profundo diseñado para liberar tensiones musculares acumuladas y mejorar el rendimiento físico.",
            link: "/citas",

    },
    {
        imageUrl: {
            webp: "../images/fisioterapia5.webp",
            jpg: "../images/relajante.jpg",
        },
        title: "Descarga Muscular Premium",
        description:
            "Una experiencia personalizada para atletas, enfocada en la recuperación muscular y la relajación total.",
            link: "/citas",

    },
    {
        imageUrl: {
            webp: "../images/fisioterapia6.webp",
            jpg: "../images/terapeutico.jpg",
        },
        title: "Masaje Terapéutico Avanzado",
        description:
            "Técnicas avanzadas para tratar dolores crónicos y mejorar la movilidad de manera efectiva.",
            link: "/citas",

    },
];

export default function Index() {
    return (
        <>
        <WhatsAppBtn/>
            <Carousel />
            <main className="main">
                <div className="titulo_section">
                    <h1 className="titulo-index ">Servicios</h1>
                    <h3 className="subtitulo">
                        Relájate con nuestros masajes exclusivos
                    </h3>
                </div>
                <section className="container_servicios">
                    {servicios.map((servicio, index) => (
                        <Card_Servicio
                            key={index}
                            imageUrl={servicio.imageUrl}
                            title={servicio.title}
                            description={servicio.description}
                            link={servicio.link}
                        />
                    ))}
                </section>
            </main>
            <section className="container_nosotros">
                <div className="grid_informacion">
                    <div className="informacion_texto">
                        <h2>En Egguz nos preocupamos por</h2>
                        <h2 className="no-font">Bienestar y Relajación</h2>
                        <p>
                            En nuestro spa, nos especializamos en ofrecer una
                            experiencia única de relajación y bienestar.
                            Nuestros masajes deportivos, terapéuticos y de
                            relajación están diseñados para aliviar el estrés y
                            mejorar tu salud. Contamos con un equipo de
                            profesionales altamente capacitados que te ayudarán
                            a revitalizar tu cuerpo y mente.
                        </p>
                        <p>
                            ¡Ven y descubre el equilibrio perfecto entre
                            tranquilidad y renovación con nosotros!
                        </p>
                        <a href="/nosotros" className="boton boton--secundario">
                            Saber más
                        </a>
                    </div>
                    <div className="informacion_imagen">
                        <img
                            src="../images/about-section.webp"
                            alt="Ambiente relajante del spa"
                        />
                    </div>
                </div>
            </section>

            <main className="main">
           
                <div className="titulo_section">
                    <h1 className="titulo-index ">Testimonios</h1>
                    <h3 className="subtitulo">Lo que dicen de Egguz Massage</h3>
                </div>
                <Testimonios />
            </main>

            <SocialSection />

            <Footer />
        </>
    );
}
