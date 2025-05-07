import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button, message, Popconfirm } from "antd";
import Delete from "../../icons/delete";
import Pencil from "../../icons/pencil";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Tab from "../components/Tab";

export default function Servicios() {
    const [nombre, setNombre] = useState("");
    const [duracion, setDuracion] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const queryClient = useQueryClient();

    // Función para obtener los servicios
    const fetchServicios = async () => {
        const response = await fetch("http://localhost:8000/api/servicios");
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        return response.json();
    };

    // React Query para obtener los servicios
    const { data, error, isLoading } = useQuery({
        queryKey: ["servicios"],
        queryFn: fetchServicios,
    });

    // Mutación para insertar un nuevo servicio
    const mutation = useMutation({
        mutationFn: async (nuevoServicio) => {
            const response = await fetch(
                "http://localhost:8000/api/servicios",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoServicio),
                }
            );

            if (!response.ok) {
                throw new Error("Error al insertar el servicio");
            }

            return response.json();
        },
        onSuccess: () => {
            // Refrescar la lista de servicios después de la inserción
            queryClient.invalidateQueries(["servicios"]);
            // Limpiar los campos
            setNombre("");
            setDuracion("");
            setDescripcion("");
        },
    });

    // Manejo del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple
        if (!nombre || !duracion || !descripcion) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Insertar servicio
        mutation.mutate({ nombre_servicio: nombre, duracion, descripcion });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/servicios/${id}`, {
                method: "DELETE",
            });
    
            if (!response.ok) {
                throw new Error("Error al eliminar el servicio");
            }
    
            message.success("Servicio eliminado con éxito");
    
            // Refrescar la tabla después de eliminar
            queryClient.invalidateQueries(["servicios"]);
        } catch (error) {
            message.error("No se pudo eliminar el servicio");
            console.error(error);
        }
    };
    

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const items = [
        {
            key: "1",
            label: "Gestión de Servicios",
            children: (
                <Table
                    data={data}
                    columns={[
                        "ID",
                        "Nombre",
                        "Duración",
                        "Descripción",
                        "Acción",
                    ]}
                    renderRow={(row, index) => (
                        <tr key={index}>
                            <td>{row.id_servicio}</td>
                            <td>{row.nombre_servicio}</td>
                            <td>{row.duracion}</td>
                            <td>{row.descripcion}</td>
                            <td className="btn_table">
                                <button
                                    className="btn_edit"
                                    onClick={() =>
                                        alert(
                                            `Editar Servicio: ${row.nombre_servicio}`
                                        )
                                    }
                                >
                                    <Pencil />
                                </button>
                                <Popconfirm
                                    title="Eliminar servicio"
                                    description="¿Estás seguro de eliminar este servicio?"
                                    onConfirm={() =>
                                        handleDelete(row.id_servicio)
                                    }
                                    onCancel={() => message.info("Cancelado")}
                                    okText="Sí"
                                    cancelText="No"
                                >
                                    <button className="btn_delete">
                                        <Delete />
                                    </button>
                                </Popconfirm>
                            </td>
                        </tr>
                    )}
                />
            ),
        },
        {
            key: "2",
            label: "Crear Servicio",
            children: (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre Servicio:</label>
                    <input
                        className="input"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa el nombre del servicio"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label htmlFor="duracion">Duración (Minutos):</label>
                    <input
                        className="input"
                        type="number"
                        id="duracion"
                        name="duracion"
                        placeholder="Ingresa la duración en minutos"
                        required
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                    />

                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        className="input"
                        id="descripcion"
                        name="descripcion"
                        placeholder="Ingresa la descripción del servicio"
                        required
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                    <button type="submit" className="boton--primario--admin">
                        {mutation.isLoading ? "Guardando..." : "Confirmar"}
                    </button>
                </form>
            ),
        },
    ];

    return (
        <>
            <Titulo titulo="Gestión Servicios" />
            <Tab items={items} />
        </>
    );
}
