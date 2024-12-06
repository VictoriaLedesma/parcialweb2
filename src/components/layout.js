import { Fragment } from "react";
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";

function Layout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { hash, pathname, search } = location;
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null && pathname === "/") {
            navigate("/login");
        } else if (token !== null && (pathname === "/login" || pathname === "/registrarse")) {
            navigate("/");
            setIsAuthenticated(true);
        }

        setIsAuthenticated(!!token);

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    const links = [
        { to: "/", label: "Inicio" },
        { to: "/nosotros", label: "Acerca de" },
        { to: "/contacto", label: "Contacto" },
    ];

    return <>
        <header>
            <nav>
                <div className="nav-logo">
                    <a href="/">
                        <img src={logo} alt="vfnotes" />
                    </a>
                </div>
                <div className="nav-links">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className={location.pathname === link.to ? "active" : ""}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="auth-buttons">
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="auth-button">Cerrar Sesión</button>
                    ) : (
                        <>
                            <Link to="/login" className="auth-button active">Iniciar Sesión</Link>
                            <Link to="/registrarse" className="auth-button">Registrarse</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
        </footer>
    </>
}

export default Layout;