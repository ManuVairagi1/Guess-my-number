// document.querySelector("#guessing").textContent = "Correct Number!";

/*document.querySelector(".points").textcontent = "13";
document.querySelector(".question").textContent = "23";
document.querySelector(".highpoints").textContent = "19";*/

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector("#guessing").textContent = message;
};

// document.querySelector("#again").addEventListener("click", function () {
//   document.querySelector(".question").textContent = secretNumber;
//   document.querySelector("#guessing").textContent = " guess the number";
//   document.querySelector(".points").textContent = "20";
//   document.querySelector(".highpoints").textContent = "0";
//   document.querySelector(".question").style.width = "100px";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".highpoints").textContent = highscore;
// });

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".nani").value);

  if (!guess) {
    // document.querySelector("#guessing").textContent = " ⛔ No Number";
    displayMessage(" ⛔ No Number");
  } else if (guess === secretNumber) {
    // document.querySelector("#guessing").textContent = " 💸 You won";
    displayMessage("💸 You won");
    // document.querySelector(".highpoints").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").style.width = "30rem";
    document.querySelector(".question").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highpoints").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    document.querySelector("#guessing").textContent =
      guess > secretNumber ? "  📈 Too High" : " 📉 Too Low";
    score--;
    document.querySelector(".points").textContent = score;
  }
  // } else if (guess > secretNumber) {
  //   document.querySelector("#guessing").textContent = "  📈 Too High";
  //   score--;
  //   document.querySelector(".points").textContent = score;
  // } else if (guess < secretNumber) {
  //   document.querySelector("#guessing").textContent = " 📉 Too Low";
  //   score--;
  //   document.querySelector(".points").textContent = score;

  if (guess > 20) {
    document.querySelector("#guessing").textContent = "  ❕❕Out of Range❕❕";
  }

  if (score === 0) {
    // document.querySelector("#guessing").textContent = " 😭 You lost bitch!";
    displayMessage(" 😭 You lost bitch!");
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(".highpoints").textContent = highscore;
  }
});

document.querySelector("#again").addEventListener("click", function () {
  document.querySelector(".question").textContent = "?";
  // score = 20;
  // secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".points").textContent = "20";
  // document.querySelector("#guessing").textContent = "Start guessing";
  displayMessage("Start guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".question").style.width = "100px";
});
