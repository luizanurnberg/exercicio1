import inquirer from "inquirer";

inquirer.prompt([
    { name: 'firstNumber', message: 'Insira o primeiro número inteiro:' },
    { name: 'secondNumber', message: 'Insira o segundo número inteiro:' },
    { name: 'thirdNumber', message: 'Insira o terceiro número inteiro:' },
]).then((answer) => {
    if (!answer.firstNumber || !answer.secondNumber || !answer.thirdNumber) {
        throw new Error('Você não inseriu nenhum número, tente novamente!') //valida se foi inserido algo no input
    } else
        if (!Number.isInteger(parseInt(answer.firstNumber)) || !Number.isInteger(parseInt(answer.secondNumber)) || !Number.isInteger(parseInt(answer.thirdNumber))) {
            throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!') //valida se foi inserido um NaN
        }
    //caso os valores inseridos passem pela validacao, entao serao impressos os numeros em ordem decrescente:
    //colocado em um array para utilizar o .sort 
    let numbers = [parseInt(answer.firstNumber), parseInt(answer.secondNumber), parseInt(answer.thirdNumber)]
    numbers.sort((a, b) => b - a)
    console.log(numbers)
}).catch((error) => console.log(error))