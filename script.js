function abrir(secao) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
  });

  const atual = document.getElementById(secao);
  if (atual) {
    atual.classList.add('active');
  }
}

function enviar() {
  alert("Respostas enviadas!");
}

function enviarMsg() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");

  const texto = input.value.trim();
  if (texto === "") return;

  const nome = document.createElement("div");
  nome.className = "nome";
  nome.innerText = "Anônimo";

  const msg = document.createElement("div");
  msg.className = "msg aluno";
  msg.innerText = texto;

  chat.appendChild(nome);
  chat.appendChild(msg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
