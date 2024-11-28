let text = document.getElementById('text')
let bg = document.getElementById('bg1')
let hill = document.getElementById('hill')
let trees = document.getElementById('trees')
let right = document.getElementById('right')
let left = document.getElementById('left')

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.3 + 'px';
    hill.style.top = value * .6 + 'px';
    right.style.marginTop= value * .5 + 'px';
    left.style.marginTop= value * .5 + 'px';

});