const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// settings

app.set('appName', 'First Server');

// middlewares
app.use(function(req, res, next) {
    console.log(`Request URL: ${req.url}`);
    console.log(`Response URL: ${res.url}`);
    next();
});

app.use((req, res, next) => {
    console.log(`Función arrow`);
    next();
})

app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('tiny'));
app.use(morgan('combined'));


// routes
app.get('/', (req, res) => {
    res.end(`Server Creado, escuchando en el puerto ${port}`);
    // console.log(res.status());
});

app.get('/login', (req, res) => {
    res.end(`Login se muestra`);
});

app.get('*', (req, res) => {
    res.end(`Error, no se encontro esta ruta!!!`);
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}!`);
    console.log(`Nombre de la app: ${app.get('appName')}`);
});
