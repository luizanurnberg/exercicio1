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
            if (parseInt(answer.number) > 12 || parseInt(answer.number) <= 0) {
                throw new Error('Você inseriu um valor inválido, não há um mês correspondente a esse número!') //valida se o valor inserido tem um mes correspondente
            }
    //caso o valor inserido passe pela validacao, entao é impresso o mes conforme a regra:
    //1 - janeiro , 2 - fevereiro , 3 - março , 4 - abril , 5 - maio , 6 - junho ,
    //7 - julho , 8 - agosto , 9 - setembro , 10 - outubro , 11 - novembro , 12 - dezembro
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