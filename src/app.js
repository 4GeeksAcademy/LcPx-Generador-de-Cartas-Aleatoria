function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}

function randomCard(cards) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const cardValue = cards[randomIndex].value;
  const cardSuit = cards[randomIndex].suit;

  let entity;
  switch (cardSuit) {
    case "Diamonds":
      entity = "♦";
      break;
    case "Hearts":
      entity = "♥";
      break;
    case "Spades":
      entity = "♠";
      break;
    case "Clubs":
      entity = "♣";
      break;
    default:
      entity = "";
  }

  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());

  card.innerHTML =
    '<span class="card-value-suit top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit">' +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    cardValue +
    entity +
    "</span>";

  document.getElementById("card-container").appendChild(card);
}

const cards = deckBuilder();
randomCard(cards);
