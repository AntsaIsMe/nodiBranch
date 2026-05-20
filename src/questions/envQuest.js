import { validNormChar, validNum } from '../utils/validator.js'

export const questions = [
    {
      type: 'input',
      name: 'PORT',
      message: 'Sur quel port doit tourner votre serveur Express ?',
      default: '3000',
      validate: validNum
    },

    {
      type: 'input',
      name: 'DB_HOST',
      message: 'Quel est l\'hôte de votre base de données MySQL ?',
      default: 'localhost'
    },
    {
      type: 'input',
      name: 'DB_NAME',
      message: 'Quel est le nom de la base de données ?',
      default: 'mon_backend_db',
      validate : validNormChar
    },

    {
        type: 'input',
        name: 'DB_PORT',
        message: 'Quel est le port de la database ?',
        default: '3306',
        validate: 'validator'
    },

    {
      type: 'input',
      name: 'DB_USER',
      message: 'Quel est l\'utilisateur MySQL ?',
      default: 'root'
    },

    {
        type: "password",
        name: 'DB_PASSWORD',
        message: 'Quel est le mot de passe MySQL ?',
        mask: '*',
        default: '',
    },
    {
        type: 'confirm',
        name: 'uploadFeature',
        message: 'Souhaites-tu intégrer une fonctionnalité d\'upload de fichiers (via Multer) ?',
        default: false
      },
  ];

