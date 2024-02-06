
//window.alert('Se você der reload na página eu vou saber!')
const AlreadyOpened = localStorage.getItem("@Already-opened")

const alreadyOpened = true
const inputPassword = document.querySelector<HTMLInputElement>('#password')
localStorage.setItem("@Already-opened", JSON.stringify(alreadyOpened))
const jaAberto = localStorage.getItem("@Already-opened")
console.log(jaAberto)

let amountSecondsPassed : number = 0;

const displayHours = document.getElementById('hour')
const displayMinutes = document.getElementById('minutes')
const displaySeconds = document.getElementById('seconds')


function alterTiming(hoursAmount : string, minutesAmount : string, secondsAmount : string) : void {
  displayHours!.textContent = String(hoursAmount)
  displayMinutes!.textContent = String(minutesAmount)
  displaySeconds!.textContent = String(secondsAmount)
}

console.log(displayHours)
let interval = setInterval(() => {
  amountSecondsPassed++
  
  const totalSeconds = 3 * 60 * 60
  const currentSeconds = totalSeconds - amountSecondsPassed 

  const minutesAmount = Math.floor((currentSeconds / 60)) 
  const baseMinutesAmount = Math.floor((currentSeconds / 60)/3) 
  const secondsAmount = currentSeconds % 60

  const hoursAmount = Math.floor(minutesAmount / 60)

  //console.log(hoursAmount, 'horas restantes')
  const minutes = String(baseMinutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")
  const hours = String(hoursAmount).padStart(2, '0')

  if(hoursAmount == 0 && minutesAmount == 0 && secondsAmount == 0)return window.alert('seu tempo acabou')
  alterTiming(hours, minutes, seconds )
  
  document.title = `${hours}:${minutes}:${seconds} `
}, 1000)

let passowrdEnigma = "edwardnigma"

const sendFormButton = document.querySelector<HTMLButtonElement>('.send')
const congratsDiv = document.querySelector<HTMLDivElement>('.code')
const form = document.getElementById('getpassword')

sendFormButton?.addEventListener('click', (event : Event) => {
  event.preventDefault()
  console.log('clicou')
 
    const passwordInputValue = inputPassword!.value
    console.log(passwordInputValue)
    if(passwordInputValue == passowrdEnigma ){
      if(congratsDiv)congratsDiv.classList.remove('hide')
      clearTimeout(interval)
    }
  
 
})


