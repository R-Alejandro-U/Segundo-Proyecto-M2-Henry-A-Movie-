module.exports = {
    validations: (req, res, next) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;       

        if (!title) {
            return res.status(400).json({ error: "Por favor, complete el campo de Título." });
        }
        
        if (!year) {
            return res.status(400).json({ error: "Por favor, ingrese un Año válido." });
        }
        
        if (typeof year !== "number") {
            return res.status(400).json({ error: "El año debe ser un número." });
        }
        
        if (year.toString().length !== 4) {
            return res.status(400).json({ error: "El año debe tener exactamente 4 dígitos." });
        }
        
        if (!director) {
            return res.status(400).json({ error: "Por favor, complete el campo de Director." });
        }
        
        if (!duration) {
            return res.status(400).json({ error: "Por favor, ingrese una Duración válida." });
        }
        
        if (!Array.isArray(genre) || genre.length === 0) {
            return res.status(400).json({ error: "Por favor, seleccione al menos un Género." });
        }
        
        if (!rate) {
            return res.status(400).json({ error: "Por favor, ingrese una Calificación válida." });
        }
        
        if (typeof rate !== "number") {
            return res.status(400).json({ error: "La calificación debe ser un número." });
        }
        
        if (!poster) {
            return res.status(400).json({ error: "Por favor, complete el campo de Cartel." });
        }

        next();
    }
};
