$(document).ready(function () {
    debugger
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
}
