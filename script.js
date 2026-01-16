const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".number");
const operBtns = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

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

operBtns.forEach(operBtn => {
    operBtn.addEventListener('click', () => {
        if (operator === '+' && num2) {
            num1 = Number(num1) + Number(num2);
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '-' && num2) {
            num1 = Number(num1) - Number(num2);
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '*' && num2) {
            num1 = Number(num1) * Number(num2);
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else if (operator === '/' && num2) {
            num1 = Number(num1) / Number(num2);
            num2 = '';
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`
        } else {
            operator = operBtn.value;
            display.textContent = `${num1} ${operator}`;
        }
    })
})

equals.addEventListener('click', () => {
    if (operator === '+' && num2) {
        num1 = `${Number(num1) + Number(num2)}`;
        num2 = '';
        operator = '';
        display.textContent = `${num1}`;
    } else if (operator === '-' && num2) {
        num1 = `${Number(num1) - Number(num2)}`;
        num2 = '';
        operator = '';
        display.textContent = `${num1}`;
    } else if (operator === '*' && num2) {
        num1 = `${Number(num1) * Number(num2)}`;
        num2 = '';
        operator = '';
        display.textContent = `${num1}`;
    } else if (operator === '/' && num2) {
        num1 = `${Number(num1) / Number(num2)}`;
        num2 = '';
        operator = '';
        display.textContent = `${num1}`;
    }
})