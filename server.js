const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(3000, ()=>{
    console.log("Abriu a porteira");
});

// Assim que avançarmos com MongoDB, isso aqui será a conexão
app.use(express.json());
