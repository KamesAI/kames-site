// Mini serveur pour Cloud Run / App Hosting
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Sert tous les fichiers statiques depuis la racine du repo
app.use(serveStatic(path.join(__dirname), { index: ['index.html'] }));

// (Optionnel) fallback SPA si tu as des routes côté client
// app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Kames site listening on http://0.0.0.0:${PORT}`);
});
