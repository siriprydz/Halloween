let countdown = document.querySelector(".countdown");
let heading = document.querySelector(".heading");

console.log(countdown);

const halloween = new Date(2025, 9, 31);
let timeLeft;

const millisecondsPerSecond = 1000;
const secondsPerDay = 24 * 60 * 60;
const secondsPerHour = 60 * 60;
const secondsPerMinute = 60;

counter();
let runEverySecond = setInterval(counter, 1000);

function counter() {
  timeLeft = halloween - new Date();
  Math.max(timeLeft, 0);

  if (timeLeft <= 0) {
    alert("It is Halloween today!");
    countdown.textContent = "00 : 00 : 00 : 00";
    heading.textContent = "It is Halloween today!";

    clearInterval(runEverySecond);
  } else {
    let totalSeconds = Math.floor(timeLeft / millisecondsPerSecond);
    let days = Math.floor(totalSeconds / secondsPerDay);
    let remainingSecondsAfterDays = totalSeconds % secondsPerDay;
    let hours = Math.floor(remainingSecondsAfterDays / secondsPerHour);
    let remainingSecondsAfterHours = remainingSecondsAfterDays % secondsPerHour;
    let minutes = Math.floor(remainingSecondsAfterHours / secondsPerMinute);
    let seconds = remainingSecondsAfterHours % secondsPerMinute;

    let formatedSeconds = String(seconds).padStart(2, "0");
    let formatedMinutes = String(minutes).padStart(2, "0");
    let formatedHours = String(hours).padStart(2, "0");

    countdown.textContent =
      days +
      " : " +
      formatedHours +
      " : " +
      formatedMinutes +
      " : " +
      formatedSeconds;
  }
}

//wandering ghost

let ghost = document.querySelector("#pacmanGhost");
let ghostPath = document.querySelector("#ghostPath");

let position = 0;
let direction = 1;
let step = 32;
let delay = 500;
let maxPosition = null;

function computeMaxPosition() {
  const ghostPathWidth = ghostPath.clientWidth;
  const ghostWidth = ghost.clientWidth;

  if (!ghostWidth || !ghostPathWidth) return null;

  return Math.max(ghostPathWidth - ghostWidth, 0);
}

ghost.addEventListener("load", () => {
  maxPosition = computeMaxPosition();
});

if (ghost.complete) {
  maxPosition = computeMaxPosition();
}

window.addEventListener("resize", () => {
  const newMaxPosition = computeMaxPosition();
  if (newMaxPosition !== null) maxPosition = newMaxPosition;
});

const oneStep = () => {
  if (maxPosition === null) {
    maxPosition = computeMaxPosition();
    if (maxPosition === null) return;
  }
  position = Math.min(position, maxPosition);

  const nextPosition = position + direction * step;

  if (nextPosition >= maxPosition) {
    position = maxPosition;
    direction = -1;
    ghost.classList.add("flip");
  } else if (nextPosition <= 0) {
    position = 0;
    direction = 1;
    ghost.classList.remove("flip");
  } else {
    position = nextPosition;
  }

  ghost.style.left = position + "px";
};

let ghostWalk = setInterval(oneStep, delay);
