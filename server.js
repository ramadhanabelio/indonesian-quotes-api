const express = require("express");
const app = express();
const port = 3000;

const quotes = require("./quotes.json");

app.get("/quotes/:jenis", (req, res) => {
  const jenis = req.params.jenis.toLowerCase();

  if (quotes[jenis]) {
    const randomIndex = Math.floor(Math.random() * quotes[jenis].length);
    const randomQuote = quotes[jenis][randomIndex];
    res.json({ quote: randomQuote });
  } else {
    res.status(404).json({ error: "Jenis quote tidak valid" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
