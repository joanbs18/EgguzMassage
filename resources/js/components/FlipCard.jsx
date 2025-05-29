import "../../css/flipCard.css";

export default function FlipCard() {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src="images/Elberth Logo-blanco.webp"
                        alt="Logo de Elberth"
                        width={95}
                        height={80}
                    />
                    <h1 className="title">Elberth Guzmán</h1>
                    <p>Masajista · Físico Terapeuta</p>
                </div>
                <div className="flip-card-back">
                    <p className="title" style={{fontSize: "2.5rem"}}>Acerca de mí</p>
                    <ul style={{ listStyleType: "none", fontSize: "2.5rem" }}>
                        <li>° Licenciado en Educación Física</li>
                        <li>° Masajista terapéutico</li>
                        <li>° Experiencia en recuperación muscular</li>
                        <li>° Técnicas de relajación</li>
                        <li>° Rehabilitación física personalizada</li>
                    </ul>
                    <p style={{ fontSize: "2.5rem" }}>
                        <br />
                        +506 8849-4151
                        <br />
                         elberth@egguzmassage.com
                    </p>
                </div>
            </div>
        </div>
    );
}
