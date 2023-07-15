let btn = document.getElementById('btn')
let quoteOutput = document.getElementById('quoteOutput')
let authorOutput = document.getElementById('authorOutput')

var quotes = [
  {author: '― Elbert Hubbard',
  quote : 'A room without books is like a body without a soul.'
  },
  {author: '― Maya Angelou',
  quote : 'You only live once, but if you do it right, once is enough.'
  },
  {author: '― Oscar Wilde ',
  quote : 'Be the change that you wish to see in the world.'
  },
  {author: 'El Afriqy',
  quote : `In three words I can sum up everything I've learned about life: it goes on.`
  },
  {author: '― Mahatma Gandhi',
  quote : 'Always forgive your enemies; nothing annoys them so much'
  },
  {author: '― Ralph Waldo Emerson',
  quote : 'A friend is someone who knows all about you and still loves you.'
  },
  {author: '― Friedrich Nietzsche',
  quote : `If you tell the truth, you don't have to remember anything.`
  }
];


function swap() {
  var swapper = quotes[Math.floor(Math.random() * quotes.length + 1 )];
  quoteOutput.innerHTML =swapper.quote;
  authorOutput.innerHTML =swapper.author;
}   