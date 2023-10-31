$(document).ready(function () {

    const urlAtual = window.location.pathname;
    
    if (urlAtual === "/Home/CustomerNew") {

        $("#txtCel").mask("(99) 99999-9999");
        $("#txtCpf").mask("999.999.999-99");
        $("#txtCep").mask("99999-999");

        getCustomer();
        calcularIdade();
        validarEmail();
    } 



});





function getCustomer() {

    $("#btnCadCliente").on("click", function () {


        if (validarCampos()) {


            var customer = {
                Nome: $("#txtNome").val(),
                Cep: $("#txtCep").val(),
                Endereco: $("#txtEndereco").val(),
                Cidade: $("#txtCidade").val(),
                DataNascimento: $("#txtDtNasc").val(),
                Celular: $("#txtCel").val(),
                Email: $("#txtEmail").val(),
                Cpf: $("#txtCpf").val(),
                Rg: $("#txtRg").val(),
                Flag:"1"
            }
           
            requisicaoAssincrona("POST", "../Home/CadastrarCliente", customer, sucessCustomer, errorCustomer);
        }

    })

}

function sucessCustomer(json) {

    var obj = json.retorno;
    limparCampos();
    sucessoNotificacao(obj)
}

function errorCustomer(json) {
    
}

function validarCampos() {
  
    var continuar = true;

    if ($("#txtNome").val() == "") {
        alert("o nome é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtCep").val() === "") {
        alert("o CEP é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtEmail").val() === "") {
        alert("o Email é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtEndereco").val() == "") {
        alert("o Endereço é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtCidade").val() == "") {
        alert("a Cidade é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtDtNasc").val() == "") {
        alert("a Data de Nascimento é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtCel").val() == "") {
        alert("o Celular é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtCpf").val() == "") {
        alert("o Cpf é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }

    if ($("#txtRg").val() == "") {
        alert("o Rg é obrigatório!");
        continuar = false;
        return continuar;
    } else {
        continuar = true;
    }


return continuar

}



function calcularIdade() {

    $("#txtDtNasc").on("focusout", function () {

        let dataNascimento = new Date($("#txtDtNasc").val());

        let dataAtual = new Date();

        let diferencaEmMilissegundos = dataAtual - dataNascimento;

        let idadeEmAnos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));


        $("#txtIdade").val(idadeEmAnos);

    });
        
   
    }

function validarEmail() {
    
    $("#txtEmail").on("focusout", function () {

        email = $("#txtEmail").val();
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!regexEmail.test(email)) {
            alert("email invalido")
        }

    });



}

function limparCampos() {

    $("#txtNome").val("");
    $("#txtCep").val("");
    $("#txtEndereco").val("");
    $("#txtCidade").val("");
    $("#txtDtNasc").val("");
    $("#txtCel").val("");
    $("#txtEmail").val("");
    $("#txtCpf").val("");
    $("#txtRg").val("");

}