// Текст внутри кругов
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Сами круги (SVG)
const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

// Кнопки
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

// Список кругов
const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");

const circumference = 2 * Math.PI * 52;

let elapsedTime = 0;   // сколько секунд прошло
let timer = null;      // ID интервала (null — таймер не запущен)
let isRunning = false; // идёт ли отсчёт
let lapCount = 0;      // сколько кругов записано

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');
    return '${hStr}:${mStr}:${sStr}';
}

function updateCircleProgress(circle, value, max) {
    const offset = circumference - (value / max) * circumfrence;
    circle.style.strokeDashoffset = offset;
}

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");


    updateCircleProgress(hoursCircle, hours,24);
    updateCircleProgress(minutesCircle, minutes,60);
    updateCircleProgress(secondsCircle, seconds,60);
    }

function start() {
    if (isRunning) return; // защита от двойного запуска
    isRunning = true
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
}
function stop() {
    clearInterval(timer);
    isRunning = false;
    timer = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
}
    

    
    