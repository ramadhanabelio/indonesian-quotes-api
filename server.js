const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

const quotes = require(path.join(__dirname, "data", "quotes.json"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Selamat Datang di API Indonesian Quotes API");
});

app.get("/love", (req, res) => {
  sendRandomQuote(res, "love");
});

app.get("/life", (req, res) => {
  sendRandomQuote(res, "life");
});

app.get("/social", (req, res) => {
  sendRandomQuote(res, "social");
});

app.get("/random", (req, res) => {
  const allTypes = Object.keys(quotes);
  const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];
  sendRandomQuote(res, randomType);
});

function sendRandomQuote(res, category) {
  const categoryLowerCase = category.toLowerCase();

  if (quotes[categoryLowerCase]) {
    const randomIndex = Math.floor(Math.random() * quotes[categoryLowerCase].length);
    const randomQuote = quotes[categoryLowerCase][randomIndex];
    res.json({ quotes: randomQuote, category: categoryLowerCase });
  } else {
    res.status(404).json({ error: "Category quote tidak valid" });
  }
}

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
