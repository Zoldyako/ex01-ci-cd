const usuarios = [
    { "login": "João", "senha": "AB123" },
    { "login": "Maria", "senha": "CD456" },
    { "login": "Pedro", "senha": "EF789" },
    { "login": "Ana", "senha": "GH012" },
    { "login": "Lucas", "senha": "IJ345" },
    { "login": "Juliana", "senha": "KL678" },
    { "login": "Gabriel", "senha": "MN901" },
    { "login": "Fernanda", "senha": "OP234" },
]


function findUser(login, senha) {

    let usuario = usuarios.find(user => user.login === login && user.senha === senha)

    return usuario ? "Sucesso" : "Erro"
}


console.log(findUser("João", "AB123"))