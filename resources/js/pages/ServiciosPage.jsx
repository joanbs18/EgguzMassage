import React from "react";
import Footer from "../components/Footer";
import "../../css/servicios.css";
import Card_Servicio from "../components/Card-Servicio";


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
      title: "Masaje Relajante",
      description:
          "Disfruta de una experiencia de relajación profunda con técnicas suaves y armoniosas.",
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
      title: "Masaje Deportivo",
      description:
          "Ideal para atletas y personas activas. Ayuda a la recuperación muscular y mejora la circulación.",
          link: "/citas",
  },
  {
      imageUrl: {
          webp: "../images/fisioterapia5.webp",
          jpg: "../images/relajante.jpg",
      },
      title: "Masaje Relajante",
      description:
          "Disfruta de una experiencia de relajación profunda con técnicas suaves y armoniosas.",
          link: "/citas",
  },
  {
      imageUrl: {
          webp: "../images/fisioterapia6.webp",
          jpg: "../images/terapeutico.jpg",
      },
      title: "Masaje Terapéutico",
      description:
          "Especializado en aliviar dolores musculares y mejorar la movilidad.",
          link: "/citas",
  },
];

const ServiciosPage = () => {
    return (
        <>
            <section className="hero-Servicios">
                <div className="titulo_section">
                    <h1 className="titulo">Nuestros Servicios</h1>
                    <p className="subtitulo-section">
                        Descubre nuestra amplia gama de servicios diseñados para
                        tu bienestar. Desde masajes relajantes hasta terapias
                        especializadas, estamos aquí para brindarte una
                        experiencia única y revitalizante.
                    </p>
                </div>
            </section>

            <main className="main">
                <div className="titulo_section">
                    <h3 className="subtitulo center">
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

            <Footer/>
        </>
    );
};

export default ServiciosPage;
