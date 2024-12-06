const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;
const SECRET_KEY = "tu_secreto_seguro";

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

const db = new sqlite3.Database("usuarios.db", (err) => {
    if (err) {
        console.error("Error al conectar con la base de datos:", err.message);
    } else {
        console.log("Conectado a SQLite.");
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )`
        );
    }
});

app.post("/register", async (req, res) => {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(
            "INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)",
            [nombre, email, hashedPassword],
            (err) => {
                if (err) {
                    if (err.code === "SQLITE_CONSTRAINT") {
                        return res.status(400).json({ message: "El email ya está registrado." });
                    }
                    return res.status(500).json({ message: "Error en el servidor." });
                }
                res.status(201).json({ message: "Usuario registrado exitosamente." });
            }
        );
    } catch (err) {
        res.status(500).json({ message: "Error al registrar el usuario." });
    }
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Error en el servidor." });
        }
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Contraseña incorrecta." });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ message: "Inicio de sesión exitoso.", token });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
