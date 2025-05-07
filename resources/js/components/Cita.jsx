import { useRef } from "react";
import "../../css/cita.css";
import MiniHero from "./MiniHeader";
import Modal from "./Modal";
import FormCita from "./FormCita";
import Footer from "./Footer";
Footer



export default function Cita() {
    const modalRef = useRef();

    const handleAction = (action) => {
        if (modalRef.current) {
            modalRef.current.showMessage(action); // Llamar a la función expuesta
        }
    };

    
    return (
        <>
            <MiniHero />

            <div className="citas">
                <div className="titulo__citas">
                    <h3>Reserva tu Experiencia de Masajes</h3>
                    <p>Descubre la serenidad en cada sesión</p>
                </div>
                <div>
                    <Modal ref={modalRef} />
                </div>
                <div className="container__cita">
                    <div className="cita__grid">
                        <div className="formulario">
                              <FormCita />
                            </div>
                    </div>
                    <div className="cita__grid row">                           
                        <div className="cita__grid__box img"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}