"use strict";
//window.alert('Se você der reload na página eu vou saber!')
const AlreadyOpened = localStorage.getItem("@Already-opened");
const alreadyOpened = true;
const inputPassword = document.querySelector('#password');
localStorage.setItem("@Already-opened", JSON.stringify(alreadyOpened));
const jaAberto = localStorage.getItem("@Already-opened");
console.log(jaAberto);
let amountSecondsPassed = 0;
const displayHours = document.getElementById('hour');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
function alterTiming(hoursAmount, minutesAmount, secondsAmount) {
    displayHours.textContent = String(hoursAmount);
    displayMinutes.textContent = String(minutesAmount);
    displaySeconds.textContent = String(secondsAmount);
}
console.log(displayHours);
let interval = setInterval(() => {
    amountSecondsPassed++;
    const totalSeconds = 3 * 60 * 60;
    const currentSeconds = totalSeconds - amountSecondsPassed;
    const minutesAmount = Math.floor((currentSeconds / 60));
    const baseMinutesAmount = Math.floor((currentSeconds / 60) / 3);
    const secondsAmount = currentSeconds % 60;
    const hoursAmount = Math.floor(minutesAmount / 60);
    //console.log(hoursAmount, 'horas restantes')
    const minutes = String(baseMinutesAmount).padStart(2, "0");
    const seconds = String(secondsAmount).padStart(2, "0");
    const hours = String(hoursAmount).padStart(2, '0');
    if (hoursAmount == 0 && minutesAmount == 0 && secondsAmount == 0)
        return window.alert('seu tempo acabou');
    alterTiming(hours, minutes, seconds);
    document.title = `${hours}:${minutes}:${seconds} `;
}, 1000);
let passowrdEnigma = "edwardnigma";
if (jaAberto == 'true') {
    alert('nao era pra vc ter feito isso');
    clearInterval(interval);
    passowrdEnigma = " sdnjkl322hyikujkanjkl3231dnjkasdn321kjasdnjkasdnjkasdnajksdnjkas2312njkasdnjksad";
}
const sendFormButton = document.querySelector('.send');
const congratsDiv = document.querySelector('.code');
const form = document.getElementById('getpassword');
sendFormButton === null || sendFormButton === void 0 ? void 0 : sendFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou');
    const passwordInputValue = inputPassword.value;
    console.log(passwordInputValue);
    if (passwordInputValue == passowrdEnigma) {
        if (congratsDiv)
            congratsDiv.classList.remove('hide');
        clearTimeout(interval);
    }
});
