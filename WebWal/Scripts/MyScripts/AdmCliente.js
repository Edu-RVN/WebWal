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
                       
        var NomeCli = $("#txtNome").val();
        var CepCli = $("#txtCep").val();
        var EnderecoCli = $("#txtEndereco").val();
        var CidadeCli = $("#txtCidade").val();
        var DtNascimentoCli = $("#txtDtNasc").val();
        var EmailCli = $("#txtEmail").val();
        var CelularCli = $("#txtCel").val();
        var CpfCli = $("#txtCpf").val();
        var RgCli = $("#txtRg").val();

        if (validarCampos()) {
    
        var customer = {
            Nome: NomeCli,
            Cep: CepCli,
            Endereco: EnderecoCli,
            Cidade: CidadeCli,
            DataNascimento: DtNascimentoCli,
            Celular: CelularCli,
            Email:EmailCli,
            Cpf: CpfCli,
            Rg: RgCli
          
        }
        var me = JSON.stringify(customer);
      
        alert(me);
 }


    })

}

function validarCampos() {
    debugger
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
        alert("o CEP é obrigatório!");
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
    debugger
    $("#txtEmail").on("focusout", function () {

        email = $("#txtEmail").val();
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!regexEmail.test(email)) {
            alert("email invalido")
        }

    });



}