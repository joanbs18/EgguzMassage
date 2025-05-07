

export default function Testimonios() {
    const testimonios = [
        {
            nombre: "Ana Rodríguez",
            comentario: "Una experiencia maravillosa. Salí completamente relajada y con energías renovadas.",
            imagen: "../images/persona.webp"
        },
        {
            nombre: "Carlos Méndez",
            comentario: "Los masajes deportivos son increíbles, ayudaron mucho con mi recuperación muscular.",
            imagen: "../images/persona.webp"
        },
        {
            nombre: "Sofía López",
            comentario: "El servicio es excelente, me sentí como en casa.",
            imagen: "../images/persona.webp"
        },
        {
            nombre: "Javier Torres",
            comentario: "Un lugar perfecto para desconectarse del estrés diario.",
            imagen: "../images/persona.webp"
        },
        {
            nombre: "Lucía Gómez",
            comentario: "El personal es muy amable y profesional, lo recomiendo totalmente.",
            imagen: "../images/persona.webp"
        },
        {
            nombre: "Pedro Ramírez",
            comentario: "Definitivamente el mejor spa que he visitado, volveré pronto.",
            imagen: "../images/persona.webp"
        }
    ];

    return (
        <section className="testimonios">
            <div className="testimonios_container">
                {testimonios.map((testimonio, index) => (
                    <div key={index} className="testimonio_card">
                        <div className="testimonio_imagen">
                            <img src={testimonio.imagen} alt={testimonio.nombre} loading="lazy" />
                        </div>
                        <div className="testimonio_texto">
                            <p className="testimonio_comentario">"{testimonio.comentario}"</p>
                            <h4 className="testimonio_nombre">- {testimonio.nombre}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
