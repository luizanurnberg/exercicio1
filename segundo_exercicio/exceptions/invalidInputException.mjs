//valida se o valor incluído no input é realmente um número 
function invalidInputException() {
    throw new Error('O sistema apenas aceita números inteiros, você inseriu um valor inválido!')
}

export default invalidInputException;