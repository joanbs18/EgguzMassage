import React, { useState, useEffect } from "react";

export default function Horas({
    horasDisponibles = [],
    resetHoraSeleccionada,
}) {
    const [horaSeleccionada, setHoraSeleccionada] = useState("");

    const seleccionarHora = (hora) => {
        setHoraSeleccionada(hora); 
        if (resetHoraSeleccionada) {
            resetHoraSeleccionada(hora); 
        }
    };

    useEffect(() => {
        if (resetHoraSeleccionada) {
            resetHoraSeleccionada(""); // Resetear el valor al cargar el componente
        }
    }, [resetHoraSeleccionada]);

    return (
        <>
            <div className="horas">
                {horasDisponibles.length > 0 ? (
                    <div className="bloques-horas">
                        {horasDisponibles.map((hora, index) => (
                            <div
                                key={index}
                                className={`hora disponible ${
                                    hora === horaSeleccionada
                                        ? "seleccionada"
                                        : ""
                                }`}
                                onClick={() => seleccionarHora(hora)} // Al hacer click, se selecciona la hora
                            >
                                {hora}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="sin-horas">
                        No hay horas disponibles para la fecha elegida.
                    </p>
                )}
            </div>

            {/* Mostrar la hora seleccionada solo si hay horas disponibles */}
            {horasDisponibles.length > 0 && horaSeleccionada && (
                <p className="hora-elegida">
                    Hora seleccionada: {horaSeleccionada}
                </p>
            )}
        </>
    );
}
