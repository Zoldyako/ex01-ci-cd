<<<<<<< HEAD
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
=======
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const infoDiv = document.getElementById('info');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Reset do display de informações
      infoDiv.style.display = 'none';
      infoDiv.className = '';
  
      // Obter valores dos campos
      const nome = document.getElementById('nome').value.trim();
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmar-senha').value;
  
      // Validações
      if (!validarNome(nome)) {
        mostrarErro("Por favor, insira um nome válido (mínimo 3 caracteres)");
        return;
      }
  
      if (!validarSenha(senha)) {
        mostrarErro("A senha deve ter pelo menos 6 caracteres");
        return;
      }
  
      if (senha !== confirmarSenha) {
        mostrarErro("As senhas não coincidem");
        return;
      }
      //lol, if ai ai
      // Se todas as validações passarem
      redirecionarComMensagem();
    });
  
    // Funções de validação
    function validarNome(nome) {
      return nome.length >= 3;
    }
  
    function validarSenha(senha) {
      return senha.length >= 6;
    }
  
    // Função de redirecionamento
    function redirecionarComMensagem() {
      // Cria um elemento para exibir a mensagem antes do redirecionamento
      const mensagemDiv = document.createElement('div');
      mensagemDiv.textContent = 'Legal, você é você mesmo!!';
      mensagemDiv.style.position = 'fixed';
      mensagemDiv.style.top = '20px';
      mensagemDiv.style.left = '50%';
      mensagemDiv.style.transform = 'translateX(-50%)';
      mensagemDiv.style.backgroundColor = '#e8f5e9';
      mensagemDiv.style.color = '#2e7d32';
      mensagemDiv.style.padding = '15px';
      mensagemDiv.style.borderRadius = '5px';
      mensagemDiv.style.zIndex = '1000';
      mensagemDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
      
      document.body.appendChild(mensagemDiv);
      
      // Redireciona após 2 segundos (tempo para ler a mensagem)
      setTimeout(() => {
        window.location.href = 'mensagem-sucesso.html'; // Altere para a página desejada
      }, 2000);
    }
  
    // Função de feedback de erro (mantida para os casos de validação)
    function mostrarErro(mensagem) {
      infoDiv.textContent = mensagem;
      infoDiv.style.display = 'block';
      infoDiv.style.backgroundColor = '#ffebee';
      infoDiv.style.color = '#c62828';
    }
  });
>>>>>>> back_end
