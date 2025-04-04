const usuarios = [
    { "login": "João", "senha": "Abc123" },
    { "login": "Maria", "senha": "Cde456" },
    { "login": "Pedro", "senha": "Efj789" },
    { "login": "Ana", "senha": "Ghi012" },
    { "login": "Lucas", "senha": "Ijk345" },
    { "login": "Juliana", "senha": "Klm678" },
    { "login": "Gabriel", "senha": "Mno901" },
    { "login": "Fernanda", "senha": "Opq234" },
]

function findUser(login, senha) {
  let usuario = usuarios.find(user => user.login === login && user.senha === senha);

  return usuario ? "Sucesso" : "Erro"
}

const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const form = document.querySelector("form");
const infoElement = document.querySelector("#info");


form.addEventListener('submit', (event) => {
  event.preventDefault();
  let usuarioEncontrado = usuarios.find(usuario =>
    usuario.login === nome.value &&
    usuario.senha === senha.value
  );

  if (usuarioEncontrado) {
    infoElement.innerText = "Usuário logado com sucesso";
    infoElement.style.backgroundColor = "#1b263b";
    infoElement.style.color = "whitesmoke";
    infoElement.style.display = "block";

  } else {
    infoElement.innerText = "Erro. Não foi possível logar";
    infoElement.style.backgroundColor = "#f55353";
    infoElement.style.color = "black";
    infoElement.style.display = "block";
  };

});
