const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(3000, ()=>{
    console.log("Abriu a porteira");
});

// Assim que avançarmos com MongoDB, isso aqui será a conexão
app.use(express.json());
