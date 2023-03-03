import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import invalidInputException from "./exceptions/invalidInputException.mjs";

inquirer.prompt([
    { name: 'firstNumber', message: 'Insira o primeiro número inteiro:' },
    { name: 'secondNumber', message: 'Insira o segundo número inteiro:' },
    { name: 'thirdNumber', message: 'Insira o terceiro número inteiro:' },
]).then((answer) => {
    if (!answer.firstNumber || !answer.secondNumber || !answer.thirdNumber) {
        emptyFieldException()
    } else
        if (!Number.isInteger(parseInt(answer.firstNumber)) || !Number.isInteger(parseInt(answer.secondNumber)) || !Number.isInteger(parseInt(answer.thirdNumber))) {
            invalidInputException()
        }
    //caso os valores inseridos passem pela validacao, entao serao impressos os numeros em ordem decrescente:
    //colocado em um array para utilizar o .sort 
    let numbers = [parseInt(answer.firstNumber), parseInt(answer.secondNumber), parseInt(answer.thirdNumber)]
    numbers.sort((a, b) => b - a)
    console.log(numbers)
}).catch((error) => console.log(error))