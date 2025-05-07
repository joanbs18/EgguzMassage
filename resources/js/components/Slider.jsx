import { useState, useEffect } from "react";
import "../../css/slider.css";

const imagenes = [
    "images/massage-3795692_1280.webp",
    "images/massage.webp",
    "images/physio-1778029_1920.webp"
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000); // cambia cada 4 segundos

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="slider">
            <img
                src={imagenes[index]}
                alt={`Slide ${index}`}
                className="slider-img"
            />
        </div>
    );
};

export default Slider;
