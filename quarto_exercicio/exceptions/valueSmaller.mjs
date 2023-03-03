//valida se o valor está de acordo com a regra do sistema 
function valueSmaller() {
    throw new Error('Você inseriu um valor inválido, não há um mês correspondente a esse número')
}

export default valueSmaller;