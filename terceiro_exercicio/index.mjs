import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import arraySizeException from "./exceptions/arraySizeException.mjs";

inquirer.prompt([
    { name: 'numbers', message: 'Insira 3 valores inteiros, sendo necessário separá-los por vírgula:' }
]).then((answer) => {
    var inputNumbers = answer.numbers
    var arrayOfNumbers = inputNumbers.split(',')
    
    if (!answer.numbers) {
        emptyFieldException()
    } else
        if (arrayOfNumbers.length != 3) {
            arraySizeException()
        }
    /*
        Caso os valores inseridos forem válidos, será impresso em ordem descrescente com o auxilio do método .sort()
    */
    arrayOfNumbers.sort((a, b) => b - a)
    console.log(arrayOfNumbers)

}).catch((error) => console.log(error))