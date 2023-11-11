$(document).ready(function () {
   
    const urlAtual = window.location.pathname;

    if (urlAtual === "/Home/CustomerAppointment") {
        getClient()
        $('#mySelect').select2();
    }



});


function getClient() {
    $("#btnGetCliente").on("click", function () {
        $("#frmTratamento").css("display", "block");
        /* exibirRelatorio();*/
        verificarCheck();
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

function verificarCheck() {
    $("#checkPix").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        //if ($(this).is(":checked")) {
        //    console.log("O checkbox foi selecionado.");
        //    $("#valoresPersonalizados").css("display", "block");;
        //} else {
        //    console.log("O checkbox foi desmarcado.");
        //    // Faça alguma coisa quando o checkbox for desmarcado
        //}
    });
    $("#checkDinheiro").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        //if ($(this).is(":checked")) {
        //    console.log("O checkbox foi selecionado.");
        //    $("#valoresPersonalizados").css("display", "block");;
        //} else {
        //    console.log("O checkbox foi desmarcado.");
        //    // Faça alguma coisa quando o checkbox for desmarcado
        //}
    });
    $("#checkCartao").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        if ($(this).is(":checked")) {
            console.log("O checkbox foi selecionado.");
            $("#drwParcelas").css("display", "block");
        } else {
            console.log("O checkbox foi desmarcado.");
            $("#drwParcelas").css("display", "none");
        }
    });
    $("#checkO").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        if ($(this).is(":checked")) {
            console.log("O checkbox foi selecionado.");
            $("#valoresPersonalizados").css("display", "block");
        } else {
            console.log("O checkbox foi desmarcado.");
            $("#valoresPersonalizados").css("display", "none");
        }
    });
}