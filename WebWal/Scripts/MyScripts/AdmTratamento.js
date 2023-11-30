$(document).ready(function () {
   
    const urlAtual = window.location.pathname;

    if (urlAtual === "/Home/CustomerAppointment") {
        getClient()
        moment.locale('pt-br')
       // var dataAtual = new Date();
        $('#mySelect').select2();

        $('#AdminClienteMenu').addClass('nav-item-open');
        $("#tratamentosMenu").css("background-color", "#5c6c92")

        $('.navbar-nav-link.sidebar-control').click();

       // obterListaAnamnese();
    }


    // Initializa os switches e checkboxes  personalizados
 
    $('.form-check-input-styled').uniform();

   // $('.anamnese').bootstrapSwitch();

    // Initialize multiple switches
    var elems = Array.prototype.slice.call(document.querySelectorAll('.anamnese'));
    elems.forEach(function (html) {
        var switchery = new Switchery(html);
    });

});


function getClient() {
    $("#btnGetCliente").on("click", function () {
        verificarCheck();

        var clienteBusca = {
            Cpf: $("#txtCpfBusca").val()
            
        }
        requisicaoAssincrona("POST", "../Sistema/ObterClientePorCpf", clienteBusca, sucessObterCliente, errorObterCliente);

    });
}

function sucessObterCliente(Json) {
    alert()
    var objCliente = JSON.parse(Json.retorno);
    var dataFormatada = moment(new Date()).format('dddd, D [de] MMMM [de] YYYY');
    $("#cabClienteForm").text("Formulário de Tratamento personalizado - " + objCliente.Nome);
    $(".nomeCliente").text(objCliente.Nome);
    $(".dataAtual").text("São José dos Campos " +dataFormatada);
    $("#frmTratamento").css("display", "block");
}

function errorObterCliente(Json) {

    alert("erro")
  
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
            addOptions();
            $("#drwParcelas").css("display", "block");
        } else {
            console.log("O checkbox foi desmarcado.");
            $("#drwParcelas").css("display", "none");
        }
    });
    $("#checkO").change(function () {
        // Verifique se o checkbox está marcado (selecionado)
        if ($(this).is(":checked")) {

            addPagamentoPersonalizado();
            $("#valoresPersonalizados").css("display", "block");
        } else {
            console.log("O checkbox foi desmarcado.");
            $("#valoresPersonalizados").css("display", "none");
        }
    });
}

function addOptions() {
    var valor = $("#txtValor").val();
    for (var i = 1; i <= 10; i++) {


        var value = i;
        var text = i + ' X de R$ ' + (valor / i).toFixed(2);
        $('.parcelas').append($('<option>', {
            value: value,
            text: text
        }));
    }

}


function obterListaAnamnese() {

    requisicaoAssincrona("POST", "../Sistema/ObterlistaAnamnese", "", sucessListaAnal, errorListaAna);


   

}

function sucessListaAnal(json) {
    debugger
    var objRet = JSON.parse(json.retorno);

    var conteudo =
        " <p class='mb-3'>ANAMNESE</p>"
        +"<div class='row'>																									"
        + "       <div class='col-md-4'>                                                                                    "
        + "           <div class='form-group pt-2'>                                                                         "
        + "               <label class='font-weight-semibold'></label>                                                      "
        + "               <div class='form-check form-check-switchery mb-3'>                                                "
        + "                   <label class='form-check-label'>                                                              "
        + "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
        + "                       Tratamento Médico Atual?                                                                  "
        + "                   </label>                                                                                      "
        + "               </div>                                                                                            "
        + "           </div>                                                                                                "
        + "       </div>                                                                                                    "
        + "      <div class='col-md-4'>                                                                                     "
        + "           <div class='form-group pt-2'>                                                                         "
        + "               <label class='font-weight-semibold'></label>                                                      "
        + "               <div class='form-check form-check-switchery mb-3'>                                                "
        + "                   <label class='form-check-label'>                                                              "
        + "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
        + "                       Tratamento Médico Atual?                                                                  "
        + "                   </label>                                                                                      "
        + "               </div>                                                                                            "
        + "           </div>                                                                                                "
        + "       </div>                                                                                                    "
        + "	<div class='col-md-4'>                                                                                         "
        + "           <div class='form-group pt-2'>                                                                         "
        + "               <label class='font-weight-semibold'></label>                                                      "
        + "               <div class='form-check form-check-switchery mb-3'>                                                "
        + "                   <label class='form-check-label'>                                                              "
        + "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
        + "                       Tratamento Médico Atual?                                                                  "
        + "                   </label>                                                                                      "
        + "               </div>                                                                                            "
        + "           </div>                                                                                                "
        + "       </div>							                                                                           "
        + "   </div>";


}
function errorListaAna() {

}



