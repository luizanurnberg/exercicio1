import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import arraySizeException from "./exceptions/arraySizeException.mjs";


inquirer.prompt([
    { name: 'numbers', message: 'Insira 5 valores inteiros, sendo necessário separá-los por vírgula:' }
]).then((answer) => {
    var inputNumbers = answer.numbers
    var arrayOfNumbers = inputNumbers.split(',')
    
    if (!answer.numbers) {
        emptyFieldException()
    } else
        if (arrayOfNumbers.length != 5) {
            arraySizeException()
        }
    /*
        Caso os valores inseridos forem válidos, então será feita a validacao de par ou impar conforme a regra:
        - Se divisível por 2, então deverá ser impresso o número + que ele é par
        - Caso contrário, entao é definido que o numero é ímpar
    */
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 == 0) {
            console.log(`O número ${arrayOfNumbers[i]} é par`)
        } else {
            console.log(`O número ${arrayOfNumbers[i]} é ímpar`)
        }
    }
}).catch((error) => console.log(error))