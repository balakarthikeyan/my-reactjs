const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Error Handling
/*
app.get('/', (req, res) => {
    throw new Error('Oops! Something went wrong.');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
});
*/

app.listen(3001, () => {
    console.log('Express server running on http://localhost:3001');
});