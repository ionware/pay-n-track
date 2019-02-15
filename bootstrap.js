const process = require('process');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');

// Create and instance of the express app.
const app = require('./App')();

app.middleware(logger('short'));
app.middleware(helmet());

app.setView('pug', path.resolve(__dirname, 'resources', 'views'));

app.get('/', (request, response) => {
    response.render("index");
    response.end();
});

module.exports = app;