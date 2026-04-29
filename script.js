function abrir(secao) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(secao).classList.add('active');
}

// Firebase config (coloque depois)
const firebaseConfig = {
  // sua config aqui
};

// Inicializar Firebase depois
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// Enviar formulário
function enviar() {
  alert("Resposta enviada!");
}

// Chat simples (temporário)
function enviarMsg() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chatBox");

  let p = document.createElement("p");
  p.textContent = msg;

  chat.appendChild(p);
}
