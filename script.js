let countdown = document.querySelector(".countdown");
let heading = document.querySelector(".heading");

console.log(countdown);

const halloween = new Date(2025, 9, 31);
let timeLeft;

const millisecondsPerSecond = 1000;
const secondsPerDay = 24 * 60 * 60;
const secondsPerHour = 60 * 60;
const secondsPerMinute = 60;

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

let pacmanGhost = document.querySelector("#pacmanGhost");
let ghostPath = document.querySelector("#ghostPath")

let ghostWalk = setInterval (oneStep, 1000);

const oneStep () => {

}