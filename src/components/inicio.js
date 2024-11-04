import React, { useEffect, useRef, useState } from "react";

const Inicio = () => {
    const notasContenedorRef = useRef(null);
    const [notas, setNotas] = useState(JSON.parse(localStorage.getItem("notas")) || []);
    const [notaSeleccionada, setNotaSeleccionada] = useState(null);

    useEffect(() => {
        cargarNotas();
    }, []);

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
                            <img src="./img/vfnotes-logo.png" alt="vfnotes" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <a href="/" className="active">Inicio</a>
                        <a href="/nosotros.js">Acerca de</a>
                        <a href="/contacto.js">Contacto</a>
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
                            key={index}
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
