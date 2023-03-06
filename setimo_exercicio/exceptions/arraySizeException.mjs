//valida se foi incluído a quantidade de valores necessárias para acessar a aplicacao
function arraySizeException() {
    throw new Error('Você precisa inserir 10 números para ter acesso a aplicação!')
}

export default arraySizeException;