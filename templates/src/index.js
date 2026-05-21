import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

// Chargement des variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares de Sécurité et Utilitaires ---
app.use(cors());   
app.use(morgan('dev')); // Affiche les logs des requêtes dans le terminal
app.use(express.json()); // Permet de lire le format JSON dans req.body

// --- Routes de Test ---
app.get('/', (req, res) => {
  res.json({ message: "Votre backend Node.js + MySQL est sécurisé et opérationnel !" });
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routesDir = path.join(__dirname, 'routes');

if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir).forEach(async (file) => {
    if (file.endsWith('Routes.js')) {
        const route = await import(`./routes/${file}`)
        const routeName = file.replace('Routes.js', '').toLocaleLowerCase()

        app.use(`/api/${routeName}`, route.default)
    }
  })
}

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://${process.env.DB_HOST}:${PORT}`);
});