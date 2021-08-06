const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
function setDate(){
    const now = new Date
    const seconds = now.getSeconds()
    const secondsDegree = (((seconds / 60) * 360) + 90)
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    console.log(seconds)

    const minutes = now.getMinutes()
    const minutesDegree = (((minutes / 60) * 360) + 90)
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`

    const hour = now.getHours()
    const hourDegree = (((min / 12) * 360) + 90)
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000)