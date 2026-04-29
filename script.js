function abrir(secao) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(secao).classList.add('active');
}

function enviar() {
  alert("Resposta enviada!");
}

function enviarMsg() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("msg", "aluno");
  div.textContent = msg;

  chat.appendChild(div);
  document.getElementById("msg").value = "";
}
