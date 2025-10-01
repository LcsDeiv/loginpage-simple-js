var usuario = localStorage.getItem("usuarioLogado");
if (!usuario) {
    window.localStorage.href = "login.html";
} else{
    document.getElementById("bemvindo").textContent = "Olá, " + usuario;
}

function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}
