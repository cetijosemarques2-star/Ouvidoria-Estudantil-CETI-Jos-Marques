function abrir(secao) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(secao).classList.add('active');
}

function enviar() {
  alert("Respostas enviadas!");
}

function enviarMsg() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chatBox");

  if (msg.trim() === "") return;

  let nome = document.createElement("div");
  nome.classList.add("nome");
  nome.textContent = "Anônimo";

  let div = document.createElement("div");
  div.classList.add("msg", "aluno");
  div.textContent = msg;

  chat.appendChild(nome);
  chat.appendChild(div);

  document.getElementById("msg").value = "";
  chat.scrollTop = chat.scrollHeight;
}
