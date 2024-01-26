const motivationalQuotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        quote: "Dream it. Wish it. Do it.",
        author: "Unknown"
    },
    {
        quote: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown"
    },
    {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        quote: "Dream bigger. Do bigger.",
        author: "Unknown"
    },
    {
        quote: "Don't stop when you're tired. Stop when you're done.",
        author: "Unknown"
    },
    {
        quote: "Wake up with determination. Go to bed with satisfaction.",
        author: "Unknown"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },
    {
        quote: "Little things make big days.",
        author: "Unknown"
    },
    {
        quote: "It's going to be hard, but hard does not mean impossible.",
        author: "Unknown"
    },
    {
        quote: "Don't wait for opportunity. Create it.",
        author: "Unknown"
    },
    {
        quote: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        author: "Unknown"
    },
    {
        quote: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author: "Vince Lombardi"
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not just about making money. It's about making a difference.",
        author: "Unknown"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    },
    {
        quote: "If you want to achieve greatness stop asking for permission.",
        author: "Anonymous"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    }
];

function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

newQuoteBtn.addEventListener('click', function() {
    const randomQuote = getRandomQuote(motivationalQuotes);
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = "~ " +randomQuote.author;
});

window.onload = function() {
    const randomQuote = getRandomQuote(motivationalQuotes);
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = "~ " +randomQuote.author;
};