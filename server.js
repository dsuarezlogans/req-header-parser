const express = require('express');

const controller = require('./controller');

const app = express();
const port = process.env.PORT || '3000';

app.get('/api/whoami', controller);

app.listen(port, () => console.log(`server running on port: ${port}`));