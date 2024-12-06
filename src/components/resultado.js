import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";
import '../App.css';
import Layout from "./layout";

const Resultado = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData;

    if (!formData) {
        return (
            <div>
                <p>No se encontraron datos. Redirigiendo al formulario...</p>
                <button onClick={() => navigate('/contacto')}>Ir al formulario de contacto</button>
            </div>
        );
    }

    return <Layout>
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
                        <div>
                            <h2>Formulario de Contacto</h2>
                            <form>
                                <label>Nombre:
                                    <input type="text" name="nombre" value={formData.nombre} disabled className="no-border" />
                                </label>
                                <label>Apellido:
                                    <input type="text" name="apellido" value={formData.apellido} disabled className="no-border" />
                                </label>
                                <label>Email:
                                    <input type="email" name="email" value={formData.email} disabled className="no-border" />
                                </label>
                                <label>Consulta:
                                    <textarea name="consulta" value={formData.consulta} disabled className="no-border" />
                                </label>
                                <button type="button" onClick={() => navigate('/contacto')}>Volver al formulario</button>
                            </form>
                        </div>
                        <div className="exito-mensaje">
                            <p className="exito-texto">Tu consulta fue enviada con éxito, a la brevedad nos vamos a estar contactando.</p>
                        </div>
                    </section>
                </div>
                <div className="contact-message">
                    <p>
                        Estamos acá para ayudarte con cualquier consulta o sugerencia que tengas.
                        ¡No dudes en contactarnos!
                    </p>
                </div>
            </div>
        </div>
    </Layout>
};

export default Resultado;