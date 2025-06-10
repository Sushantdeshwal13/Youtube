import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/suggest', async (req, res) => {
  const query = req.query.q;
  const apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CORS Proxy server running at http://localhost:${PORT}`);
});
