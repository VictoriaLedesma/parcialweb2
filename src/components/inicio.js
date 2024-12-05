import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";

const Inicio = () => {
    const notasContenedorRef = useRef(null);
    const [notas, setNotas] = useState(JSON.parse(localStorage.getItem("notas")) || []);
    const [notaSeleccionada, setNotaSeleccionada] = useState(null);

    const cargarNotas = () => {
        setNotas(JSON.parse(localStorage.getItem("notas")) || []);
    };

    const agregarFila = (texto = "") => {
        setNotas((prevNotas) => [...prevNotas, texto]);
    };

    const guardarNotas = (nuevasNotas) => {
        localStorage.setItem("notas", JSON.stringify(nuevasNotas));
        setNotas(nuevasNotas);
    };

    const handleAgregarNota = () => {
        agregarFila();
    };

    const handleReset = () => {
        const confirmReset = window.confirm(
            "¿Estás seguro de que deseas resetear todas las notas? Esta acción no se puede deshacer."
        );
        if (confirmReset) {
            localStorage.clear();
            setNotas([]);
        }
    };

    const handleSeleccionarNota = (index) => {
        setNotaSeleccionada(index);
    };

    const handleEliminarNota = () => {
        if (notaSeleccionada !== null) {
            const confirmEliminar = window.confirm("¿Seguro que desea eliminar esta nota?");
            if (confirmEliminar) {
                const nuevasNotas = notas.filter((_, idx) => idx !== notaSeleccionada);
                guardarNotas(nuevasNotas);
                setNotaSeleccionada(null);
            }
        } else {
            alert("Por favor, seleccione una nota para eliminar.");
        }
    };

    return (
        <>
            <header>
                <nav>
                    <div className="nav-logo">
                        <a href="/">
                            <img src={logo} alt="vfnotes" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <Link to="/" className="active">Inicio</Link>
                        <Link to="/nosotros">Acerca de</Link>
                        <Link to="/contacto">Contacto</Link>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/login" className="auth-button">Iniciar Sesión</Link>
                        <Link to="/registrarse" className="auth-button">Registrarse</Link>
                    </div>
                </nav>
            </header>

            <main>
                <h1>MIS NOTAS:</h1>
                <div className="buttons">
                    <button onClick={handleAgregarNota}>Agregar ➕</button>
                    <button onClick={handleEliminarNota}>Eliminar 🗑️</button>
                    <button onClick={handleReset}>Eliminar todo ❌</button>
                </div>

                <div className="notas-contenedor" ref={notasContenedorRef}>
                    {notas.map((texto, index) => (
                        <div
                            key={`nota-contenedor-${index}`}
                            className={`note-cell ${notaSeleccionada === index ? "selected" : ""}`}
                            onClick={() => handleSeleccionarNota(index)}
                        >
                            <textarea
                                className="note"
                                placeholder="Nueva nota..."
                                value={texto}
                                onChange={(e) => {
                                    const nuevasNotas = [...notas];
                                    nuevasNotas[index] = e.target.value;
                                    guardarNotas(nuevasNotas);
                                }}
                            />
                        </div>
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Inicio;

