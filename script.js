let number1 = 0
let number2 = 0
let operator = ""
let displayValue = document.querySelector(".display")
let empty = true
let operatorClicked = false
const numberButtons = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
const backspaceButton = document.querySelector(".backspace")
const dotButton = document.querySelector(".dot")
const plusMinusButton = document.querySelector(".plusminus")
dotButton.disabled = false

plusMinusButton.addEventListener("click", () => clickPlusMinus())
equalButton.addEventListener("click", () => clickEqual())
clearButton.addEventListener("click", () => clickClear())
backspaceButton.addEventListener("click", () => clickBack())
dotButton.addEventListener("click", () => clickDot())

function add (a, b){
    result = parseFloat(a) + parseFloat(b)
    return result
}

function substract (a, b){
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}
function power (a, b) {
    return a**b
}

function operate(number1, operator, number2){
    number2 = parseFloat(number2)
    if (operator === "+"){
        return add(number1, number2)
    }
    else if (operator === "-"){
        return substract(number1, number2)
    }
    else if (operator === "*"){
        return multiply(number1, number2)
    }
    else if (operator === "/" && number2 !== 0){
       return divide(number1, number2)
    }
    else if (operator === "^"){
        return power(number1, number2)
    }
    else return "Error"
}

function clickDisplay(clickedButton){
        if(!operatorClicked && dotButton.disabled == true){
        number1 = 0 + "." + clickedButton
        displayValue.innerText = number1
        if (parseFloat(number1) !== 0){
            empty = false
           }
        }
        if(!operatorClicked && dotButton.disabled == false){
        number1 = clickedButton
        displayValue.innerText = clickedButton 
        if (parseFloat(number1) !== 0){
            empty = false
           }
        }
        if(operatorClicked){
        number2 = clickedButton
        displayValue.innerText = clickedButton 
         if (number2 !== 0){
           empty = false
        }}
    }  

function clickOperator(operatorValue){
    operatorClicked = true
    dotButton.disabled = false
    empty = true
    operator = operatorValue
    displayValue.innerText = number1 + " " + operatorValue

}
function clickEqual() {
    if(operatorClicked){
    result = operate(number1, operator, number2)
    result = parseFloat(result.toFixed(5))
    displayValue.innerText = number1 + "" + operator + "" + number2 + " = " + result
    number1 = parseInt(result)
    number2 = 0
    operatorClicked = false
    empty = true
    }
    else{
        displayValue.innerText = number1
    }
}

function clickClear(){
    number1 = 0
    number2 = 0
    operatorClicked = false
    dotButton.disabled = false
    empty = true
    displayValue.innerText = 0
}

function clickBack(){
    if(!operatorClicked){
        const newNumber = parseInt(number1.toString().slice(0, -1))
        number1 = newNumber
        displayValue.innerText = number1
    }
    else if (operatorClicked && number2 == 0){
        operator = ""
        operatorClicked = false
        empty = false
        displayValue.innerText = number1
    }
    else if (operatorClicked && number2 !== 0){
        const newNumber = parseInt(number2.toString().slice(0, -1))
        number2 = newNumber
        displayValue.innerText = number2
    }
}

function clickDot(){
    if(!operatorClicked && dotButton.disabled == false){
        number1 = number1 + "."
        displayValue.innerText = number1
        dotButton.disabled = true
    }
    else if (operatorClicked && dotButton.disabled == false){
        number2 = number2 + "."
        displayValue.innerText = number2
        dotButton.disabled = true
    }
}

function clickPlusMinus(){
    if(!operatorClicked){
        number1 = -number1
        displayValue.innerText = number1
}
    if(operatorClicked){
        number2 = -number2
        displayValue.innerText = number2
    }
}

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        if(!operatorClicked){
        const operatorValue = button.textContent
        clickOperator(operatorValue)
        }
        if(operatorClicked && number2 !== 0){
            clickEqual()
            const operatorValue = button.textContent
            clickOperator(operatorValue)
        }})
})

numberButtons.forEach(button => {
    button.addEventListener ("click", () => {
        if(!operatorClicked){
        const numberValue = button.textContent
        clickDisplay(empty ? numberValue : number1 + numberValue)
        }
        if(operatorClicked){
        const numberValue = button.textContent
        clickDisplay(empty ? numberValue : number2 + numberValue)
        }
    })
})

