import inquirer from "inquirer";

inquirer.prompt([
    {name: 'firstNumber', message:'Insira o primeiro número inteiro: '},
    {name: 'secondNumber', message:'Insira o segundo número inteiro: '},
]).then((answers) =>{
    if(!answers.firstNumber || !answers.secondNumber){ //valida se foi inserido algo no input
        throw new Error('Você não inseriu nenhum número, tente novamente!')
    }else
        if(!Number.isInteger(parseInt(answers.firstNumber)) || !Number.isInteger(parseInt(answers.secondNumber))){ //valida se foi inserido um NaN
        throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!')
    }
    //caso os valores inseridos passem pela validacao, entao é feito o cálculo conforme a regra:
    //se a soma dos valores for maior que 20, deve ser acrescentado mais 8 no valor final
    //se a soma dos valores for menor ou igual a 20, entao é subtraído 5 do valor final
    var sum = (parseInt(answers.firstNumber) + parseInt(answers.secondNumber))
    if(sum > 20){
        sum += 8
        console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} + 8 é: ${sum}`)
    }else
        if(sum <= 20){
            sum -= 5
            console.log(`O resultado de ${answers.firstNumber} + ${answers.secondNumber} - 5 é: ${sum}`)
        }
}).catch((error) => console.log(error))


