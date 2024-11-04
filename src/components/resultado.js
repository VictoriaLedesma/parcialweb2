import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const Resultado = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData;

    // Si no hay datos, redirige de vuelta al formulario
    if (!formData) {
        return (
            <div>
                <p>No se encontraron datos. Redirigiendo al formulario...</p>
                <button onClick={() => navigate('/contacto')}>Ir al formulario de contacto</button>
            </div>
        );
    }

    return (
        <div className="formulario">
            <h2 className="titulo-respuesta">Resultado del Formulario de Contacto</h2>
            <div style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #333',
                margin: '10px auto',
            }}></div>
            <div className="respuestas">
                <p className="respuesta"><strong>Nombre:</strong> {formData.nombre}</p>
                <p className="respuesta"><strong>Apellido:</strong> {formData.apellido}</p>
                <p className="respuesta"><strong>Email:</strong> {formData.email}</p>
                <p className="respuesta"><strong>Consulta:</strong> {formData.consulta}</p>
            </div>
            <button className="boton-respuesta" onClick={() => navigate('/contacto')}>Volver al formulario</button>
        </div>
    );
};

export default Resultado;
