import React from "react";

import React from "react";

const Inicio = () => {
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
                        <a href="inicio.html" className="active">Inicio</a>
                        <a href="nosotros.html">Acerca de</a>
                        <a href="contacto.html">Contacto</a>
                    </div>
                </nav>
            </header>

            <main>
                <h1>MIS NOTAS:</h1>
                <div className="buttons">
                    <button id="agregarBtn">Agregar ➕</button>
                    <button id="eliminarBtn">Eliminar 🗑️</button>
                    <button id="resetBtn">Eliminar todo ❌</button>
                </div>

                <div className="notas-contenedor" id="notasContenedor">
                    {/* Las notas se van a agregar aquí */}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Inicio;
