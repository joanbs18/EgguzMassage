import { useQuery } from "@tanstack/react-query";

const fetchProximaCita = async () => {
    const response = await fetch("https://egguzmassage.com/api/citas/proxima");

    if (!response.ok) {
        throw new Error("Error al obtener la cita");
    }
    return response.json();
};

export default function Card_Cita() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["proximaCita"],
        queryFn: fetchProximaCita,
    });

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.cita_proxima) return <p>No hay citas próximas.</p>;

    const { cita_cliente_nombre, fecha, hora } = data.cita_proxima;

    return (
        <div className="card card__full">
            <div className="card__background">
                <div className="card__title">
                    <h4>Próxima cita</h4>
                </div>
                <h5 className="card__query">{cita_cliente_nombre ?? "Sin nombre"}</h5>
                <p className="card__description">
                    {fecha ?? "Sin fecha"}, {hora ?? "Sin hora"}
                </p>
                <a href="#">
                    <button className="card__button">
                        Ver detalles
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="25"
                            height="25"
                            fill="none"
                            style={{ color: "#fff" }}
                        >
                            <path
                                d="M20.0001 11.9998L4.00012 11.9998"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
}
