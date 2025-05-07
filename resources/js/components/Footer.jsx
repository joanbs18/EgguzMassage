import { Link } from "react-router-dom";
import "../../css/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_info">
                    <h3>Egguz Massage</h3>
                    <p>
                        Relájate y renueva tu energía con nuestros masajes exclusivos.
                    </p>
                </div>

                <div className="footer_links">
                    <h4>Enlaces</h4>
                    <ul>
                        <li>
                            <Link to="/servicios">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer_social">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31387.985561154193!2d-84.99210496529818!3d10.461336291301814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9ff8c0c0eb6849%3A0x3fb8283bfa1fdc03!2sProvincia%20de%20Guanacaste%2C%20Tilar%C3%A1n!5e0!3m2!1ses!2scr!4v1745727995171!5m2!1ses!2scr"
                        width="100%"
                        height="auto"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <hr />
            <p>
                &copy; {new Date().getFullYear()} Egguz Massage - Desarrollado por{" "}
                <a href="#">Shircode</a> {/* Aquí podrías también usar <Link> si quieres */}
            </p>
        </footer>
    );
}
