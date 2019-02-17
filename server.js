// @ts-check
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('short'));

app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res) => {
    res.status(404).send("File Not Found");
});

app.listen(PORT, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});