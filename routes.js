const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
    // res.end(`Server Creado, escuchando en el puerto ${port}`);
    // console.log(res.status());
});

router.get('/login', (req, res) => {
    res.render(`login.ejs`);
});

module.exports = router;