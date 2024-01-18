function add (a, b){
    result = parseInt(a) + parseInt(b)
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

let number1 = 0
let number2 = 0
let operator = ""
let displayValue = document.querySelector(".display")
let empty = true
let operatorClicked = false
const numberButtons = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")

function operate(number1, operator, number2){
    if (operator === "+"){
        return add(number1, number2)
    }
    else if (operator === "-"){
        return substract(number1, number2)
    }
    else if (operator === "*"){
        return multiply(number1, number2)
    }
    else if (operator === "/"){
        return divide(number1, number2)
    }
    else return "Error"
}
console.log(operate(8, "*", 9))

function displayClick(clickedButton){
        if(!operatorClicked){
        number1 = clickedButton
        console.log(number1)
        displayValue.innerText = clickedButton 
        if (number1 !== 0){
            empty = false
           }
        }
    if(operatorClicked){
      number2 = clickedButton
       displayValue.innerText = clickedButton 
       if (number2 !== 0){
           empty = false
       }
       console.log(number1)
       console.log(number2)
       }
    }  


function clickOperator(operatorValue){
    operatorClicked = true
    empty = true
    operator = operatorValue
    displayValue.innerText = number1 + " " + operatorValue

}
function clickEqual() {
    if(operatorClicked){
    result = operate(number1, operator, number2)
    displayValue.innerText = number1 + "" + operator + "" + number2 + " = " + result
    number1 = parseInt(result)
    number2 = 0
    operatorClicked = false
    empty
    }
    else{
        displayValue.innerText = number1
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
        displayClick(empty ? numberValue : number1 + numberValue)
        }
        if(operatorClicked){
        const numberValue = button.textContent
        displayClick(empty ? numberValue : number2 + numberValue)
        }
    })
})

equalButton.addEventListener("click", () => clickEqual())
    


