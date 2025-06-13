const images = [
  '../img/jmemoria/1.png',
  '../img/jmemoria/2.png',
  '../img/jmemoria/3.png',
  '../img/jmemoria/4.png',
  '../img/jmemoria/5.png',
  '../img/jmemoria/6.png',
];

let cardsArray = [...images, ...images];
cardsArray = shuffle(cardsArray);

const gameBoard = document.getElementById('gameBoard');
let flippedCards = [];
let matchedCards = 0;

function createCard(imgUrl, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.image = imgUrl;
  card.dataset.index = index;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back" style="background-image: url('${imgUrl}')"></div>
    </div>
  `;

  card.addEventListener('click', () => flipCard(card));
  return card;
}

function flipCard(card) {
  if (
    flippedCards.length === 2 || 
    card.classList.contains('flipped') || 
    matchedCards === cardsArray.length
  ) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.image === card2.dataset.image) {
    matchedCards += 2;
    flippedCards = [];

    if (matchedCards === cardsArray.length) {
      startHeartRainAndRedirect();
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function init() {
  cardsArray.forEach((img, i) => {
    gameBoard.appendChild(createCard(img, i));
  });
}

init();

function startHeartRainAndRedirect() {
  createHeartRain();

  setTimeout(() => {
    // Para a chuva de corações e redireciona para o Google
    stopHeartRain();
    window.location.href = 'main.html';
  }, 3000);
}

let heartInterval;

function createHeartRain() {
  heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posição horizontal aleatória na tela
    heart.style.left = Math.random() * 100 + 'vw';

    // Define animação para cair
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';

    document.body.appendChild(heart);

    // Remove o coração depois da animação acabar
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }, 150);
}

function stopHeartRain() {
  clearInterval(heartInterval);
}

