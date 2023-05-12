// Importer le module "http"
const http = require("http");

// Créer un serveur web
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end("Hello, World!");
});

// Écouter les requêtes sur le port 3000
server.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});