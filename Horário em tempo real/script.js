let timerActually;

function start_button() {
    timerActually = setInterval(seeTimeVision, 1);
}

function stop_button() {
    clearInterval(timerActually);
}

function seeTimeVision() {
    const day = new Date();
    const hour = day.getHours();
    const minutes = day.getMinutes();
    const second = day.getSeconds();
    const text = hour + ':' + minutes + ':' + second;

    document.querySelector('.general').innerHTML = text;
}