import inquirer from "inquirer";

inquirer.prompt([
    { name: 'number', message: 'Insira um número inteiro:' }
]).then((answer) => {
    if (!answer.number) {
        throw new Error('Você não inseriu nenhum número, tente novamente!') //valida se foi inserido algo no input
    } else
        if (!Number.isInteger(parseInt(answer.number))) {
            throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!') //valida se foi inserido um NaN
        } else
            if (parseInt(answer.number) <= 1) {
                throw new Error('O número precisa ser maior que 1') //valida se o valor inserido tem um mes correspondente
            }
    //caso o valor inserido passe pela validacao, entao é feita a impressao conforme a regra:
    //for fará a impressao dos valores de 1 até o valor inserido
    var number = parseInt(answer.number)
    for(var i = 1; i <= number; i++){
        console.log(i)
    }

}).catch((error) => console.log(error))