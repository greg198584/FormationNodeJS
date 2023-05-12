// Importer le module "http" et "url"
const http = require("http");

const url = require("url");

// Créer un serveur web
const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;

    if (pathname === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Page d'accueil");
    } else if (pathname === "/a-propos") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Page à propos");
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page introuvable"
        );
    }
});

// Écouter les requêtes sur le port 3000
server.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000"
    );
});