const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function getQuote() {
  const apiUrl = 'https://api.quotable.io/random';
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    quoteText.innerText = data.content;
    quoteAuthor.innerText = `- ${data.author}`;
  } catch (error) {
    console.log(error);
  }
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();
