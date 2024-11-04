import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from "react";

const Contacto = () => {
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
                            <form action="#" method="post">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" required />

                                <label htmlFor="apellido">Apellido:</label>
                                <input type="text" id="apellido" name="apellido" required />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />

                                <label htmlFor="consulta">Consulta:</label>
                                <textarea id="consulta" name="consulta" rows="4" required></textarea>

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
