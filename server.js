const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware para JSON
app.use(express.json());

// Inicializa o servidor
app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});

// Assim que avançarmos com MongoDB, isso aqui será a conexão
app.use(express.json());
