const daysElm = document.getElementById('days');
const hoursElm = document.getElementById('hours');
const minsElm = document.getElementById('mins');
const secondsElm = document.getElementById('seconds');


const newYears = "1 Jan 2025";

function ticking() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElm.innerHTML = days;
    hoursElm.innerHTML = timeToTwoDigits(hours);
    minsElm.innerHTML = timeToTwoDigits(mins);
    secondsElm.innerHTML = timeToTwoDigits(seconds);

}

function timeToTwoDigits(time) {
    return time < 10 ? `0${time}` : time;
}

ticking();

setInterval(ticking , 1000);

