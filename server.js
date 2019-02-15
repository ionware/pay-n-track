// @ts-check
const app = require('./bootstrap');

const PORT = process.env.PORT || 3000;

app.start(PORT, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});