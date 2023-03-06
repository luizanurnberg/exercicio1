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
    /*
        Caso os valores inseridos forem válidos, será feito o cálculo conforme a regra
        sum - resultado da soma dos valores
        Regra de cálculo - se a soma resultar > 20, é acrescentado 8 ao valor final. Caso resulte <= 20, então é subtraído 5 do valor final
    */
    var sum = (parseInt(answers.firstNumber) + parseInt(answers.secondNumber))
    
    if (sum > 20) {
        sum += 8
        console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} + 8 é: ${sum}`)
    } else {
        sum -= 5
        console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} - 5 é: ${sum}`)
    }
}).catch((error) => console.log(error))


