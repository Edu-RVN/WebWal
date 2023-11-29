

//function Login() {

//    requisicaoAssincrona

//    window.location.href = "../Home/Customer";

   
//}

function Login() {

    
            var user = {
                Nome: $("#txtNomeLogin").val(),
                Senha: $("#txtSenhalogin").val(),
               
            }

            requisicaoAssincrona("POST", "../Home/Login", user, sucessoLogin, erroLogin);
       

}

function sucessoLogin(json) {

    if (json.retorno == "Wal") {
        window.location.href = "../Home/Customer";
    } else {
        window.location.href = "../Home/Index";
    }

}
function erroLogin(json) {

}