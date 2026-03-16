const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to integrate with Gemini API
app.get('/api/gemini', async (req, res) => {
    try {
        const response = await axios.get('https://api.gemini.com/v1/pubticker/btcusd');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data from Gemini API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Gemini API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});