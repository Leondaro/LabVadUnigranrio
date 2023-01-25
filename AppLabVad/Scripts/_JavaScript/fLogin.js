function CarroselLogin() {
    //Inicia o carrosel
    $("#loginCarrosel").carousel({ interval: false });

    //Olha para os botoes
    $("#changeToRegister").click(function () {
        let retorno = $("#loginCarrosel").carousel(1);
    });

    $("#changeToLogin").click(function () {
        let retorno = $("#loginCarrosel").carousel(0);
    });
}


$(document).ready(function () {
    CarroselLogin();

});