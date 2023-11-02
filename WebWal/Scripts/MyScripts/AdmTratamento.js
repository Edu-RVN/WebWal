$(document).ready(function () {
   
    const urlAtual = window.location.pathname;

    if (urlAtual === "/Home/CustomerAppointment") {
        getClient()
       
    }



});


function getClient() {
    $("#btnGetCliente").on("click", function () {
        $("#frmTratamento").css("display", "block");
        exibirRelatorio();
    });
}

function exibirRelatorio() {
    $("#frmTratamento").on("change", function () {
        $("#frmRelatorios").css("display", "block");
        exibirBotaoEnviar();
    })
}

function exibirBotaoEnviar() {
    $("#txtValor").focusout(function () {
        var valor = $("#txtValor").val();
        
        if (valor !== "") {
            $("#btnEnviarTratamento").css("display", "block");;
        }
    });
    valorPersonalizado()
}

function valorPersonalizado() {
    $("#checkbox4").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        if ($(this).is(":checked")) {
            console.log("O checkbox foi selecionado.");
            $("#valoresPersonalizados").css("display", "block");;
        } else {
            console.log("O checkbox foi desmarcado.");
            // Faça alguma coisa quando o checkbox for desmarcado
        }
    });
}