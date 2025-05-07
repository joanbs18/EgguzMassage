import { useEffect } from "react";
import { notification } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AdminNotification() {
  const [api, contextHolder] = notification.useNotification();

  // Ejemplo de useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["adminWelcome"],
    queryFn: async () => {
      const response = await axios.get("https://egguzmassage.com/api/citas/proxima");
      return response.data;
    },
  });

  useEffect(() => {
    if (!isLoading && !error) {
      // Destructurar los datos de la próxima cita
      const cita = data?.cita_proxima;
      const mensaje = cita
        ? `Próxima cita de ${cita.cita_cliente_nombre} el ${cita.fecha} a las ${cita.hora}.`
        : "No hay citas próximas en el sistema.";

      api.open({
        message: "¡Bienvenido Elberth!",
        description: mensaje,
        duration: 5,
      });
    }
  }, [isLoading, error, data, api]);

  return <>{contextHolder}</>;
}
