import React, { useRef, useState } from "react";
import Layout from "./layout";
import { Toaster, toast } from 'sonner'

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
        const toastId = toast((t) => (
            <div>
                <p>¿Estás seguro de que deseas resetear todas las notas? Esta acción no se puede deshacer.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button onClick={() => {
                        localStorage.removeItem("notas");
                        setNotas([]);
                        toast.success("Todas las notas han sido eliminadas");
                        toast.dismiss(toastId);
                    }}>
                        Confirmar
                    </button>
                    <button onClick={() => toast.dismiss(toastId)}>
                        Cancelar
                    </button>
                </div>
            </div>
        ), {
            duration: Infinity,
        });
    };

    const handleSeleccionarNota = (index) => {
        setNotaSeleccionada(index);
    };

    const handleEliminarNota = () => {
        if (notaSeleccionada !== null) {
            const toastId = toast((t) => (
                <div>
                    <p>¿Seguro que desea eliminar esta nota?</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <button onClick={() => {
                            const nuevasNotas = notas.filter((_, idx) => idx !== notaSeleccionada);
                            guardarNotas(nuevasNotas);
                            setNotaSeleccionada(null);
                            toast.success("Nota eliminada con éxito");
                            toast.dismiss(toastId);
                        }}>
                            Confirmar
                        </button>
                        <button onClick={() => toast.dismiss(toastId)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            ), {
                duration: Infinity,
            });
        } else {
            toast.error("Por favor, seleccione una nota para eliminar.");
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
        <Toaster richColors />
    </Layout>
};

export default Inicio;

