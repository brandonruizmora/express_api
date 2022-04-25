// Usando objeto de express y importando express
const express = require('express');

// Inicializado App de express
const app = express();

// Indicamos que vamos a usar JSON
app.use(express.json());

// Indicamos que puerto vamos a ver nuestra app
const port = 3000;

app.listen(port, () => {
    console.log(`Example listening on port ${port}`);
});