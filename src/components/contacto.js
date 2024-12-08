import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Layout from "./layout";

const Contacto = () => {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', email: '', consulta: '' });
    const [showResult, setShowResult] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResult(true); // Mostrar los resultados y ocultar el formulario
    };

    return (
        <Layout>
            <div className="contact-page">
                <div className="contact-content">
                    <h2>Formulario de Contacto</h2>
                    <div className="contact-container">
                        <div className="contact-message">
                            <p>
                                ¿Tienes alguna duda sobre VFnotes, necesitas ayuda o simplemente
                                quieres sugerirnos algo? Rellena el siguiente formulario, a la
                                brevedad te responderemos.
                            </p>
                        </div>
                        <section className="contact-form">
                            {showResult ? (
                                // Mostrar solo los resultados cuando el formulario se envíe
                                <div className="resultado">
                                    <h2 className="titulo-respuesta">Resultado del Formulario de Contacto</h2>
                                    <div className="respuestas">
                                        <p className="respuesta"><strong>Nombre:</strong> {formData.nombre}</p>
                                        <p className="respuesta"><strong>Apellido:</strong> {formData.apellido}</p>
                                        <p className="respuesta"><strong>Email:</strong> {formData.email}</p>
                                        <p className="respuesta"><strong>Consulta:</strong> {formData.consulta}</p>
                                    </div>
                                </div>
                            ) : (
                                // Mostrar el formulario si no se ha enviado aún
                                <form onSubmit={handleSubmit}>
                                    <label>Nombre:
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                    <label>Apellido:
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                    <label>Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                    <label>Consulta:
                                        <textarea
                                            name="consulta"
                                            value={formData.consulta}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                    <button type="submit">Enviar</button>
                                </form>
                            )}
                        </section>
                    </div>
                    <div className="contact-message">
                        <p>
                            Estamos aquí para ayudarte con cualquier consulta o sugerencia que tengas.
                            ¡No dudes en contactarnos!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contacto;
