import { useQuery } from '@tanstack/react-query';

const PrivateRoute = ({ children }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['checkAuth'],
        queryFn: async () => {
            const res = await fetch("http://localhost:8000/api/check-auth", {
                credentials: "include",
            });
            if (!res.ok) {
                throw new Error("Error en la respuesta de autenticación");
            }
            return res.json();
        },
    });

    if (isLoading) return <div>Cargando...</div>; // o un spinner bonito
    if (error) return <div>Error al verificar autenticación: {error.message}</div>;

    return data?.authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
