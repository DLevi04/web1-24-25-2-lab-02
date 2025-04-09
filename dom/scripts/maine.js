const btnGroup = document.querySelector('.btn-group');
const prevBtn = btnGroup.querySelector('button.btn:nth-child(1)');
const numBtn = btnGroup.querySelector('button.btn:nth-child(2)');
const nextBtn = btnGroup.querySelector('button.btn:nth-child(3)');

let counter = 1;
if (prevBtn) {
    prevBtn.classList.add('btn-info'); //info osztály hozzáadása a gomb osztályához
}

if(numBtn) {
    numBtn.classList.add('btn-primary'); 
}

if(nextBtn) {
    nextBtn.classList.add('btn-info');
}

prevBtn.addEventListener('click', (e) => {
    counter = counter > 1 ? counter-- : counter;
});

