const express = require('express');
const app = express();

const routes = require('./routes');
const port = 3005;

app.use('/', routes);

app.listen(port, function() {
    console.log("Server is running on port ", port);
});