function abrir(secao, botao){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(secao).classList.add("active");

  document.querySelectorAll(".top-menu button").forEach(b=>b.classList.remove("active"));
  botao.classList.add("active");
}

function enviarMsg(){
  const input = document.getElementById("msg");
  const chat = document.getElementById("chatBox");

  if(input.value.trim()==="") return;

  const nome = document.createElement("div");
  nome.className="nome";
  nome.innerText="Anônimo";

  const msg = document.createElement("div");
  msg.className="msg aluno";
  msg.innerText=input.value;

  chat.appendChild(nome);
  chat.appendChild(msg);

  input.value="";
  chat.scrollTop=chat.scrollHeight;
}
