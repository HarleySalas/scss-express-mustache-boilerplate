const express = require('express');
const router = express.Router(); 
const favicon = require('serve-favicon');
const mustacheExpress = require('mustache-express');
require('dotenv').config();

const app = express();

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache')

app.use(express.static('public'));

// app.use(favicon(__dirname + '/public/img/favicon.png'));

const home = require('./routes/home');

app.use('/', home);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
    });