function sucessListaAna(Json) {

    let objRetorno = JSON.parse(Json.retorno);
    let card = [];

    //let contador = objRetorno.length;
    //$("#qtdUsuario").text(" " + contador);

    $("#divAnamnese").html("");

    $.each(objRetorno, function (i, obj) {

        var _id = JSON.stringify(obj._id);

        var conteudo =
            " <p class='mb-3'>ANAMNESE</p>"
            + "<div class='row'>																								"
            + "       <div class='col-md-4'>                                                                                    "
            + "           <div class='form-group pt-2'>                                                                         "
            + "               <label class='font-weight-semibold'></label>                                                      "
            + "               <div class='form-check form-check-switchery mb-3'>                                                "
            + "                   <label class='form-check-label'>                                                              "
            + "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
            + "                       "+obj.Nome+"                                                                 "
            + "                   </label>                                                                                      "
            + "               </div>                                                                                            "
            + "           </div>                                                                                                "
            + "       </div>";
            //+ "      <div class='col-md-4'>                                                                                     "
            //+ "           <div class='form-group pt-2'>                                                                         "
            //+ "               <label class='font-weight-semibold'></label>                                                      "
            //+ "               <div class='form-check form-check-switchery mb-3'>                                                "
            //+ "                   <label class='form-check-label'>                                                              "
            //+ "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
            //+ "                       Tratamento Médico Atual?                                                                  "
            //+ "                   </label>                                                                                      "
            //+ "               </div>                                                                                            "
            //+ "           </div>                                                                                                "
            //+ "       </div>                                                                                                    "
            //+ "	<div class='col-md-4'>                                                                                         "
            //+ "           <div class='form-group pt-2'>                                                                         "
            //+ "               <label class='font-weight-semibold'></label>                                                      "
            //+ "               <div class='form-check form-check-switchery mb-3'>                                                "
            //+ "                   <label class='form-check-label'>                                                              "
            //+ "                       <input type='checkbox' class='form-check-input-switchery anamnese' checked data-fouc>     "
            //+ "                       Tratamento Médico Atual?                                                                  "
            //+ "                   </label>                                                                                      "
            //+ "               </div>                                                                                            "
            //+ "           </div>                                                                                                "
            //+ "       </div>							                                                                           "
            //+ "   </div>";


        card.push(conteudo);


    });

    $("#divAnamnese").html(card);
   
}
function addPagamentoPersonalizado() {
    
    $('#btnAddPag').on('click', function () {
        debugger
        var clone = $('#valoresPersonalizados .row:first').clone();

    // Clear input values in the cloned row
    clone.find('input').val('');

        clone.find('#btnAddPag').removeClass('btn-outline-secondary').addClass('btn-outline-danger removeFieldsBtn');

        // Change the button text
        clone.find('#btnAddPag').text('-');


    // Append the cloned row to the container
        $('#valoresPersonalizados').append(clone);
        removeBtn();
});
}

function removeBtn() {
    $('#valoresPersonalizados').on('click', '.removeFieldsBtn', function () {
        // Remove the entire row
        $(this).closest('.row').remove();
    });
}