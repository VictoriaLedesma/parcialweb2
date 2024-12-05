import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";
const Contacto = () => {
    const [formData, setFormData] = useState({ nombre: '', apellido: '', email: '', consulta: '' });
    const navigate = useNavigate();
    const [showResult, setShowResult] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                        <a href="/">
                            <img src={logo} alt="vfnotes" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Acerca de</Link>
                        <Link to="/contacto" className="active">Contacto</Link>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/iniciar-sesion" className="auth-button">Iniciar Sesión</Link>
                        <Link to="/registrarse" className="auth-button">Registrarse</Link>
                    </div>
                </nav>
            </header>
            <main>
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
                                    <form onSubmit={handleSubmit}>
                                        {showResult && (
                                            <div className="resultado">
                                                <h2 className="titulo-respuesta">Resultado del Formulario de Contacto</h2>
                                                <div className="respuestas">
                                                    <p className="respuesta"><strong>Nombre:</strong> {formData.nombre}</p>
                                                    <p className="respuesta"><strong>Apellido:</strong> {formData.apellido}</p>
                                                    <p className="respuesta"><strong>Email:</strong> {formData.email}</p>
                                                    <p className="respuesta"><strong>Consulta:</strong> {formData.consulta}</p>
                                                </div>
                                            </div>
                                        )}
                                        <label>Nombre:
                                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                        </label>
                                        <label>Apellido:
                                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                                        </label>
                                        <label>Email:
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </label>
                                        <label>Consulta:
                                            <textarea name="consulta" value={formData.consulta} onChange={handleChange} required />
                                        </label>
                                        <button type="submit">Enviar</button>
                                    </form>
                                </div>
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
            </main>

            <footer>
                <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Contacto;
