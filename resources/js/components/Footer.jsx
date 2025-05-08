import { Link } from "react-router-dom";
import "../../css/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_info">
                    <h3>Egguz Massage</h3>
                    <p>
                        Relájate y renueva tu energía con nuestros masajes
                        exclusivos.
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
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3923.415429490859!2d-84.9706383249625!3d10.467880189662775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI4JzA0LjQiTiA4NMKwNTgnMDUuMCJX!5e0!3m2!1ses!2scr!4v1746656692017!5m2!1ses!2scr"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <hr />
            <p>
                &copy; {new Date().getFullYear()} Egguz Massage - Desarrollado
                por <a href="#">Shircode</a>{" "}
                {/* Aquí podrías también usar <Link> si quieres */}
            </p>
        </footer>
    );
}
