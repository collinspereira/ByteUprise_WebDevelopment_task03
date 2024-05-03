let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let ms = 0;
let status = "stopped";

const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const msSpan = document.getElementById("ms");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
    if (status === "stopped") {
        interval = setInterval(() => {
            ms++;
            msSpan.textContent = ms < 10 ? "0" + ms : ms;
            if (ms >= 100) {
                ms = 0;
                seconds++;
                secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                minutesSpan.textContent = minutes < 10 ? "0" + minutes : minutes;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
            }
        }, 10);
        status = "started";
    }
});

stopButton.addEventListener("click", () => {
    if (status === "started") {
        clearInterval(interval);
        status = "stopped";
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    ms = 0;
    hoursSpan.textContent = "00";
    minutesSpan.textContent = "00";
    secondsSpan.textContent = "00";
    msSpan.textContent = "00";
    status = "stopped";
});