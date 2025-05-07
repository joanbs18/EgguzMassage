import "../../css/card-servicios.css";

export default function Card_Servicio({ imageUrl, title, description, link }) {
    return (
        <article className="entrada">
            <div className="entrada__imagen">
                <picture>
                    <source loading="lazy" srcSet={imageUrl?.webp} type="image/webp" />
                    <img loading="lazy" src={imageUrl?.jpg} alt={title} />
                </picture>
            </div>

            <div className="entrada__contenido">
                <h4 className="no-margin">{title}</h4>
                <p>{description}</p>
                <a href={link} className="boton boton--primario">Reservar</a>
            </div>
        </article>
    );
}

