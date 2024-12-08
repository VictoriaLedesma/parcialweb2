import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner';
import logo from "../img/vfnotes-logo.png";
import Layout from "./layout";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Inicio de sesión exitoso");
                localStorage.setItem("token", data.token);
                navigate("/");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            toast.error("Error al iniciar sesión. Por favor, intente de nuevo.");
        }
    };


    return <Layout>
        <Toaster richColors />
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
    </Layout>
};

export default Login;

