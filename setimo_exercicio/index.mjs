import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import arraySizeException from "./exceptions/arraySizeException.mjs";


inquirer.prompt([
    { name: 'numbers', message: 'Insira 10 valores inteiros, sendo necessário separá-los por vírgula:' }
]).then((answer) => {
    var inputNumbers = answer.numbers
    var arrayOfNumbers = inputNumbers.split(',')
    
    if (!answer.numbers) {
        emptyFieldException()
    } else
        if (arrayOfNumbers.length != 10) {
            arraySizeException()
        }
    /*
        Caso os valores inseridos forem válidos, então será feita a validacao de maior ou menor com ajuda do Math.max e Math.min
        - Usado o spred operador ... para que os itens do array sejam enviados um a um, se nao usar será retornado um NaN
    */
    const biggestNumber = Math.max(...arrayOfNumbers)
    const smallestNumber = Math.min(...arrayOfNumbers)
    console.log(`O maior valor inserido foi: ${biggestNumber}`)
    console.log(`O menor valor inserido foi: ${smallestNumber}`)

}).catch((error) => console.log(error))