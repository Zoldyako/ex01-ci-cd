const usuarios = [
    { "login": "João", "senha": "AB123" },
    { "login": "Maria", "senha": "CD456" },
    { "login": "Pedro", "senha": "EF789" },
    { "login": "Ana", "senha": "GH012" },
    { "login": "Lucas", "senha": "IJ345" },
    { "login": "Juliana", "senha": "KL678" },
    { "login": "Gabriel", "senha": "MN901" },
    { "login": "Fernanda", "senha": "OP234" },
];

function findUser(login, senha) {
    let usuario = usuarios.find(user => user.login === login && user.senha === senha);
    
    if (usuario) {
        // Redireciona para a página de sucesso
        window.location.href = "mensagem-sucesso.html";
        return "Sucesso"; // (Opcional: só será exibido se o redirecionamento falhar)
    } else {
        return "Erro"; // Pode exibir uma mensagem de erro ou redirecionar para uma página de erro
    }
}

// Exemplo de uso:
console.log(findUser("João", "AB123")); 
