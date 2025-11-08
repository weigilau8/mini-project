// app.js

// 1. Install/Require Express
const express = require('express');
const app = express();
const port = 3000;

// 2. Import JSON Data
// Note: The path is relative to the app.js file.
const itemData = require('./data/data.json');

// --- Middleware Setup ---

// 3. Serve Static Files from the "public" folder
app.use(express.static('public'));

// --- API Route Definition ---

// 4. Define the .get() method route to send the JSON Data
// This endpoint URL (API endpoint) is: /api/items
app.get('/api/items', (req, res) => {
    // res.json() automatically sets the correct Content-Type header
    // and sends the JavaScript object as a JSON response.
    res.json(itemData);
});

// --- Server Start ---

app.listen(port, () => {
    console.log(`🚀 Express server running at http://localhost:${port}`);
    console.log('API endpoint for data: http://localhost:3000/api/items');
});