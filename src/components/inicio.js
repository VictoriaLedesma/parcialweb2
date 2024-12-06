import React, { useRef, useState } from "react";
import Layout from "./layout";

const Inicio = () => {
    
    const notasContenedorRef = useRef(null);
    const [notas, setNotas] = useState(JSON.parse(localStorage.getItem("notas")) || []);
    const [notaSeleccionada, setNotaSeleccionada] = useState(null);



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

 

    return <Layout>
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
    </Layout>
};

export default Inicio;
