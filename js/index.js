import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import { outputCalc, outputTimer } from './output.js'

const form = document.getElementById('dateCalc');

//реализация появления/скрытия дива с калькулятором и таймером (добавление/удаление класса display:none)

const outputDateCalc = document.getElementById('output_calc'),
    outputTime = document.getElementById('output_timer');
outputDateCalc.onclick = () => {
    outputCalc();
}
outputTime.onclick = () => {
    outputTimer();
}


//Калькулятор дат (списан с урока, небольшие изменения в модулях (поменял местами переменные в getDateDiff))

form.onclick = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Выберите дату!')
        // console.log('Выберите дату!')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }

    // console.log(firstDate, secondDate)
}

//Таймер

let interval;
const input = document.getElementById('input'),
    blockTime = document.querySelector('.time'),
    sound = new Howl({
        src: ['../sound/02599.mp3'],
        loop: false
    })

blockTime.innerHTML = 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        blockTime.innerHTML = 0;
    }

    blockTime.innerHTML = input.value;

    clearInterval(interval);
    interval = setInterval(substractTime, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    blockTime.innerHTML = 0;
    input.value = 0;
});

function substractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
        input.value--;
        if (input.value < 0 || blockTime.innerHTML == 0) {
            blockTime.innerHTML = 0;
            input.value = 0;

            sound.play();
        }
    } else {
        clearInterval(interval);
    }
}