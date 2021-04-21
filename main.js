const laughBtn = document.getElementById('laugh');
const smileBtn = document.getElementById('smile');
const flushedBtn = document.getElementById('flushed');
const frownBtn = document.getElementById('frown');
const tearBtn = document.getElementById('tear');
let days = document.querySelectorAll('.day');
const resetBtn = document.getElementById('reset');

laughBtn.addEventListener('click', darkGreen);
smileBtn.addEventListener('click', green);
flushedBtn.addEventListener('click', grass);
frownBtn.addEventListener('click', orange);
tearBtn.addEventListener('click', red);

function darkGreen() {
     days.forEach(day => {
        day.addEventListener('click', (e) => {
          e.target.style.background = 'rgb(32, 82, 32)';
          e.target.style.color = 'white';
        })
    })
}

function green() {
     days.forEach(day => {
        day.addEventListener('click', (e) => {
          e.target.style.background = 'green';
          e.target.style.color = 'white';
        })
    })
}

function grass() {
     days.forEach(day => {
        day.addEventListener('click', (e) => {
          e.target.style.background = 'rgb(138, 216, 12)';
          e.target.style.color = 'white';
        })
    })
}

function orange() {
     days.forEach(day => {
        day.addEventListener('click', (e) => {
          e.target.style.background = 'orange';
          e.target.style.color = 'white';
        })
    })
}

function red() {
     days.forEach(day => {
        day.addEventListener('click', (e) => {
          e.target.style.background = 'rgb(255, 60, 0)';
          e.target.style.color = 'white';
        })
    })
}

resetBtn.addEventListener('click', () => {
    days.forEach(day => {
        day.style.background = 'grey';
        day.style.color = 'black';
    })
})