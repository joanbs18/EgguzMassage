import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";


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

  const [modal, contextHolder] = Modal.useModal();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.cita_proxima) return <p>No hay citas próximas.</p>;

  const { cita_cliente_nombre, fecha, hora,nombre_servicio,cita_cliente_email,cita_cliente_telefono,cita_descripcion } = data.cita_proxima;

  const mostrarDetalles = () => {
    modal.info({
        title: "Detalles de la cita",
        content: (
          <div>
            <p><strong>Nombre:</strong> {cita_cliente_nombre ?? "Sin nombre"}</p>
            <p><strong>Fecha:</strong> {fecha ?? "Sin fecha"}</p>
            <p><strong>Hora:</strong> {hora ?? "Sin hora"}</p>
            <p><strong>Servicio:</strong> {nombre_servicio ?? "Sin Servicio"}</p>
            <p><strong>Motivo:</strong> {cita_descripcion ?? "Sin descripción"}</p>
            <br />
            <p><strong>INFORMACIÓN DE CONTACTO</strong></p>
            <p><strong>Correo:</strong> {cita_cliente_email ?? "Sin correo"}</p>
            <p><strong>Teléfono:</strong> {cita_cliente_telefono ?? "Sin Teléfono"}</p>
          </div>
        ),
       
      });
      
  };

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
        <button className="card__button" onClick={mostrarDetalles}>
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
      </div>
      {/* El contextHolder debe ir en el mismo nivel del componente que lo usa */}
      {contextHolder}
    </div>
  );
}
