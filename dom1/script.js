let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let orange = document.getElementById('orange')
let main = document.querySelector('.main')
let previous = 'red'

red.addEventListener('click', function(){
    main.classList.remove(previous)
    main.classList.add('red')
    previous = 'red'
})
green.addEventListener('click', function(){
    main.classList.remove(previous)
    main.classList.add('green')
    previous = 'green'
})
blue.addEventListener('click', function(){  
    main.classList.remove(previous)
    main.classList.add('blue')
    previous = 'blue'
})
yellow.addEventListener('click', function(){
    main.classList.remove(previous)
    main.classList.add('yellow')
    previous = 'yellow'
})
orange.addEventListener('click', function(){
    main.classList.remove(previous)
    main.classList.add('orange')
    previous = 'orange'
})