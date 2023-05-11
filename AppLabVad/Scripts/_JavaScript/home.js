$(document).ready(function () {
    buildCalendar();
    buildEventList();

    initCarousel();
    initEditor();
    collapseButtonEvents();
    switchThemeButtonEvent()
});

function switchThemeButtonEvent() {
    $("#btnNoturno").click(function () {
        changeColorScheme();
    });
}
function changeColorScheme() {
    $('body').toggleClass('_dark_theme');
    $('.ace_content').toggleClass("_dark_theme");
    $('.well').not('.help_banner').toggleClass("_dark_theme");
    $('.panel').toggleClass("_dark_theme");

    $('h1').toggleClass('text-light');
    $('h2').not('.well-sm').toggleClass('text-light');
    $('h3').not('.help_banner > h3').toggleClass('text-light');
    $('label').toggleClass('text-light');
    $('.tab_text').toggleClass('text-light');
    $('#calendar').toggleClass("text-light");
    $('#calendarTimeGrid').toggleClass("text-light");

    if ($('#editor').length) {
        const aceEditor = ace.edit('editor');

        if ($('#btnNoturno')[0].checked) {
            aceEditor.setTheme("ace/theme/monokai");
        } else {
            aceEditor.setTheme("ace/theme/eclipse");
        }
    }
}

function collapseButtonEvents() {
    $(".angle_down").click(function () {
        const target = $(this).attr("data-target")

        $(this).toggleClass("hidden");
        $(".angle_up[data-target='" + target + "']").toggleClass("hidden");
    });
    $(".angle_up").click(function () {
        const target = $(this).attr("data-target")

        $(this).toggleClass("hidden");
        $(".angle_down[data-target='" + target + "']").toggleClass("hidden");
    });
}

function initEditor() {
    if ($('#editor').length === 0) return;

    const editor = ace.edit("editor");   
    editor.setTheme("ace/theme/eclipse");
}
function initCarousel() {
    $("#Conteudo").carousel({ interval: false });
    carouselEvents();
}
function carouselEvents() {
    $("#nav-btn0").click(function () {
        $("#Conteudo").carousel(0);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#btnRetorno").click(function () {
        $("#Conteudo").carousel(0);
    });

    $("#nav-btn1").click(function () {
        $("#Conteudo").carousel(2);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#nav-btn2").click(function () {
        $("#Conteudo").carousel(3);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#nav-btn3").click(function () {
        $("#Conteudo").carousel(4);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });

    $("#nav-btn5").click(function () {
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
    });
}