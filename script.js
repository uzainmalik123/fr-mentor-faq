let plusIcons = document.querySelectorAll('.icon-plus');
let minusIcons = document.querySelectorAll('.icon-minus');
let paragraphs = document.querySelectorAll('.para');
let plusIndex;

console.log(paragraphs)

plusIcons.forEach(plus => {
    plus.addEventListener('click', function() {
        plusIndex = plus.id - 1;
        plus.style.display = 'none';
        minusIcons[plusIndex].style.display = 'flex';
        paragraphs[plusIndex].style.display = 'block';
    })
})

minusIcons.forEach(minus => {
    minus.addEventListener('click', function() {
        plusIndex = minus.id - 1;
        minus.style.display = 'none';
        plusIcons[plusIndex].style.display = 'flex';
        paragraphs[plusIndex].style.display = 'none';
    })
})