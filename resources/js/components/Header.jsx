import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para asegurar que se ejecute una vez al cargar

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header
                className={`header ${isAtTop ? "header--top" : ""} ${
                    menuOpen ? "header--menu-open" : ""
                }`}
            >
                {" "}
                <div className="header__superior">
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"#fff"}
                            fill={"none"}
                        >
                            <path
                                d="M16 6.5C15.9377 4.78752 15.7251 3.75009 14.9988 3.02513C13.9718 2 12.3188 2 9.01289 2C5.70698 2 4.05403 2 3.02701 3.02513C2 4.05025 2 5.70017 2 9V15C2 18.2998 2 19.9497 3.02701 20.9749C4.05403 22 5.70698 22 9.01289 22C12.3188 22 13.9718 22 14.9988 20.9749C15.7251 20.2499 15.9377 19.2125 16 17.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M8 19H10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 11.9908L16 11.9998M20.0483 16.4912C21.2541 15.3396 22 13.7486 22 11.9912C22 10.2339 21.2541 8.64286 20.0483 7.49121M18 9.74121C18.6029 10.317 18.9759 11.1125 18.9759 11.9912C18.9759 12.8699 18.6029 13.6654 18 14.2412"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6 2L6.089 2.53402C6.28188 3.69129 6.37832 4.26993 6.77519 4.62204C7.18918 4.98934 7.77614 5 9 5C10.2239 5 10.8108 4.98934 11.2248 4.62204C11.6217 4.26993 11.7181 3.69129 11.911 2.53402L12 2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                        +506 8849 4151{" "}
                    </p>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={16}
                            height={16}
                            color={"#fff"}
                            fill={"none"}
                        >
                            <path
                                d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                        elberth@egguzmassage.com
                    </p>
                </div>
                <nav className="nav">
                    <img
                        src={
                            !isAtTop || menuOpen
                                ? "images/Elberth Logo.webp"
                                : "images/Elberth Logo-blanco.webp"
                        }
                        alt="Logo Egguz"
                        className="logo"
                    />

                    <div
                        className={`nav__link ${
                            menuOpen ? "nav__link--open" : ""
                        } ${isAtTop ? "nav__link--top" : ""}`}
                    >
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/servicios">Servicios</Link>
                        {/* <Link to="/ofertas">Ofertas</Link> */}
                        <Link to="/contacto">Contacto</Link>
                    </div>

                    <Link to="/citas">
                        <button
                            className={`nav__btn ${isAtTop ? "btn--top" : ""}`}
                        >
                            Reservar
                        </button>
                    </Link>

                    <label className="hamburger">
                        <input
                            onClick={toggleMenu}
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
                </nav>
            </header>
        </>
    );
}
