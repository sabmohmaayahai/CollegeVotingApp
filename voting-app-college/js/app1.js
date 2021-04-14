// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the Trump votes span
const AVotesEl = document.querySelector('.votes-number-A1');

// Get a reference to the Biden votes span
const BVotesEl = document.querySelector('.votes-number-B1');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-A1')) {
            addVote(0, 'A1', AVotesEl)
        } else {
            addVote(1, 'B1', BVotesEl)
        }
    })
})