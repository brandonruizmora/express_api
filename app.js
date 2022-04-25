// Usando objeto de express y importando express
const express = require('express');

// App de express
const app = express();

// Indicamos que vamos a usar JSON
app.use(express.json());

// Indicamos que puerto vamos a ver nuestra app
const port = 3000;

// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);
    const explorer1 = {id: 1, name: 'Carlo'};
    const explorer2 = {id: 2, name: 'Brandon'};
    const explorer3 = {id: 3, name: 'Ferch'};
    const explorerList = [explorer1, explorer2, explorer3];
    res.status(200).json(explorerList);
});

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`);
    console.log(`Getting Explorer with id ${req.params.id}`);
    const explorer = {id: 1, name: 'Carlo'};
    res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body; // Parametros de un cliente
    res.status(201).json({message: "Created"});
});

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body; // Parametros de un cliente
    res.status(200).json({message: 'Updated'});
});

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body; // Parametros de un cliente
    res.status(200).json({message: 'Deleted'});
});

//Inicializando App
app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
});