    function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin"){
        alert('Acesso Permitido!')

    localStorage.setItem("usuarioLogado", login);
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);

    }else{
        alert('Acesso negado!\nUsuário ou senha inválida')
        
    }
    }