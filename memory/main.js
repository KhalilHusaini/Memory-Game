const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const  items = [
  { name: "cake", image: "public/images/cake.png" },
  { name: "candy", image: "public/images/candy.png" },
  { name: "cupcake", image: "public/images/cupcake.png" },
  { name:"donut", image: "public/images/donut.png" },
  { name:"chocolate", image: "public/images/hot-chocolate.png" },
  { name:"icecream", image: "public/images/ice-cream.png" },
  { name:"macaron", image: "public/images/macaron.png" },
  { name:"muffin", image: "public/images/muffin.png" },
  { name:"pie", image: "public/images/pie.png" },
  { name:"popsicle", image: "public/images/popsicle.png" },
  { name:"pudding", image: "public/images/pudding.png" },
  { name:"wafer", image: "public/images/wafer.png" },
];

// Initial Time
let seconds = 60;
// Initial moves, win count and difficulty
let movesCount = 0;
let winCount = 0;
let size = 4;
let difficulty = "easy";

// For timer
const timeGenerator = () => {
  seconds -= 1;
  if (seconds < 0) {
    clearInterval(interval);
    timeValue.innerHTML = "<span>Time's up!</span>";
    handleGameOver();
    return;
  }
  let minutes = Math.floor(seconds / 60);
  let secondsValue = seconds % 60;
  let secondsDisplay = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
  let timeDisplay = `<span>Time:</span>${minutes}:${secondsDisplay}`;
  timeValue.innerHTML = timeDisplay;
};

// Calculate how many moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// Randomizer
const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};
// shuffling of cards
const shuffleGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="before-pic">??</div>
        <div class="after-pic">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  // Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  // Cards logic
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("matched")) {
        card.classList.add("flipped");
        if (!firstCard) {
          firstCard = card;
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          movesCounter();
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue === secondCardValue) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = false;
            winCount += 1;
            if (winCount === Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>Yay! You Won!</h2>
            <h4>Moves: ${movesCount}</h4>`;
              let delay = setTimeout(() => {stopGame();
                const welcomeTitle = document.getElementById("welcome-title");
                welcomeTitle.style.display = "none";},1000);
            }
          } else {
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
              firstCard = false;
              secondCard = false;
            }, 800);
          }
        }
      }
    });
  });
};


// Start game
const startGame = () => {
  movesCount = 0;
  seconds = 60;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
  initialize();
};

startButton.addEventListener("click", startGame);

// Stop game
const stopGame = () => {
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  const welcomeTitle = document.getElementById("welcome-title");
welcomeTitle.style.display = "block";
  clearInterval(interval);
};

stopButton.addEventListener("click", stopGame);

// Initial state
const initialize = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  shuffleGenerator(cardValues);
};

// Game Over
const handleGameOver = () => {
  result.innerHTML = "<h2>Game Over</h2><h4>You lost!</h4>";
  stopGame();
  const welcomeTitle = document.getElementById("welcome-title");
  welcomeTitle.style.display = "none";
};

// Set the difficulty level and grid size
function setDifficulty(difficultyLevel) {
    difficulty = difficultyLevel;
    if (difficulty === "easy") {
      size = 4;
    } else if (difficulty === "medium") {
      size = 5;
    } else if (difficulty === "hard") {
      size = 6;
    }
  }

initialize();





