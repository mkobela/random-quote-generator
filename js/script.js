/***
 * @author Michael Kobela <mkobela@gmail.com>
 ***/

/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

/*** 
 * @type {Array.<Object>} - quotes array
 * @type {Object}
 * @property {string} quote - actual quote.
 * @property {string} source - person or character who said quote.
 * @property {string} citation - reference to source of quote
 * @property {number} year - year the quote originated
***/
let quotes = [
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa',
    citation: '',
    year: 0
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt',
    citation: '',
    year: 0
  },
  {
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plan',
    source: 'Robert Louis Stevenson',
    citation: '',
    year: null
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    source: 'Eleanor Roosevelt',
    citation: '',
    year: null
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
    citation: '',
    year: null
  },
  {
    quote: 'And so we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: 1925
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
    citation: '',
    year: null
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    source: 'Anne Frank',
    citation: '',
    year: null
  },
  {
    quote: 'Live in the sunshine, swim the sea, drink the wild air',
    source: 'Ralph Waldo Emerson',
    citation: 'The Conduct of Life',
    year: 1860
  },
  {
    quote: 'It\'s the possibility of having a dream come true that makes life interesting.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: 2014
  }
];

/***
 * @function getRandomQuote
 * @property {number} limit - maximum value for random number
 * @returns {string} quote - a random quote
***/
function getRandomQuote(limit) {
  // calculate the random number
  let randomNumber = Math.floor(Math.random() * limit);

  // retrun random quote from quotes array
  return (quotes[randomNumber]);
}

/***
 * @function printQuote
***/
function printQuote() {
  // retrieve random quote
  let quote = getRandomQuote(quotes.length);

  // create HTML from the quote object
  let quoteHTML = `
     <p class="quote">${quote.quote}</p>
     <p class="source">${quote.source}
   `;

  // check quote for citation
  if (quote.citation) {
    quoteHTML += `<span class="citation">${quote.citation}</span>`;
  }

  // check quote for year
  if (quote.year > 0) {
    quoteHTML += `<span class="year">${quote.year}</span>`;
  }

  // finialize quote HTML
  quoteHTML += `</p>`;

  // update index.html with the new quote 
  // Note: in the instructions item 8.6 it states to return the HTML
  // but after discussing with "@Lee V" decided this was not necessary.
  document.getElementById('quote-box').innerHTML = quoteHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);