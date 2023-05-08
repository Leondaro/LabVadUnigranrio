$(document).ready(function () {
    initCarousel();
    initEditor();
    collapseButtonEvents();

    $("#btnNoturno").click(function () {
        changeColorScheme();
    });
});


function changeColorScheme() {
    let elements = $('#btnNoturno')[0].checked ? $('.whiteTheme').toArray() : $('.darkTheme').toArray();
    let tiles = $('.bgColorSwitch').toArray();
    let labels = $('label').toArray();
    let h3El = $('h3').toArray();

    let calendar = $('#calendar');
    let timeGrid = $('#calendarTimeGrid');
    let viewList = $('#wrappedView');
    let thCal = calendar.find(".fc-head");
    //let thGrid = timeGrid.find(".fc-head");
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
    //thGrid.toggleClass("has-background-light");
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

    let editor = ace.edit("editor");
    let aceBackground = $('.ace_content');
    
    editor.setTheme("ace/theme/eclipse");
    //editor.session.setMode("ace/mode/javascript");
    aceBackground.addClass('whiteTheme');
}
function initCarousel() {
    $("#Conteudo").carousel({ interval: false });
    carouselEvents();
    calendario('bootstrap');
}
function carouselEvents() {
    $("#nav-btn0").click(function () {
        $("#Conteudo").carousel(0);
        $(".current").toggleClass("current");
        $(this).toggleClass("current");
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