import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import pool from './config/db.js';

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


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://${process.env.DB_HOST}:${PORT}`);
});