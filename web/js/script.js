document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.getElementById("quote-text");
  const quoteCategory = document.getElementById("quote-category");
  const getQuoteBtn = document.getElementById("getQuoteBtn");

  function getQuote() {
    fetch("http://localhost:3000/random")
      .then((response) => response.json())
      .then((data) => {
        quoteText.textContent = data.quotes;
        quoteCategory.textContent = `- ${data.category} -`;
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }

  getQuote();

  getQuoteBtn.addEventListener("click", getQuote);
});
