$(document).ready(function () {

    const urlAtual = window.location.pathname;
    const urlDesejada = "/Home/CustomerNew";

    if (urlAtual === urlDesejada) {

        $("#txtCel").mask("(99) 99999-9999");
        $("#txtCpf").mask("999.999.999-99");
        $("#txtCep").mask("99999-999");

        getCustomer();
        calcularIdade();
    }



});

function getCustomer() {

    $("#btnCadCliente").on("click", function () {


        if (validarEmail($("#txtEmail").val())) {


            var customer = {
                Nome: $("#txtNome").val(),
                Cep: $("#txtCep").val(),
                Endereco: $("#txtEndereco").val(),
                Cidade: $("#txtCidade").val(),
                DataNascimento: $("#txtDtNasc").val(),
                Celular: $("#txtCel").val(),
                Email: $("#txtEmail").val(),
                Cpf: $("#txtCpf").val(),
                Rg: $("#txtRg").val()

            }
            var me = JSON.stringify(customer);

            alert(me);

            requisicaoAssincrona("POST", "../Home/CadastrarCliente", customer, sucessCustomer, errorCustomer);
        }



    })

}

function sucessCustomer(json) {
sucessoNotificacao("Cadastro realizado com sucesso!")
}

function errorCustomer(json) {

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
function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return regexEmail.test(email);
}