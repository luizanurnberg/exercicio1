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
            if (parseInt(answer.number) > 12 || parseInt(answer.number) <= 0) {
                valueSmaller()
            }
    /*
        Caso os valores inseridos forem válidos, será impresso o mês correspondente ao número digitado
    */
    const number = parseInt(answer.number)

    switch (number) {
        case 1:
            console.log('O valor inserido corresponde ao mes de Janeiro')
            break;
        case 2:
            console.log('O valor inserido corresponde ao mes de Fevereiro')
            break;
        case 3:
            console.log('O valor inserido corresponde ao mes de Março')
            break;
        case 4:
            console.log('O valor inserido corresponde ao mes de Abril')
            break;
        case 5:
            console.log('O valor inserido corresponde ao mes de Maio')
            break;
        case 6:
            console.log('O valor inserido corresponde ao mes de Junho')
            break;
        case 7:
            console.log('O valor inserido corresponde ao mes de Julho')
            break;
        case 8:
            console.log('O valor inserido corresponde ao mes de Agosto')
            break;
        case 9:
            console.log('O valor inserido corresponde ao mes de Setembro')
            break;
        case 10:
            console.log('O valor inserido corresponde ao mes de Outubro')
            break;
        case 11:
            console.log('O valor inserido corresponde ao mes de Novembro')
            break;
        case 12:
            console.log('O valor inserido corresponde ao mes de Dezembro')
            break;
    }

}).catch((error) => console.log(error))