const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de Multer pour les uploads d'avatar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'public/uploads/avatars';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'avatar-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Seules les images sont autorisées!'), false);
    }
  }
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base de données simplifiée (en mémoire)
let users = {};
let challenges = [
  { id: 1, name: "Éteindre les lumières", points: 10 },
  { id: 2, name: "Prendre une douche courte", points: 15 },
  { id: 3, name: "Utiliser les transports en commun", points: 20 }
];

let storeItems = [
  { id: 1, name: "Chapeau Vert", price: 50, category: "hats", image: "hat1.png" },
  { id: 2, name: "Lunettes Cool", price: 75, category: "glasses", image: "glasses1.png" },
  { id: 3, name: "Chemise Énergie", price: 100, category: "clothes", image: "shirt1.png" }
];

// Routes pour les pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'store.html'));
});

// API Routes

// Upload d'avatar
app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucun fichier uploadé' });
  }

  const userId = req.body.userId || 'default-user';
  const avatarPath = `/uploads/avatars/${req.file.filename}`;

  // Enregistrer l'avatar pour l'utilisateur
  if (!users[userId]) {
    users[userId] = { points: 0, avatar: null, items: [] };
  }
  users[userId].avatar = avatarPath;

  res.json({ 
    success: true, 
    avatarUrl: avatarPath,
    user: users[userId]
  });
});

// Système de points
app.post('/api/complete-challenge', (req, res) => {
  const { userId, challengeId } = req.body;
  
  if (!users[userId]) {
    users[userId] = { points: 0, avatar: null, items: [] };
  }

  const challenge = challenges.find(c => c.id == challengeId);
  if (!challenge) {
    return res.status(404).json({ error: 'Challenge non trouvé' });
  }

  users[userId].points += challenge.points;

  res.json({
    success: true,
    points: users[userId].points,
    challengeCompleted: challenge.name
  });
});

// Boutique
app.get('/api/store-items', (req, res) => {
  res.json(storeItems);
});

app.post('/api/purchase-item', (req, res) => {
  const { userId, itemId } = req.body;

  if (!users[userId]) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  const item = storeItems.find(i => i.id == itemId);
  if (!item) {
    return res.status(404).json({ error: 'Article non trouvé' });
  }

  if (users[userId].points < item.price) {
    return res.status(400).json({ error: 'Points insuffisants' });
  }

  users[userId].points -= item.price;
  users[userId].items.push(item);

  res.json({
    success: true,
    points: users[userId].points,
    purchasedItem: item
  });
});

// Webhook pour n8n
app.post('/api/n8n-webhook', (req, res) => {
  // Ici vous pouvez intégrer avec votre workflow n8n
  const { event, data } = req.body;
  
  // Exemple: Quand un challenge est complété via le bot
  if (event === 'challenge_completed') {
    const { userId, challengeId } = data;
    // Traitement similaire à /api/complete-challenge
  }

  res.json({ received: true });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
  console.log(`API Documentation:`);
  console.log(`- POST /api/upload-avatar - Upload un avatar`);
  console.log(`- POST /api/complete-challenge - Complète un challenge`);
  console.log(`- GET /api/store-items - Liste des articles`);
  console.log(`- POST /api/purchase-item - Acheter un article`);
  console.log(`- POST /api/n8n-webhook - Webhook pour n8n`);
});
