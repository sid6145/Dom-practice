let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let orange = document.getElementById('orange')

red.addEventListener('click', function(){
    document.querySelector('.main').classList.toggle('red')
})
green.addEventListener('click', function(){
    document.querySelector('.main').classList.toggle('green')
})
blue.addEventListener('click', function(){  
 document.querySelector('.main').classList.toggle('blue')
})
yellow.addEventListener('click', function(){
    document.querySelector('.main').classList.toggle('yellow')
})
orange.addEventListener('click', function(){
    document.querySelector('.main').classList.toggle('orange')
})