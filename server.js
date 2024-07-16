// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Proxy endpoint to fetch and serve Excel file
app.get('/proxy', async (req, res) => {
  try {
    const excelFileUrl = 'https://d.docs.live.net/1e01bebff257bc21/Documents/Project%20data.xlsx';
    const response = await fetch(excelFileUrl);
    const data = await response.arrayBuffer();
    res.send(data);
  } catch (error) {
    console.error('Error fetching Excel file:', error);
    res.status(500).send('Error fetching Excel file');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
