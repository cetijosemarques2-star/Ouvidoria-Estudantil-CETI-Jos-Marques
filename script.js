function abrir(secao, botao) {
  // troca de páginas
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
  });

  const atual = document.getElementById(secao);
  if (atual) {
    atual.classList.add('active');
  }

  // botão ativo
  document.querySelectorAll('.navbar button').forEach(b => {
    b.classList.remove('active');
  });

  if (botao) {
    botao.classList.add('active');
  }
}

function enviar() {
  alert("Respostas enviadas!");
}

// CHAT MELHORADO
function enviarMsg() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");

  const texto = input.value.trim();
  if (texto === "") return;

  // container da mensagem
  const linha = document.createElement("div");
  linha.style.display = "flex";
  linha.style.flexDirection = "column";
  linha.style.alignItems = "flex-end";
  linha.style.marginBottom = "10px";

  // nome (anônimo)
  const nome = document.createElement("div");
  nome.style.fontSize = "12px";
  nome.style.marginBottom = "2px";
  nome.innerText = "Anônimo";

  // bolha estilo Instagram
  const msg = document.createElement("div");
  msg.style.background = "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)";
  msg.style.color = "white";
  msg.style.padding = "10px 15px";
  msg.style.borderRadius = "20px";
  msg.style.maxWidth = "70%";
  msg.style.wordWrap = "break-word";

  msg.innerText = texto;

  linha.appendChild(nome);
  linha.appendChild(msg);

  chat.appendChild(linha);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
