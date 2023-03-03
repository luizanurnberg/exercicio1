import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import invalidInputException from "./exceptions/invalidInputException.mjs";

inquirer.prompt([
    { name: 'number', message: 'Insira um número inteiro:' }
]).then((answer) => {
    if (!answer.number) {
        emptyFieldException()
    } else
        if (!Number.isInteger(parseInt(answer.number))) {
            invalidInputException()
        }
    //caso o valor inserido passe pela validacao, entao é feito o cálculo conforme a regra:
    //1 - se não é divisível por nenhum
    //2 - se é divisível por 2
    //3 - se é divisível por 5
    //4 - se é divisível por 10
    const number = parseInt(answer.number)
    if (number % 2 != 0 && number % 5 != 0 && number % 10 != 0) {
        console.log(`O número inserido não é divisível nem por 2, 5 ou 10. Tente novamente!`)
    } else {
        if (number % 2 == 0) {
            console.log(`O número ${number} é divisível por 2`)
        }
        if (number % 5 == 0) {
            console.log(`O número ${number} é divisível por 5`)
        }
        if (number % 10 == 0) {
            console.log(`O número ${number} é divisível por 10`)
        }
    }
}).catch((error) => console.log(error))