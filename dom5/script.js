let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav-items')


burger.addEventListener('click', function(){
   nav.classList.toggle('nav-active')

   burger.classList.toggle('toggle');
})


