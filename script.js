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