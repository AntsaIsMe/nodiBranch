import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Création du pool de connexion en utilisant les variables d'environnement
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Tester la connexion au démarrage du serveur
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connexion à la base de données réussie !');
    connection.release(); 
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error.message);
  }
}

testConnection();

export default pool;