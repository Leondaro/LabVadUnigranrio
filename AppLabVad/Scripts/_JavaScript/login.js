function CarroselLogin() {
    $("#loginCarrosel").carousel({ interval: false });

    $("#changeToRegister").click(function () {
        $("#loginCarrosel").carousel(1);
    });
    $("#changeToLogin").click(function () {
        $("#loginCarrosel").carousel(0);
    });
}

$(document).ready(function () {
    CarroselLogin();
});
