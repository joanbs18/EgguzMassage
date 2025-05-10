import { useState, useRef } from "react";
import Calendario from "./Calendario";
import CustomSelect from "./CustomSelect";
import Horas from "./Horas";
import "../../css/formCita.css";
import { message } from "antd";

const FormCita = () => {
    const modalRef = useRef(null);
    const [cedula, setCedula] = useState("");
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [correo, setCorreo] = useState("");
    const [servicio, setServicio] = useState(""); // Cambié especialidad a servicio
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [horaSeleccionada, setHoraSeleccionada] = useState("");
    const [horas, setHoras] = useState([]);

    const obtenerDiaSemana = async (date) => {
        const fechaUTC = new Date(
            Date.UTC(
                new Date(date).getUTCFullYear(),
                new Date(date).getUTCMonth(),
                new Date(date).getUTCDate()
            )
        );
        const diasDeLaSemana = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ];
        const nombreDelDia = diasDeLaSemana[fechaUTC.getUTCDay()];
        const formattedDate = fechaUTC.toISOString().split("T")[0];
        setFechaSeleccionada(formattedDate);
        await horasDisponibles(formattedDate, nombreDelDia);
    };

    const horasDisponibles = async (fecha, dia) => {
        try {
            const response = await fetch(
                `https://egguzmassage.com/api/disponibilidad/horas-horario/${fecha}/${dia}`
            );
            if (!response.ok) {
                throw new Error("Error al obtener las horas disponibles");
            }
            const data = await response.json();
            setHoras(data.horas_disponibles);
        } catch (error) {
            console.error("Error fetching available hours:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !cedula ||
            !nombre ||
            !telefono ||
            !correo ||
            !servicio ||
            !fechaSeleccionada ||
            !horaSeleccionada
        ) {
            message.error("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await fetch("https://egguzmassage.com/api/citas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_cita: "",
                    cliente_cedula: cedula,
                    cliente_nombre: nombre,
                    cliente_telefono: telefono,
                    cliente_email: correo,
                    id_servicio: servicio,
                    descripcion: descripcion,
                    fecha: fechaSeleccionada,
                    hora: horaSeleccionada,
                    estado: 1,
                }),
            });

            if (response.ok) {
                message.success("¡Cita creada exitosamente!");
                setCedula("");
                setNombre("");
                setTelefono("");
                setCorreo("");
                setServicio("");
                setFechaSeleccionada(null);
                setHoraSeleccionada("");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                const errorData = await response.json(); // Captura el mensaje del backend
                console.error("Error del servidor:", errorData);
                if (errorData.message) {
                    console.error("Error:", errorData.message);
                    message.error(errorData.message);
                } else {
                    message.error("Error al crear la cita");
                }
            }
        } catch (error) {
            message.error("Error al conectar con el servidor");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="cedula">
            Cedula: <span style={{ color: 'red' }}>*</span>
        </label>
        <input
            className="input"
            type="number"
            id="cedula"
            name="cedula"
            placeholder="Ingresa tu numero de identificación"
            required
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
        />
    
        <label htmlFor="nombre">
            Nombre Completo: <span style={{ color: 'red' }}>*</span>
        </label>
        <input
            className="input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
    
        <label htmlFor="telefono">
            Teléfono: <span style={{ color: 'red' }}>*</span>
        </label>
        <input
            className="input"
            type="number"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu teléfono"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
        />
    
        <label htmlFor="correo">
            Correo Electrónico: <span style={{ color: 'red' }}>*</span>
        </label>
        <input
            className="input"
            type="email"
            id="correo"
            name="correo"
            placeholder="ejemplo@correo.com"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
        />
    
        <label htmlFor="select">
            Servicio: <span style={{ color: 'red' }}>*</span>
        </label>
        <CustomSelect
            apiUrl="https://egguzmassage.com/api/servicios"
            valueKey="id_servicio"
            labelKey="nombre_servicio"
            value={servicio}
            onChange={setServicio}
        />
    
        <label htmlFor="descripcion">
            Descripción: 
        </label>
        <textarea
            className="input"
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Explica brevemente el motivo de la cita"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
        />
    
        <label htmlFor="fecha">
            Fecha: <span style={{ color: 'red' }}>*</span>
        </label>
        <Calendario
            onDateSelect={(date) => obtenerDiaSemana(date)}
            setHoras={setHoras}
        />
    
        <label htmlFor="Horas">
            Horas Disponibles: <span style={{ color: 'red' }}>*</span>
        </label>
        <Horas
            horasDisponibles={horas}
            resetHoraSeleccionada={setHoraSeleccionada}
        />
    
        <button type="submit" className="btn__cita">
            Confirmar
        </button>
    </form>
    
    );
};

export default FormCita;
