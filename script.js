function enviarMsg() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chatBox");

  if (msg.trim() === "") return;

  // Nome
  let nome = document.createElement("div");
  nome.classList.add("nome");
  nome.textContent = "Anônimo";

  // Mensagem
  let div = document.createElement("div");
  div.classList.add("msg", "aluno");
  div.textContent = msg;

  chat.appendChild(nome);
  chat.appendChild(div);

  document.getElementById("msg").value = "";

  // rolar pra baixo
  chat.scrollTop = chat.scrollHeight;
}
