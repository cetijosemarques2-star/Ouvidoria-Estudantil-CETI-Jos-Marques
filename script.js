function abrir(secao, botao) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(secao).classList.add("active");

  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  botao.classList.add("active");
}

function enviarMsg() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");

  const texto = input.value.trim();
  if (texto === "") return;

  const row = document.createElement("div");
  row.className = "msg-row right";

  const user = document.createElement("span");
  user.className = "user";
  user.innerText = "Anônimo";

  const msg = document.createElement("div");
  msg.className = "msg right";
  msg.innerText = texto;

  row.appendChild(user);
  row.appendChild(msg);
  chat.appendChild(row);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
