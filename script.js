function abrir(secao, botao) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(secao).classList.add("active");

  document.querySelectorAll(".navbar button").forEach(b => b.classList.remove("active"));
  if(botao) botao.classList.add("active");
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

function toggleDark() {
  document.body.classList.toggle("dark");
}
