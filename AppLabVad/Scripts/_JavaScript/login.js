function CarroselLogin() {
    $("#loginCarrosel").carousel({ interval: false });

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
