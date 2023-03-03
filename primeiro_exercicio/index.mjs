import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import invalidInputException from "./exceptions/invalidInputException.mjs";

inquirer.prompt([
    { name: 'firstNumber', message: 'Insira o primeiro número inteiro: ' },
    { name: 'secondNumber', message: 'Insira o segundo número inteiro: ' },
]).then((answers) => {
    if (!answers.firstNumber || !answers.secondNumber) {
        emptyFieldException()
    } else
        if (!Number.isInteger(parseInt(answers.firstNumber)) || !Number.isInteger(parseInt(answers.secondNumber))) {
            invalidInputException()
        }
    //caso os valores inseridos passem pela validacao, entao é feito o cálculo conforme a regra:
    //1 - se a soma dos valores for maior que 20, deve ser acrescentado mais 8 no valor final
    //2 - se a soma dos valores for menor ou igual a 20, entao é subtraído 5 do valor final
    var sum = (parseInt(answers.firstNumber) + parseInt(answers.secondNumber))
    if (sum > 20) {
        sum += 8
        console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} + 8 é: ${sum}`)
    } else
        if (sum <= 20) {
            sum -= 5
            console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} - 5 é: ${sum}`)
        }
}).catch((error) => console.log(error))


