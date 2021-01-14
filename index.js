const refs = {
    days: document.querySelector('span[data-value="days"]'), //получаю элемент тега days
    hours: document.querySelector('span[data-value="hours"]'), //получаю элемент тега hours
    mins: document.querySelector('span[data-value="mins"]'), //получаю элемент тега mins
    secs: document.querySelector('span[data-value="secs"]'), //получаю элемент тега secs
};
const targetDate = new Date('Jul 17, 2021'); //дата, от которой нужен отсчет

setInterval(function () {
    getCountdown();
}, 1000);

function getCountdown() {
    const currentDate = new Date().getTime();
    const time = targetDate - currentDate;

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}
