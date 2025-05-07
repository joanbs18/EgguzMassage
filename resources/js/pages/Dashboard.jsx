import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import Card_Cita from "../components/Card-Cita";
import Titulo from "../components/Titulo";

const fetchCitasMensuales = async () => {
    const response = await fetch("http://localhost:8000/api/citas/mensuales");
    if (!response.ok) throw new Error("Error al obtener citas mensuales");
    return response.json();
};

const fetchCitasCount = async () => {
    const response = await fetch("http://localhost:8000/api/citas/count");
    if (!response.ok) throw new Error("Error al obtener citas");
    return response.json();
};

const fetchClientesCount = async () => {
    const response = await fetch("http://localhost:8000/api/citas/clientes");
    if (!response.ok) throw new Error("Error al obtener clientes");
    return response.json();
};
const fetchClienteNombre = async () => {
    const response = await fetch("http://localhost:8000/api/citas/cliente-mas-citas");
    if (!response.ok) throw new Error("Error al obtener clientes");
    return response.json();
};

export default function Dashboard() {
    const { data: citasData, error: errorCitasMensuales } = useQuery({
        queryKey: ["citasMensuales"],
        queryFn: fetchCitasMensuales,
    });

    const { data: citasCount, error: errorCitas } = useQuery({
        queryKey: ["citasCount"],
        queryFn: fetchCitasCount,
    });

    const { data: clientesCount, error: errorClientes } = useQuery({
        queryKey: ["clientesCount"],
        queryFn: fetchClientesCount,
    });
    const { data: nombreCliente, error: errorNCliente } = useQuery({
        queryKey: ["clienteNombre"],
        queryFn: fetchClienteNombre,
    });

    const calcularCambioPorcentual = (actual, anterior) => {
        if (!anterior || anterior === 0) return "N/A";
        const cambio = ((actual - anterior) / anterior) * 100;
        return `${cambio.toFixed(2)}%`;
    };

    const cambioCitas = citasData
        ? calcularCambioPorcentual(
              citasData.citas_mes_actual,
              citasData.citas_mes_anterior
          )
        : "N/A";

    return (
        <>
            <Titulo titulo="Dashboard" />
            <div className="admin__citas">
                <Card
                    titulo="Cantidad de Citas"
                    cantidad={citasCount?.total_citas || 0}
                    descripcion={`Cambio: ${cambioCitas}`}
                />
                <Card titulo="Cantidad de Clientes" cantidad={clientesCount?.total_clientes || 0} />
                <Card titulo="Cliente Frecuente" cantidad={nombreCliente?.cliente_nombre || "No hay clientes"} descripcion={`Total citas: ${nombreCliente?.total_citas || 0}`}/>
                <Card_Cita />
            </div>
        </>
    );
}
