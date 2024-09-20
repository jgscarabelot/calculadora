document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                clearDisplay();
            } else if (value === '←') {
                deleteLast();
            } else if (value === '=') {
                calculate();
            } else {
                appendToDisplay(value);
            }
        });
    });

    function clearDisplay() {
        display.value = '';
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    }
});

function calculateSquareRoot() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert("Por favor, insira um número positivo.");
    }
}

function calculatePercentage() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    display.value = value / 100;
}