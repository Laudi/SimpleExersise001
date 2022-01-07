
const changeColor = (evt) => {
    evt.target.style.color = evt.target.style.color === 'black' ? 'lightgrey' : 'black'; 
    if (evt.target.style.color === 'black') {
        evt.target.style.backgroundColor = 'white';
    } else {
        evt.target.style.backgroundColor = 'lightgrey';
    }
}

function changeStyle (evt) {
    evt.target.style.textDecoration = 'line-through';
    evt.target.removeEventListener('click', changeStyle);
}

let lis = document.querySelectorAll('li');

lis.forEach((li) => {
    li.addEventListener('click', changeColor);
    li.addEventListener('click', changeStyle);
});