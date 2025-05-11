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
                    <p>Masajista · Fisioterapeuta</p>
                </div>
                <div className="flip-card-back">
                    <p className="title">Acerca de mí</p>
                    <ul>
                        <li>✔️ Licenciado en Educación Física</li>
                        <li>✔️ Especializado en terapia física</li>
                        <li>✔️ Masajista terapéutico</li>
                        <li>✔️ Experiencia en recuperación muscular</li>
                        <li>✔️ Técnicas de relajación</li>
                        <li>✔️ Rehabilitación física personalizada</li>
                    </ul>
                    <p>
                        📞 8849-4151
                        <br />
                        📧 elbertguzman@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
