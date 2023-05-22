const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("timer");
const results = document.getElementById("result");
const gameContainer = document.querySelector(".game-container");
const controls = document.querySelector(".controls-container");

//items array
const  items = [
    { name: "cake", image: "/images/cake.png" },
    { name: "candy", image: "/images/candy.png" },
    { name: "cupcake", image: "/images/cupcake.png" },
    { name:"donut", image: "/images/donut.png" },
    { name:"chocolate", image: "/images/hot-chocolate.png" },
    { name:"icecream", image: "/images/ice-cream.png" },
    { name:"macaron", image: "/images/macaron.png" },
    { name:"muffin", image: "/images/muffin.png" },
    { name:"pie", image: "/images/pie.png" },
    { name:"popsicle", image: "/images/popsicle.png" },
    { name:"pudding", image: "/images/pudding.png" },
    { name:"wafer", image: "/images/wafer.png" },

];

let cards;
let timerInterval;
let firstCards = false;
let secondCards = false;


//initial start
let movesCount = 0;
let winCount = 0;
let seconds = 90;

//timer
const timeGenerator = () => {
    seconds -= 1; 
    if (seconds < 0) {
      clearInterval(timerInterval); 
      timeValue.innerHTML = "<span>Time's up!</span>";
      return;
    }
  
    let minutes = Math.floor(seconds / 60); 
    let remainingSeconds = seconds % 60; 
    let secondsValue = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
  };
//for movescount
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
  };

  //randomizer
const generateRandom = (size = 4) => {
    let tempArray = [...items];
    let cardsValues = [];
    size = (size * size) / 2;
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      cardsValues.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    return cardsValues;
  };

  const shuffleGenerator = (cardsValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardsValues = [...cardsValues, ...cardsValues];
    cardsValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {}
  };

  const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardsValues = generateRandom();
    console.log(cardsValues);
    shuffleGenerator(cardsValues);
  };

startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 90;
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
        timerInterval = setInterval(timeGenerator, 1000);
        moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
        initializer();
  });

//Stop game
stopButton.addEventListener(
    "click",
    (stopGame = () => {
      controls.classList.remove("hide");
      stopButton.classList.add("hide");
      startButton.classList.remove("hide");
    })
  );
