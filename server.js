// Mini serveur pour Cloud Run / App Hosting
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Sert les fichiers statiques depuis la racine du repo
app.use(serveStatic(path.join(__dirname), {
  index: ['index.html']
}));

// Fallback SPA (si tu as des routes côté client) : décommente si besoin
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Kames site listening on port ${PORT}`);
});
