// @ts-check
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    console.log(`Request URL: ${req.url} at ${new Date()}`);
    next();
});

app.use((req, res, next) => {
    let filePath = path.join(__dirname, 'static', req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if (err) return next();

        if (fileInfo.isFile())
            return res.sendFile(filePath);
        next();
    });
});

app.use((req, res) => {
    res.status(404).send("File Not Found");
});

app.listen(PORT, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});