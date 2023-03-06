import inquirer from "inquirer";
import emptyFieldException from "./exceptions/emptyFieldException.mjs";
import arraySizeException from "./exceptions/arraySizeException.mjs";


inquirer.prompt([
    { name: 'firstInput', message: 'Insira 5 valores inteiros, sendo necessário separá-los por vírgula:' },
    { name: 'secondInput', message: 'Insira mais 5 valores inteiros, sendo necessário separá-los por vírgula:' }
]).then((answers) => {
    var firstInput = answers.firstInput
    var firstArrayOfNumbers = firstInput.split(',')
    var secondInput = answers.secondInput
    var secondArrayOfNumbers = secondInput.split(',')

    if (!answers.firstInput || !answers.secondInput) {
        emptyFieldException()
    } else
        if (firstArrayOfNumbers.length != 5 || secondArrayOfNumbers.length != 5) {
            arraySizeException()
        }
    /*
        Caso os valores inseridos forem válidos, é feita a comparação com auxílio do .filter e .includes
    */
    const equalValues = secondArrayOfNumbers.filter(number => firstArrayOfNumbers.includes(number))
    if (equalValues == 0) {
        console.log('Você não incluiu nenhum valor igual, tente novamente!')
    } else {
        console.log(`Você incluiu valores iguais, sendo eles: ${equalValues}`)
    }
}).catch((error) => console.log(error))