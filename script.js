<<<<<<< HEAD
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const form = document.querySelector("form")
const infoElement = document.querySelector("#info")

const usuario = [
    { "login": "João", "email": "joao@email.com", "senha": "AB123" },
    { "login": "Maria", "email": "maria@email.com", "senha": "CD456" },
    { "login": "Pedro", "email": "pedro@email.com", "senha": "EF789" },
    { "login": "Ana", "email": "ana@email.com", "senha": "GH012" },
    { "login": "Lucas", "email": "lucas@email.com", "senha": "IJ345" },
    { "login": "Juliana", "email": "juliana@email.com", "senha": "KL678" },
    { "login": "Gabriel", "email": "gabriel@email.com", "senha": "MN901" },
    { "login": "Fernanda", "email": "fernanda@email.com", "senha": "OP234" },
]


form.addEventListener('submit', (event) => {
    
    let usuarioEncontrado = usuario.find(usuario => 
        usuario.login === nome.value && 
        usuario.email === email.value && 
        usuario.senha === senha.value
    )

    if (usuarioEncontrado) {
        infoElement.innerText = "Usuário logado com sucesso"
        infoElement.style.backgroundColor = "#1b263b"
        infoElement.style.color = "whitesmoke"
        infoElement.style.display = "block"
    }

    else {
        infoElement.innerText = "Erro. Não foi possível logar"
        infoElement.style.backgroundColor = "#f55353"
        infoElement.style.color = "black"
        infoElement.style.display = "block"
    }

    event.preventDefault()
})
=======
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
>>>>>>> back_end
