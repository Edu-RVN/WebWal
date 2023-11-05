﻿
function requisicaoAssincrona(tipo, caminho, dados, funcaoJsSucesso, funcaoJsErro) {

    $.ajax({
        type: tipo,
        url: caminho,
        async: true,
        data: JSON.stringify(dados),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (Json) {
            funcaoJsSucesso(Json);
        },
        error: function (Json) {
            funcaoJsErro(Json);
        }
    });
}


function erroNotificacao(texto) {
    new PNotify({
        title: 'Erro..',
        text: texto,
        addclass: 'alert alert-styled-left alert-arrow-left',
        type: 'error'
    });
}

function sucessoNotificacao(texto) {
    new PNotify({
        title: 'Sucesso..',
        text: texto,
        addclass: 'alert alert-styled-left alert-arrow-left',
        type: 'success'
    });
}

function avisoNotificacao(texto) {
    new PNotify({
        title: 'Atenção..',
        text: texto,
        addclass: 'alert alert-styled-left alert-arrow-left',
        type: 'warning'
    });
}



//// Basic initialization
//$('.datatable-basic').DataTable({
//    autoWidth: false,
//    dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
//    language: {
//        search: '<span>Filter:</span> _INPUT_',
//        lengthMenu: '<span>Show:</span> _MENU_',
//        paginate: { 'first': 'First', 'last': 'Last', 'next': '→', 'previous': '←' }
//    }
//});