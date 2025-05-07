import { useQuery } from "@tanstack/react-query";
import Delete from "../../icons/delete";
import Pencil from "../../icons/pencil";
import Table from "../components/Table";
import Titulo from "../components/Titulo";

export default function Clientes() {
    const fetchClientes = async () => {
        const response = await fetch("http://localhost:8000/api/citas/cliente-unicos");


        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        return response.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["clientes"],
        queryFn: fetchClientes,
    });

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Titulo titulo="Gestión Clientes" />
            <Table
                data={data}
                columns={[
                    "Cedula",
                    "Nombre",
                    "Telefono",
                    "Correo",
                    "Cantidad Citas",
                ]}
                renderRow={(row, index) => (
                    <tr key={index}>
                        <td>{row.cliente_cedula}</td>
                        <td>{row.cliente_nombre}</td>
                        <td>{row.cliente_telefono}</td>
                        <td>{row.cliente_email}</td>
                        <td>{row.cantidad_citas}</td>
                        {/* <td className="btn_table">
                            <button
                                className="btn_edit"
                                onClick={() =>
                                    alert(`Editar Cita: ${row.nombre}`)
                                }
                            >
                                <Pencil />
                            </button>
                            <button
                                className="btn_delete"
                                onClick={() =>
                                    alert(`Borrar Cita: ${row.nombre}`)
                                }
                            >
                                <Delete />
                            </button>
                        </td> */}
                    </tr>
                )}
            />
        </>
    );
}
