// document.querySelector("#guessing").textContent = "Correct Number!";

/*document.querySelector(".points").textcontent = "13";
document.querySelector(".question").textContent = "23";
document.querySelector(".highpoints").textContent = "19";*/

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector("#again").addEventListener("click", function () {
  document.querySelector("#guessing").textContent = " guess the number";
  document.querySelector(".points").textContent = "0";
  document.querySelector(".highpoints").textContent = "0";
  document.querySelector(".question").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".nani").value);

  if (!guess) {
    document.querySelector("#guessing").textContent = " ⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector("#guessing").textContent = " 💸 You won";
    document.querySelector(".highpoints").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").style.width = "30rem";
    document.querySelector(".question").textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector("#guessing").textContent = "  📈 Too High";
    score--;
    document.querySelector(".points").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector("#guessing").textContent = " 📉 Too Low";
    score--;
    document.querySelector(".points").textContent = score;
  } else if (guess > 20) {
    document.querySelector("#guessing").textContent = "  ❕❕Out of Range❕❕";
  }

  if (score === 0) {
    document.querySelector("#guessing").textContent = " 😭 You lost bitch!";
  }
});
