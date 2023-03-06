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
    /*
        Caso os valores inseridos forem válidos, será feito a validação de acordo com o resto da divisão do número inserido em relação a 2, 5 e 10
        - Caso o resto não seja zero em nenhum dos casos, então o valor não é divisível
        - Utilizado if em todos os casos, pois alguns números podem ser divisíveis tanto por 2, 5 e 10 ao mesmo tempo
    */
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