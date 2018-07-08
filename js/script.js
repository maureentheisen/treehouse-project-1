
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array of quotes
quotes = [
  {
    quote: 'Whenever people agree with me I always feel I must be wrong.',
    source: 'Oscar Wilde'

  },
  {
    quote: 'I love America more than any other country in this world, and, exactly for this reason, I insist on the right to criticize her perpetually.',
    source: 'James Baldwin',
    citation: 'Notes of a Native Son',
    year: '1955'
  },
  {
    quote: 'You can’t let your failures define you. You have to let your failures teach you.',
    source: 'Barack Obama'
  },
  {
    quote: 'Don\'t waste your energy trying to educate or change opinions... Do your thing and don\'t care if they like it.',
    source: 'Tina Fey'
  },
  {
    quote: 'No need to hurry. No need to sparkle. No need to be anybody but oneself.',
    source: 'Virginia Woolf',
    citation: 'Selected Works of Virginia Woolf',
    year: '2007'
  },
  {
    quote: 'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
    source: 'Fred Rogers'
  }

];

// pick a quote at random

function getRandomQuote(arr){
  var randomQuote = Math.floor(Math.random() * arr.length);
  return arr[randomQuote];
}

// create the quotation message

function printQuote(){
    var returnQuote = getRandomQuote(quotes);
    var message = '';

    message += '<p class="quote">' + returnQuote.quote + '</p>';
    message += '<p class="source">' + returnQuote.source;

    if(returnQuote.citation != null ){
      message += '<span class="citation">' + returnQuote.citation + '</span>';
    }

    if(returnQuote.year != null ){
      message += '<span class="year">' + returnQuote.year + '</span>';
    }

    message += '</p>';
    document.getElementById('quote-box').innerHTML = message;
}

//put the quotation into the quote-box div
