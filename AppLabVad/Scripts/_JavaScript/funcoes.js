//import { Calendar } from "../_fullCalendar/core/main";

function AlterarCorDeFundo() {
  fundoEscuro = "#282923";
  fundoClaro = "#FAF0E6";

    let estado = document.getElementsByName("botaoNoturno");
    let body = document.getElementById("Home");
    let calendarText = document.getElementById("calendar");
    let calendarTGText = document.getElementById("calendarTimeGrid");
    let editor = ace.edit("editor");
    let editorBgd = document.getElementById("editor");


    for (let i = 0; i < estado.length; i++) {
        if (estado[i].checked == true) {
            body.style.backgroundColor = fundoEscuro;
            //AlterCalendarTheme(estado[i].checked);
            AlterColorCalendarHead(estado[i].checked);
            corContAbas(estado[i].checked);
            //calendarText.style.color = fundoClaro;
            //calendarTGText.style.color = fundoClaro;
            editor.setTheme("ace/theme/monokai");
            editorBgd.style.backgroundColor = "#282923";
            ChangeColorTiles(estado[i].checked);
            PanelEditor(estado[i].checked);
            TextsColors(estado[i].checked);
        } else {
            body.style.backgroundColor = fundoClaro;
            //AlterCalendarTheme(estado[i].checked);
            AlterColorCalendarHead(estado[i].checked);
            corContAbas(estado[i].checked);
            //calendarText.style.color = fundoEscuro;
            //calendarTGText.style.color = fundoEscuro;
            editor.setTheme("ace/theme/eclipse");
            editorBgd.style.backgroundColor = "#FAF0E6";
            ChangeColorTiles(estado[i].checked);
            PanelEditor(estado[i].checked);
            TextsColors(estado[i].checked);
        }
    }
}
/*
function abreMenu() {
    let botao = document.getElementById('interruptor');
    let naveg = document.getElementById('navegacao');
    let ulMenu = document.getElementById('listaMenu');


    if (naveg.className === "barraNav") {
        $('#listaMenu').css('flex-direction', 'row');
        ulMenu.className += " aberto";
        naveg.className += " ativo";
        botao.value = 'Close';
        mudaPalhetas(botao);
    } else {
        $('#listaMenu').css('flex-direction', 'row');
        naveg.className = "barraNav";
        ulMenu.className += "ultimoFilho";
        botao.value = 'Open';
        mudaPalhetas(botao);
    }
}

function AlterCalendarTheme(escuro) {
    let Bootstrap = 'bootstrap';
    let Slate = 'slate';

    if (escuro) {
        calendario(Slate);
        CalendarRender(Slate);
        getViewList(Slate);
    } else {
        calendario(Bootstrap);
        CalendarRender(Bootstrap);
        getViewList(Bootstrap);
    }   
}
*/
//
function AlterColorCalendarHead(escuro) {
    let calendar = $('#calendar');
    let timeGrid = $('#calendarTimeGrid');
    let viewList = $('#wrappedView');    
    let thCal = calendar.find(".fc-head");
    let thGrid = timeGrid.find(".fc-head");

    if (escuro) {
        calendar.addClass("has-text-light");
        timeGrid.addClass("has-text-light");
        viewList.removeClass("has-background-grey-lighter");
        viewList.addClass("has-background-grey-light");
        thCal.addClass("has-background-light");
        thGrid.addClass("has-background-light");
    } else {
        calendar.removeClass("has-text-light");
        timeGrid.removeClass("has-text-light");
        viewList.removeClass("has-background-grey-light");
        viewList.addClass("has-background-grey-lighter");
        thCal.removeClass("has-background-light");
        thGrid.removeClass("has-background-light");
    }
}
//
function AlterColorTimeGrid() {
    let estado = document.getElementsByName("botaoNoturno");
    let timeGrid = $('#calendarTimeGrid');
    let thGrid = timeGrid.find(".fc-head");

    for (let i = 0; i < estado.length; i++) {
        if (estado[i].checked == true) {
            timeGrid.addClass("has-text-light");
            thGrid.addClass("has-background-light");
        } else {
            timeGrid.removeClass("has-text-light");
            thGrid.removeClass("has-background-light");
        }
    }
}
//CHAMADA DE FUNÇÃO A SER REALIZADA
function AlterColorViewList() {
    let estado = document.getElementsByName("botaoNoturno");
    let viewList = $('#wrappedView');    

    for (let i = 0; i < estado.length; i++) {
        if (estado[i].checked == true) {
            viewList.removeClass("has-background-grey-lighter");
            viewList.addClass("has-background-grey-light");
        } else {
            viewList.removeClass("has-background-grey-light");
            viewList.addClass("has-background-grey-lighter");
        }
    }
}

