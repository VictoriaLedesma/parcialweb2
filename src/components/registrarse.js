import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner';
import logo from "../img/vfnotes-logo.png";
import Layout from "./layout";

const Registrarse = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', password: '', confirmarPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmarPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            if (response.ok) {
                toast.success("Usuario registrado exitosamente");
                navigate("/login");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error al registrar:", error);
            toast.error("Error de red o del servidor");
        }
    };

    return <Layout>
        <Toaster richColors />
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
    </Layout>
};

export default Registrarse;

