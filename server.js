const express = require('express');

const app = express();

const porta = 3000;

app.get('/', function (req, res) {
    res.send('Sistema de Cursos Técnicos');
});

app.get('/cursos', function (req, res) {
    res.send('Lista de cursos disponíveis');
});

app.get('/professores', function (req, res) {
    res.send('Lista de professores');
});

app.get('/sobre', function (req, res) {
    res.send('Informações sobre a instituição');
});

app.use(function (req, res) {
    res.status(404).send('Página não encontrada');
});

app.listen(porta, function () {
    console.log(`Servidor funcionando na porta ${porta}`);
});