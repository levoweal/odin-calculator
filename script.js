const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".number");
const dotBtn = document.querySelector('.dot');
const operBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector('.backspace');

let num1 = '';
let num2 = '';
let operator = '';


numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        if (operator) {
            num2 += numBtn.value;
            display.textContent = `${num1} ${operator} ${num2}`;
        } else {
            num1 += numBtn.value; 
            display.textContent = `${num1}`;
        }
    })
});

dotBtn.addEventListener('click', () => {
    if (operator && num2 !== "" && !num2.includes(".")) {
        num2 += dotBtn.value;
        display.textContent = `${num1} ${operator} ${num2}`;
    } else if (!num2 && num1 !== "" && !num1.includes(".")) {
        num1 += dotBtn.value; 
        display.textContent = `${num1}`;
    }
})

operBtns.forEach(operBtn => {
    operBtn.addEventListener('click', () => {
        if (operator === '+' && num2) {
            num1 = `${Number(num1) + Number(num2)}`;
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '-' && num2) {
            num1 = `${Number(num1) - Number(num2)}`;
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '×' && num2) {
            num1 = `${+(Number(num1) * Number(num2)).toFixed(2)}`;
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '/' && num2) {
            if (+num2 === 0) {
                alert("Can't do that :)");
                num2 = '';
                operator = operBtn.value;
                display.textContent = `${num1} ${operator}`
            } else {
                num1 = `${+(Number(num1) / Number(num2)).toFixed(2)}`;
                num2 = '';
                operator = operBtn.value;
                display.textContent = `${num1} ${operator}`
            }
        } else if (num1) {
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`;
        }
    })
})

equalsBtn.addEventListener('click', () => {
    if (operator === '+' && num2) {
        display.textContent = `${Number(num1) + Number(num2)}`;
        num1 = '';
        num2 = '';
        operator = '';
    } else if (operator === '-' && num2) {
        display.textContent = `${Number(num1) - Number(num2)}`;
        num1 = '';
        num2 = '';
        operator = '';
    } else if (operator === '×' && num2) {
        display.textContent = `${+(Number(num1) * Number(num2)).toFixed(2)}`;
        num1 = '';
        num2 = '';
        operator = '';
    } else if (operator === '/' && num2) {
        if (+num2 === 0) {
            alert("Can't do that :)");
            num2 = '';
            display.textContent = `${num1} ${operator}`
        } else {
            display.textContent = `${+(Number(num1) / Number(num2)).toFixed(2)}`;
            num1 = '';
            num2 = '';
            operator = '';
        }
    }
})

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
})

backspaceBtn.addEventListener('click', () => {
    if (num2) {
        num2 = num2.slice(0, -1);
        display.textContent = `${num1} ${operator} ${num2}`;
    } else if (operator) {
        operator = '';
        display.textContent = `${num1}`;
    } else if (num1) {
        num1 = num1.slice(0, -1);
        display.textContent = `${num1}`;
    }
})