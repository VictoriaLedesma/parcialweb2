import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/vfnotes-logo.png";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión con:", formData);
        // Después de la autenticación exitosa, redirigir al usuario
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
                        <Link to="/iniciar-sesion" className="auth-button active">Iniciar Sesión</Link>
                        <Link to="/registrarse" className="auth-button">Registrarse</Link>
                    </div>
                </nav>
            </header>

            <main>
                <div className="auth-page">
                    <div className="auth-content">
                        <h2>Iniciar Sesión</h2>
                        <form onSubmit={handleSubmit} className="auth-form">
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
                            <button type="submit" className="auth-submit">Iniciar Sesión</button>
                        </form>
                        <p className="auth-switch">
                            ¿No tienes una cuenta? <Link to="/registrarse">Regístrate aquí</Link>
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

export default Login;

