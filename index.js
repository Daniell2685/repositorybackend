require('dotenv').config();
const http = require('http');

const PORT = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('¡Hola! Mi backend está funcionando 🚀');
});

servidor.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});