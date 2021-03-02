let baseUrl = 'https://deckofcardsapi.com/api/deck';

// Part 1
async function requestToAPI() {
    let res = await $.getJSON(`${baseUrl}/new/draw`);
    let {
        suit,
        value
    } = res.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}
requestToAPI()

// Part 2
async function newlyShuffled() {
    let firstCard = await $.getJSON(`${baseUrl}/new/draw`);
    let deckId = firstCard.deck_id;
    let secondCard = await $.getJSON(`${baseUrl}/${deckId}/draw`);

    [firstCard, secondCard].forEach(card => {
        let {
            suit,
            value
        } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    });
}
newlyShuffled()

// Part 3
$(function () {
    async function deckDraw() {
        let btn = $('button');
        let cardBody = $('.card-body');

        let deck = await $.getJSON(`${baseUrl}/new/shuffle`);
        btn.show().on('click', async function () {
            let cardRes = await $.getJSON(`${baseUrl}/${deck.deck_id}/draw`);
            let cardImg = cardRes.cards[0].image;
            cardBody.append(
                $('<img>', {
                    src: cardImg,
                    class: 'animate'
                })
            );
            if (cardRes.remaining === 0) location.reload();
        })
    }
    deckDraw()
});