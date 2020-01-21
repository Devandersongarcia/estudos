// Métodos HTTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query (Filtros, Ordenação, Paginação,  ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body ( Dados para criação ou alteração de um registro)

//MongoDB: banco não-relacional

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://Anderson:xc90q7X6@cluster0-4wk9n.mongodb.net/GetDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);