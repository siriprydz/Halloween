let countdown = document.querySelector(".countdown");
console.log(countdown);

let halloween = new Date(2025, 9, 31);
let today = new Date();
let timeLeft = halloween - today;

console.log(timeLeft);
console.log(halloween);
console.log(today);

let millisecondsPerSecond = 1000;
let totalSeconds = Math.floor(timeLeft / millisecondsPerSecond);
let secondsPerDay = 24 * 60 * 60;
let days = Math.floor(totalSeconds / secondsPerDay);
let remainingSecondsAfterDays = totalSeconds % secondsPerDay;
let secondsPerHour = 60 * 60;
let hours = Math.floor(remainingSecondsAfterDays / secondsPerHour);
let remainingSecondsAfterHours = remainingSecondsAfterDays % secondsPerHour;
let secondsPerMinute = 60;
let minutes = Math.floor(remainingSecondsAfterHours / secondsPerMinute);
let seconds = remainingSecondsAfterHours % secondsPerMinute;

