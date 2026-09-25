const http = require("http");

const PORT = 3000;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("¡Hola desde Docker!");
});

servidor.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});