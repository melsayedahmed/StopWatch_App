let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
}

// Update the display initially
updateDisplay();
