import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Button, message, Popconfirm, Modal } from "antd";
import Delete from "../../icons/delete";
import Pencil from "../../icons/pencil";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Tab from "../components/Tab";

export default function Servicios() {
    const [nombre, setNombre] = useState("");
    const [duracion, setDuracion] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const [editingId, setEditingId] = useState(null); // ID del servicio que se está editando
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla la visibilidad del modal

    const queryClient = useQueryClient();

    // Función para obtener los servicios
    const fetchServicios = async () => {
        const response = await fetch("https://egguzmassage.com/api/servicios");
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
                "https://egguzmassage.com/api/servicios",
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
            queryClient.invalidateQueries(["servicios"]);
            setNombre("");
            setDuracion("");
            setDescripcion("");
        },
    });

    // Manejo del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !duracion || !descripcion) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const servicioData = {
            nombre_servicio: nombre,
            duracion,
            descripcion,
        };

        try {
            if (editingId) {
                // ACTUALIZACIÓN (PUT)
                const response = await fetch(
                    `https://egguzmassage.com/api/servicios/${editingId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(servicioData),
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al actualizar el servicio");
                }

                message.success("Servicio actualizado con éxito");
            } else {
                // CREACIÓN (POST)
                const response = await fetch(
                    "https://egguzmassage.com/api/servicios",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(servicioData),
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al insertar el servicio");
                }

                message.success("Servicio creado con éxito");
            }

            // Limpiar campos y estados
            setNombre("");
            setDuracion("");
            setDescripcion("");
            setEditingId(null);
          

            // Refrescar datos
            queryClient.invalidateQueries(["servicios"]);
            setIsModalOpen(false);
        } catch (err) {
            message.error(err.message || "Ocurrió un error");
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `https://egguzmassage.com/api/servicios/${id}`,
                {
                    method: "DELETE",
                }
            );

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

    const openModalToEdit = (row) => {
        setNombre(row.nombre_servicio);
        setDuracion(row.duracion);
        setDescripcion(row.descripcion);
        setEditingId(row.id_servicio);
        setIsModalOpen(true); 
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
                                    onClick={() => openModalToEdit(row)}
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

            <Modal
                title={editingId ? "Actualizar Servicio" : "Crear Servicio"}
                open={isModalOpen}
                onOk={handleSubmit}
                onCancel={() => setIsModalOpen(false)}
                okText={mutation.isLoading ? "Guardando..." : "Confirmar"}
                cancelText="Cancelar"
                okButtonProps={{
                    className: "btn-confirmar"
                }}
                cancelButtonProps={{
                    className: "btn-cancelar"
                }}
            >
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
                </form>
            </Modal>
        </>
    );
}
