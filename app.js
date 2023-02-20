const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulative

function calculate(button) {
    const value = button.textContent

    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    }
    else if (value === "="){
        screenDisplay.textContent = eval(accumulative)
    }
    else{
        calculation.push(value)
        accumulative = calculation.join('')
        screenDisplay.textContent = accumulative
    }
}

buttons.forEach(button => 
    button.addEventListener('click', () => calculate(button)))