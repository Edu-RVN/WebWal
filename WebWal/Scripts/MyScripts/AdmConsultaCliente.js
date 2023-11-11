﻿$(document).ready(function () {

    const urlAtual = window.location.pathname;

    if (urlAtual === "/Home/Customer") {

        obterListaCliente();
      
    }



});

function obterListaCliente() {

    requisicaoAssincrona("POST", "../Home/ObterListaCliente", "", sucessListCustomer, errorListCustomer);
}

function sucessListCustomer(json) {

    atualizarTabelaClientes(json)
}

function errorListCustomer(json) {

}

function atualizarTabelaClientes(Json) {
    var objClientes = JSON.parse(Json.retorno);
    var conteudoTblClientes = '';
    var cabecalhoTblClientes = '';

    // Certifique-se de que os elementos existem na página
    $("#headTblClientes").html("");
    cabecalhoTblClientes =
        '<tr>' +
        '<th hidden="hidden">ID</th>' +
        '<th>Nome</th>' +
        '<th>CPF</th>' +
        '<th>Telefone</th>' +
        '<th>Email</th>' +
        '<th>Status</th>' +
        '<th>Ação</th>' +
        '</tr>';

    $("#headTblClientes").append(cabecalhoTblClientes);

    var tblClientes = $("#tblClientes").DataTable();

    // Limpe a tabela antes de atualizar
    tblClientes.clear();

    $.each(objClientes, function (i, obj) {
        if (obj.Flag == "1") {
            obj.Flag = "<span class='badge badge-success'>Ativo</span>";
        }
        if (obj.Flag == "0") {
            obj.Flag = "<span class='badge badge-danger' id='spanTabela'>Inativo</span>";
        }

        conteudoTblClientes = conteudoTblClientes +
            '<tr>' +
            '<td hidden="hidden">' + obj._id + '</td>' +
            '<td>' + obj.Nome + '</td>' +
            '<td>' + obj.Cpf + '</td>' +
            '<td>' + obj.Celular + '</td>' +
            '<td>' + obj.Email + '</td>' +
            '<td>' + obj.Flag + '</td>' +
            " <td class='text-center'> " +
            " <div class='list-icons'> " +
            " <div class='dropdown'> " +
            " <a href='#' class='list-icons-item' data-toggle='dropdown'> " +
            " <i class='icon-menu9'></i> " +
            " </a> " +
            " <div class='dropdown-menu dropdown-menu-right'> " +
            " <a href='#' class='dropdown-item'><i class='icon-file-pdf'></i> Export to .pdf</a>	" +
            " <a href='#' class='dropdown-item'><i class='icon-file-excel'></i> Export to .csv</a>  " +
            " <a href='#' class='dropdown-item'><i class='icon-file-word'></i> Export to .doc</a>   " +
            " </div> " +
            " </div> " +
            " </div> " +
            " </td>  " +

            '</tr>';
    });

    // Não é necessário destruir a tabela
    // tblClientes.fnDestroy();

    // Adicione os novos dados à tabela
    tblClientes.rows.add($(conteudoTblClientes)).draw();

  
}


//function atualizarTabelaClientes(Json) {

//    var objClientes = JSON.parse(Json.retorno);
//    var conteudoTblClientes = '';
//    var cabecalhoTblClientes = '';

//    $("#headTblClientes").html("");
//    cabecalhoTblClientes =
//        '<tr> ' +
//        '<th hidden="hidden">ID</th>' +
//        '<th>Nome</th>' +
//        '<th>CPF</th>' +
//        '<th>Telefone</th>' +
//        '<th>Email</th>' +
//        '<th>Status</th>' +
//        '<th>Ação</th>' +
//        '</tr > ';

//    $("#headTblClientes").append(cabecalhoTblClientes);

//    var tblClientes = $("#tblClientes").dataTable();

//    tblClientes.fnClearTable(this);

//    $.each(objClientes, function (i, obj) {

//        $.each(objClientes, function (i, obj) {
//            if (obj.Flag == "1") { obj.Flag = "<span class='cor label label-danger'>Ativo</span>"; }
//            if (obj.Flag == "0") { obj.Flag = "<span class='cor label label-danger' id='spanTabela'>Inativo</span>"; }
//        });

//        conteudoTblClientes = conteudoTblClientes +
//            '<tr>' +
//            '<td  hidden="hidden">' + obj._id + '</td>' +
//            '<td>' + obj.Nome + '</td>' +
//            '<td>' + obj.Cpf + '</td>' +
//            '<td>' + obj.Telefone + '</td>' +
//            '<td>' + obj.Email + '</td>' +
//            '<td>' + obj.Flag + '</td>' +
//            '<td>< a href = "#" class="btn btn-primary" > Editar</a></td>' +
//            '</tr>';
//    });



//    tblClientes.fnDestroy();
//    $("#bodyTblClientes").append(conteudoTblClientes);


//}