//INCONCLUSIVO
/*
function mudaPalhetas(x) {
    x.classList.toggle("change");
}
*/
//Revisar
function corContAbas(escuro) {
    let editorText = document.getElementById('editor');
    let liText = document.getElementsByClassName('.CodeEditorText');
    if (escuro) {
        editorText.style.color = "#FAF0E6";
        liText.color = "#FAF0E6";
    }
    else {
        editorText.style.color = "#282923";
        liText.color = "#282923";
    }
}
//
function ChangeColorTiles(escuro) {
    if (escuro) {
        //Retira o fundo claro
        $("#PISO1").toggleClass("has-background-light");
        $("#PISO2").toggleClass("has-background-light");
        $("#PISO3").toggleClass("has-background-light");
        $("#PISO4").toggleClass("has-background-light");
        //Acrescenta o fundo escuro
        $("#PISO1").toggleClass("has-background-grey-darker");
        $("#PISO2").toggleClass("has-background-grey-darker");
        $("#PISO3").toggleClass("has-background-grey-darker");
        $("#PISO4").toggleClass("has-background-grey-darker");
    }
    else {
        //Retira o fundo escuro
        $("#PISO1").toggleClass("has-background-grey-darker");
        $("#PISO2").toggleClass("has-background-grey-darker");
        $("#PISO3").toggleClass("has-background-grey-darker");
        $("#PISO4").toggleClass("has-background-grey-darker");
        //Acrescenta o fundo claro
        $("#PISO1").toggleClass("has-background-light");
        $("#PISO2").toggleClass("has-background-light");
        $("#PISO3").toggleClass("has-background-light");
        $("#PISO4").toggleClass("has-background-light");
    }
}
//INCOMPLETO
function TextsColors(escuro) {
    let textos = $('.textos');

    if (escuro) {
        //Troca as cores dos textos 
        textos.css('color', "#FAF0E6");
    } else {
        //Troca as cores dos textos
        textos.css('color', "#282923");
    }
}
//Troca de cores: Painel do Editor de Código, área de códigos salvos.
function PanelEditor(escuro) {
    if (escuro == true) {
        $('.UlFormat').css('background-color', "#333");
        $('.LiFormat').css('background-color', "#333");
    } else {
        $('.UlFormat').css('background-color', "#FAF0E6");
        $('.LiFormat').css('background-color', "#FAF0E6");
    }
}

//Inicialização de funções e eventos gerais.
$(document).ready(function () {
    //Inicializa o carrossel de conteúdo.
    Carrosel();

    //Aplica o efeito de "fade" no botão de execução de código.
    $(".Abas").click(function () {
        $(".Run").fadeToggle("fast");
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
//INCONCLUSIVO
/*
function editor() {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/eclipse");
    editor.session.setMode("ace/mode/javascript");
}
*/
//REVISAR
function Carrosel() {
    //Inicia o carrosel
    $("#Conteudo").carousel({ interval: false });

    //Olha para os botoes
    $("#btn0").click(function () {
        $("#Conteudo").carousel(0);
    });
    
    $("#btn1").click(function () {
        $("#Conteudo").carousel(1);
    });

    $("#btn2").click(function () {
        $("#Conteudo").carousel(3);
    });

    $("#btn3").click(function () {
        $("#Conteudo").carousel(4);
    });

    calendario('bootstrap');
    //editor();
}
