import inquirer from "inquirer";

inquirer.prompt([
    { name: 'number', message: 'Insira um número inteiro:' }
]).then((answer) => {
    if (!answer.number) {
        throw new Error('Você não inseriu nenhum número, tente novamente!') //valida se foi inserido algo no input
    } else
        if (!Number.isInteger(parseInt(answer.number))) {
            throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!') //valida se foi inserido um NaN
        }
    //caso os valores inseridos passem pela validacao, entao é feito o cálculo conforme a regra:
    //1 - se não é divisível por nenhum
    //2 - se é divisível por 2
    //3 - se é divisível por 5
    //4 - se é divisível por 10
    var number = parseInt(answer.number)
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