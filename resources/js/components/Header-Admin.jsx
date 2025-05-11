import "../../css/headerAdmin.css";
import { Popconfirm, message } from "antd";

export default function HeaderAdmin({ toggleSidebar }) {
    const handleCheckboxChange = (e) => {
        toggleSidebar(); // Cambia el estado en Admin
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("https://egguzmassage.com/api/logout", { method: "POST" });
            if (response.ok) {
                message.success("Sesión cerrada con éxito");
                // Redirige o refresca
                window.location.href = "/login"; // o la ruta que uses
            } else {
                message.error("Error al cerrar sesión");
            }
        } catch (error) {
            console.error("Error:", error);
            message.error("No se pudo cerrar la sesión");
        }
    };

    const cancelLogout = () => {
        message.info("Cancelaste la salida");
    };

    return (
        <header className="header">
            <div className="header__sidebar">
                <label className="hamburger">
                    <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        className="nav_checkbox"
                    />
                    <svg viewBox="0 0 32 32">
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        ></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
                <img
                    className="logo"
                    src="/images/Elberthlogomini.webp"
                    alt="Logo egguz"
                />
            </div>
            <div className="info__header__user">
                Elberth Guzmán{" "}
                <Popconfirm
                    title="¿Deseas salir del sistema?"
                    onConfirm={handleLogout}
                    onCancel={cancelLogout}
                    okText="Sí"
                    cancelText="No"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        color={"#3c3c3d"}
                        fill={"none"}
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905"
                            stroke="#3c3c3d"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>
                        <path
                            d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                            stroke="#3c3c3d"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Popconfirm>
            </div>
        </header>
    );
}
