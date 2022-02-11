const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.end(`Server Creado, escuchando en el puerto ${port}`);
    console.log(res.status);
});

app.get('/login', (req, res) => {
    res.end(`Login se muestra`);
});

app.get('*', (req, res) => {
    res.end(`Error, no se encontro nada!!!`);
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}!`);
});
