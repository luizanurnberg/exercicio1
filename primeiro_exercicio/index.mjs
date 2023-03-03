import inquirer from "inquirer";

inquirer.prompt([
    {name: 'firstNumber', message:'Insira o primeiro número inteiro: '},
    {name: 'secondNumber', message:'Insira o segundo número inteiro: '},
]).then((answers) =>{
    if(!answers.firstNumber || !answers.secondNumber){
        throw new Error('Você não inseriu nenhum número, tente novamente!')
    }else
        if(!Number.isInteger(parseInt(answers.firstNumber)) || !Number.isInteger(parseInt(answers.secondNumber))){
        throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!')
    }
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


