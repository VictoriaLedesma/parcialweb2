import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        consulta: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/resultado', { state: { formData } });
    };

    return (
        <>
            <header>
                <nav>
                    <div className="nav-logo">
                        <a href="inicio.html">
                            <img src="img/vfnotes-logo.png" alt="vfnotes" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <a href="inicio.html">Inicio</a>
                        <a href="nosotros.html">Acerca de</a>
                        <a href="contacto.html" className="active">Contacto</a>
                    </div>
                </nav>
            </header>

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
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

                                <label htmlFor="apellido">Apellido:</label>
                                <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleInputChange} required />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

                                <label htmlFor="consulta">Consulta:</label>
                                <textarea id="consulta" name="consulta" rows="4" value={formData.consulta} onChange={handleInputChange} required></textarea>

                                <button type="submit">Enviar</button>
                            </form>
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

            <footer>
                <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Contacto;
