import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import invalidInputException from "./exceptions/invalidInputException.mjs";
import valueSmaller from "./exceptions/valueSmaller.mjs";

inquirer.prompt([
    { name: 'number', message: 'Insira um número inteiro:' }
]).then((answer) => {
    if (!answer.number) {
        emptyFieldException()
    } else
        if (!Number.isInteger(parseInt(answer.number))) {
            invalidInputException()
        } else
            if (parseInt(answer.number) <= 1) {
                valueSmaller()
            }
    /*
        Caso os valores inseridos forem válidos, serão impressos todos os valores de 1 até o número digitado
    */
    var number = parseInt(answer.number)
    for (var i = 1; i <= number; i++) {
        console.log(i)
    }

}).catch((error) => console.log(error))