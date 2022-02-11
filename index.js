const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// settings
app.set('appName', 'First Server');
app.set('views', `${__dirname}/views`);

app.set('view engine', 'ejs');

console.log(__dirname);

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

// require routes
const routes = require('./routes');
const routesApi = require('./routesApi');

// routes
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end(`Error, no se encontro esta ruta!!!`);
});

// server
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}!`);
    console.log(`Nombre de la app: ${app.get('appName')}`);
});
