const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World' });
})

app.post('/products', (req, res) => {
    const data = req.body;
    res.json({ message: `Hello ${data}` });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})