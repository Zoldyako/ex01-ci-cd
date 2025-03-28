document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const infoDiv = document.getElementById('info');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
        //lol

    
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
  
      // Se todas as validações passarem
      mostrarSucesso("Cadastro validado com sucesso!");
      // form.submit(); // Descomente para enviar o formulário após validação
    });
    // if não sei
    // Funções de validação
    function validarNome(nome) {
      return nome.length >= 3;
    }
  
    function validarSenha(senha) {
      return senha.length >= 6;
    }
  
    // Funções de feedback - Acho que funciona kk
    function mostrarErro(mensagem) {
      infoDiv.textContent = mensagem;
      infoDiv.style.display = 'block';
      infoDiv.style.backgroundColor = '#ffebee';
      infoDiv.style.color = '#c62828';
    }
  
    function mostrarSucesso(mensagem) {
      infoDiv.textContent = mensagem;
      infoDiv.style.display = 'block';
      infoDiv.style.backgroundColor = '#e8f5e9';
      infoDiv.style.color = '#2e7d32';
    }
  });