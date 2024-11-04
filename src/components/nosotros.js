import React from "react";

const Nosotros = () => {
    return (
        <main>
            <section className="about-page">
                <div className="about-content">
                    <h1 className="h1-nosotros">Nosotros</h1>
                    <div className="about-columns">
                        <div className="about-column">
                            <h2 className="h2-nosotros">¿Quiénes somos?</h2>
                            <p>VFnotes es una plataforma desarrollada para facilitar la toma de notas de manera rápida, simple y eficiente. Nuestro objetivo es proporcionar una herramienta amigable y accesible para estudiantes, profesionales y cualquier persona que necesite organizar sus ideas, tareas o proyectos.</p>
                        </div>

                        <div className="about-column">
                            <h2 className="h2-nosotros">Nuestra Misión</h2>
                            <p>Nuestra misión es hacer que la organización y gestión de notas sea sencilla, moderna y siempre disponible. VFnotes permite a los usuarios tomar notas desde cualquier dispositivo, y almacenarlas de manera segura en la nube para que nunca se pierdan.</p>
                        </div>

                        <div className="about-column">
                            <h2 className="h2-nosotros">Equipo</h2>
                            <p>Detrás de VFnotes hay un equipo comprometido de desarrolladores, diseñadores y expertos en productividad, dedicados a mejorar continuamente la plataforma y ofrecer la mejor experiencia de usuario posible.</p>
                        </div>
                    </div>

                    <div className="team-container">
                        <div className="team-member card">
                            <img src="img/fede.png" alt="Federico Reiz" />
                            <h3>Federico Reiz</h3>
                        </div>
                        <div className="team-member card">
                            <img src="img/vickyfoto.jpeg" alt="Victoria Ledesma" />
                            <h3>Victoria Ledesma</h3>
                        </div>
                    </div>

                    <h2 className="h2-nosotros">Contáctanos</h2>
                    <p>Si quieres saber más sobre nosotros, nuestros proyectos o simplemente tienes alguna duda o sugerencia, no dudes en <a href="contacto.html">contactarnos</a>!</p>
                </div>
            </section>
        </main>
    );
};

export default Nosotros;

