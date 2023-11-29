$(document).ready(function () {
    
    const urlAtual = window.location.pathname;

    if (urlAtual === "/Sistema/NovosItens") {
        getClient()
        

        $('#AdminSistema').addClass('nav-item-open');
        $("#novosItens").css("background-color", "#5c6c92")

        $('.navbar-nav-link.sidebar-control').click();
        inserirAnamnese();
        inserirPonto();

    }
});


function inserirAnamnese() {

    $("#btnCadAnamnese").on("click", function () {


        if ($("#txtAnamnese").val() != "") {


            var item = {
                Nome: $("#txtAnamnese").val(),
                Flag: "1"
            }

            requisicaoAssincrona("POST", "../Sistema/CadastrarAnamnese", item, sucessAna, errorAna);
        }

    })

}

function sucessAna() {
    $("#txtAnamnese").val("");
}
function errorAna() {

}

function inserirPonto() {

    $("#btnCadPonto").on("click", function () {
        alert("Ponto")

        if ($("#txtPontoAp").val() != "") {


            var itemP = {
                Nome: $("#txtPontoAp").val(),
                Flag: "1"
            }

            requisicaoAssincrona("POST", "../Sistema/CadastrarPonto", itemP, sucessPonto, errorPonto);
        }

    })

}

function sucessPonto() {
    $("#txtPontoAp").val("");
}
function errorPonto() {

}