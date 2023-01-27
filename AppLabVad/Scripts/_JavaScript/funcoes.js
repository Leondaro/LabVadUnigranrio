//import { Calendar } from "../_fullCalendar/core/main";

function changeColorScheme() {
    let elements = $('#btnNoturno')[0].checked ? $('.whiteTheme').toArray() : $('.darkTheme').toArray();
    let tiles = $('.bgColorSwitch').toArray();
    let labels = $('label').toArray();
    let h3El = $('h3').toArray();

    let calendar = $('#calendar');
    let timeGrid = $('#calendarTimeGrid');
    let viewList = $('#wrappedView');
    let thCal = calendar.find(".fc-head");
    let thGrid = timeGrid.find(".fc-head");
    let panelTexts = $('.liText, .liMsg').toArray();

    if ($('#editor').length) {
        let aceEditor = ace.edit('editor');
        let aceBackground = $('.ace_content');
        //Editor
        if ($('#btnNoturno')[0].checked) {
            aceEditor.setTheme("ace/theme/monokai");
            aceBackground.addClass('whiteTheme');
            aceBackground.removeClass('darkTheme');
        } else {
            aceEditor.setTheme("ace/theme/eclipse");
            aceBackground.removeClass('whiteTheme');
            aceBackground.addClass('darkTheme');
        }
    }

    //Generic
    elements.forEach(element => {
        element.classList.toggle('whiteTheme');
        element.classList.toggle('darkTheme');
    })
    h3El.forEach(h3 => {
        h3.classList.toggle('has-text-light');
    });
    //FullCalendar
    calendar.toggleClass("has-text-light");
    timeGrid.toggleClass("has-text-light");
    viewList.toggleClass("has-background-grey-lighter");
    viewList.toggleClass("has-background-grey-light");
    thCal.toggleClass("has-background-light");
    thGrid.toggleClass("has-background-light");
    //CodePanel
    panelTexts.forEach(text => {
        text.classList.toggle('has-text-light');
    });
    //My Account View
    tiles.forEach(tile => {
        tile.classList.toggle("has-background-light");
        tile.classList.toggle("has-background-grey-darker");
    });
    labels.forEach(label => {
        label.classList.toggle('has-text-light');
    });
}

//Inicialização de funções e eventos.
$(document).ready(function () {
    //Inicializa o carrossel de conteúdo.
    Carrosel();
    //Inicializa o editor de código.
    initEditor();

    $("#btnNoturno").click(function () {
        changeColorScheme();
    });
        
    //Seção do Tutorial: Sistema de Colapsos
    //Botões do Colapso de experimentos
    $("#expAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#expAngleUp").toggleClass("is-hidden");
    });
    $("#expAngleUp").click(function () {
        $("#expCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#expAngleDown").toggleClass("is-hidden");
    });
    //Botões da seção de Leds
    $("#ledAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#ledAngleUp").toggleClass("is-hidden");
    });
    $("#ledAngleUp").click(function () {
        $("#ledCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#ledAngleDown").toggleClass("is-hidden");
    });
    //Botões da seção de Servo Motor
    $("#servoAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#servoAngleUp").toggleClass("is-hidden");
    });
    $("#servoAngleUp").click(function () {
        $("#servoCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#servoAngleDown").toggleClass("is-hidden");
    });
    //Botões da seção de Motor DC
    $("#dcAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#dcAngleUp").toggleClass("is-hidden");
    });
    $("#dcAngleUp").click(function () {
        $("#dcCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#dcAngleDown").toggleClass("is-hidden");
    });
    //Botões da seção de Display de Caracteres
    $("#disAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#disAngleUp").toggleClass("is-hidden");
    });
    $("#disAngleUp").click(function () {
        $("#disCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#disAngleDown").toggleClass("is-hidden");
    });
    //Botões da seção de Display de 8 Segmentos
    $("#segAngleDown").click(function () {
        $(this).toggleClass("is-hidden");
        $("#segAngleUp").toggleClass("is-hidden");
    });
    $("#segAngleUp").click(function () {
        $("#segCollapse").collapse('hide');
        $(this).toggleClass("is-hidden");
        $("#segAngleDown").toggleClass("is-hidden");
    });
});

//Editor de Código
function initEditor() {
    if ($('#editor').length === 0) return;

    let editor = ace.edit("editor");
    let aceBackground = $('.ace_content');
    
    editor.setTheme("ace/theme/eclipse");
    //editor.session.setMode("ace/mode/javascript");
    aceBackground.addClass('whiteTheme');
}
//Carrossel
function Carrosel() {
    //Inicia o carrosel
    $("#Conteudo").carousel({ interval: false });

    //Olha para os botoes
    $("#btn0").click(function () {
        $("#Conteudo").carousel(0);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });
    
    $("#btn1").click(function () {
        $("#Conteudo").carousel(2);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#btn2").click(function () {
        $("#Conteudo").carousel(3);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#btn3").click(function () {
        $("#Conteudo").carousel(4);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    calendario('bootstrap');
}
