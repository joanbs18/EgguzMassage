import { useQuery,useQueryClient  } from "@tanstack/react-query";
import { useState } from "react";
import Tab from "../components/Tab";
import Pencil from "../../icons/pencil";
import Delete from "../../icons/delete";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import FormCita from "../components/FormCita";
import { Popconfirm, message } from 'antd';


export default function GestionCitas() {
    const [searchTerm, setSearchTerm] = useState("");
    const queryClient = useQueryClient();

    const fetchCitas = async () => {
        const response = await fetch("https://egguzmassage.com/api/citas");
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        return response.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["citas"],
        queryFn: fetchCitas,
    });

    const fetchCitasHoy = async () => {
        const response = await fetch("https://egguzmassage.com/api/citas/hoy");
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }

        return response.json();
    };

    const { citasHoy, errorCitasHoy, isLoadingCitasHoy } = useQuery({
        queryKey: ["citasHoy"],
        queryFn: fetchCitasHoy,
    });


    const handleDelete = async (idCita) => {
        try {
            const response = await fetch(`https://egguzmassage.com/api/citas/${idCita}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error("Error al eliminar la cita");
            }

            message.success("Cita eliminada correctamente");
            await queryClient.invalidateQueries(["citas"]);
        } catch (error) {
            console.error("Error:", error);
            message.error("No se pudo eliminar la cita");
        }
    };

    // Filtrar citas según el término de búsqueda
    const filteredData =
        data?.filter(
            (row) =>
                row.cliente_nombre
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                row.fecha.includes(searchTerm) ||
                row.hora.includes(searchTerm)
        ) || [];

    const items = [
        {
            key: "1",
            label: "Gestión de citas",
            children: (
                <>
                    <input 
                        type="text"
                        placeholder="Buscar cita..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                       style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
                    />
                    <Table
                        data={filteredData}
                        columns={[
                            "Cliente",
                            "Servicio",
                            "Motivo",
                            "Fecha",
                            "Hora",
                            "Correo",
                            "Teléfono",
                            "Estado",
                            "Acción",
                        ]}
                        renderRow={(row, index) => (
                            <tr key={index}>
                                <td>{row.cliente_nombre}</td>
                                <td>{row.servicio.nombre_servicio}</td>
                                <td>{row.descripcion}</td>
                                <td>{row.fecha}</td>
                                <td>{row.hora}</td>
                                <td>{row.cliente_email}</td>
                                <td>{row.cliente_telefono}</td>
                                <td>
                                    {row.estado === 1 ? "Activa" : "Cancelada"}
                                </td>
                                <td className="btn_table">
                                    {/* <button
                                        className="btn_edit"
                                        onClick={() =>
                                            alert(
                                                `Editar Cita: ${row.cliente_nombre}`
                                            )
                                        }
                                    >
                                        <Pencil />
                                    </button> */}
                                    <Popconfirm
                                        title="¿Eliminar cita?"
                                        description="¿Está seguro que desea eliminar esta cita?"
                                        onConfirm={() =>
                                            handleDelete(row.id_cita)
                                        }
                                        onCancel={() =>
                                            message.info("Cancelado")
                                        }
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
                </>
            ),
        },
        {
            key: "2",
            label: "Crear cita",
            children: <FormCita />,
        },
        {
            key: "3",
            label: "Citas para Hoy",
            children: (
              <>
                {isLoadingCitasHoy ? (
                  <p>Cargando citas de hoy...</p>
                ) : errorCitasHoy ? (
                  <p>Error al cargar las citas de hoy</p>
                ) : Array.isArray(citasHoy) && citasHoy.length === 0 ? (
                  <p>No hay citas programadas para hoy.</p>
                ) : (
                  <Table
                    data={citasHoy}
                    columns={[
                      "Cliente",
                      "Servicio",
                      "Fecha",
                      "Hora",
                      "Correo",
                      "Teléfono",
                      "Estado",
                      "Acción",
                    ]}
                    renderRow={(row, index) => (
                      <tr key={index}>
                        <td>{row.cliente_nombre}</td>
                        <td>{row.servicio.nombre_servicio}</td>
                        <td>{row.fecha}</td>
                        <td>{row.hora}</td>
                        <td>{row.cliente_email}</td>
                        <td>{row.cliente_telefono}</td>
                        <td>{row.estado === 1 ? "Activa" : "Cancelada"}</td>
                        <td className="btn_table">
                          <button
                            className="btn_edit"
                            onClick={() =>
                              alert(`Editar Cita: ${row.cliente_nombre}`)
                            }
                          >
                            <Pencil />
                          </button>
                          <Popconfirm
                            title="¿Eliminar cita?"
                            description="¿Está seguro que desea eliminar esta cita?"
                            onConfirm={() => handleDelete(row.id_cita)}
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
                )}
              </>
            ),
          },
          
    ];

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Titulo titulo="Gestión Citas" />
            <Tab items={items} />
        </>
    );
}
