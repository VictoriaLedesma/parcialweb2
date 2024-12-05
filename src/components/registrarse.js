import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";

const Registrarse = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', password: '', confirmarPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Registrando usuario:", formData);
        // Después del registro exitoso, redirigir al usuario
        navigate('/');
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
                        <Link to="/contacto">Contacto</Link>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/login" className="auth-button">Iniciar Sesión</Link>
                        <Link to="/registrarse" className="auth-button active">Registrarse</Link>
                    </div>
                </nav>
            </header>

            <main>
                <div className="auth-page">
                    <div className="auth-content">
                        <h2>Registrarse</h2>
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input 
                                    type="text" 
                                    id="nombre" 
                                    name="nombre" 
                                    value={formData.nombre} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmarPassword">Confirmar Contraseña:</label>
                                <input 
                                    type="password" 
                                    id="confirmarPassword" 
                                    name="confirmarPassword" 
                                    value={formData.confirmarPassword} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <button type="submit" className="auth-submit">Registrarse</button>
                        </form>
                        <p className="auth-switch">
                            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </p>
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 VFnotes. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Registrarse;

