function buildCalendar() {
    const CalendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(CalendarEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list'],
        defaultView: 'dayGridMonth',
        height: 'auto',
        locale: 'pt-br',
        themeSystem: 'bootstrap',
        header: {
            left: 'prev, today',
            center: 'title',
            right: 'next'
        },
        validRange: {
            start: new Date()
        },
        eventLimit: true,
        selectable: true,
        dateClick: function (info) {
            let inputDay = document.getElementById("dia");
            inputDay.value = formatDateStr(info.dateStr);

            $("#Conteudo").carousel(1);
            $("#calendar").css('pointer-events', 'none');
            calendarDayRender(info.dateStr);
        }
    });
    calendar.render();
}

function calendarDayRender(dia) {
    const delay = 500;
    setTimeout(function () {
        $("#calendar").css('pointer-events', 'auto');
    }, delay);

    $("#calendarTimeGrid").empty();
    const timeGridEl = document.getElementById('calendarTimeGrid');
    calendarDay = new FullCalendar.Calendar(timeGridEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid'],
        defaultDate: dia,
        defaultView: 'timeGrid',
        height: 'parent',
        locale: 'pt-br',
        themeSystem: 'bootstrap',
        header: {
            left: 'prev',
            center: 'title',
            right: 'next',
        },
        validRange: {
            start: new Date()
        },
        scrollTime: '00:00:00',
        selectable: false,
        selectMirror: true,
        allDaySlot: false,
        displayEventTime: true,
        eventClick: function (info) {
            if (info.event.id != 'indisponivel') {
                info.event.remove();
                let inputTimeStart = document.getElementById("hora");
                inputTimeStart.value = 'Hora escolhida';
            }
        },
        dateClick: function (info) {
            let previewEvent = calendarDay.getEventById('unsaved');

            if (previewEvent != null)
                previewEvent.remove();

            const today = new Date();
            const date = today.getDate();
            const year = today.getFullYear();
            let month = today.getMonth();

            const selectedDate = info.dateStr;
            const selectedDay = selectedDate.substring(8, 10);
            const selectedMonth = selectedDate.substring(5, 7);
            const selectedYear = selectedDate.substring(0, 4);

            const time = selectedDate.substring(11, 16);
            const selectedHour = time.substring(0, 2);
            const selectedMin = time.substring(3, 5);
            let validOption = true;

            if (year == selectedYear) {
                if (++month == parseInt(selectedMonth, 10)) {
                    if (date == parseInt(selectedDay, 10)) {
                        const hourNow = hoursNow();
                        const minNow = minutesNow();

                        if (selectedHour < parseInt(hourNow, 10)) {
                            validOption = false;
                            WarningMsg(time, hourNow, minNow);
                        }
                        else if (selectedHour == parseInt(hourNow, 10))
                            if ((selectedMin < 30) && (parseInt(minNow, 10) >= 30)) {
                                validOption = false;
                                WarningMsg(time, hourNow, minNow);
                            }
                    }
                }
            }

            if (validOption) {
                const start = selectedDate.substring(0, 19);
                const end = selectedDate.substring(0, 11) + getDurationTime(selectedHour, selectedMin);

                const newEvent = {
                    id: 'unsaved',
                    title: 'Reserva de:',
                    start: start,
                    end: end,
                    allDay: false
                };

                calendarDay.addEvent(newEvent);

                const inputTimeStart = document.getElementById("hora");
                inputTimeStart.value = time + 'h';

                const inputDay = document.getElementById("dia");
                inputDay.value = selectedDay + '/' + selectedMonth + '/' + selectedYear;
            }
        }
    });
    calendarDay.addEvent(getTimeUnvailable());
    calendarDay.render();
}

function formatDateStr(dateStr) {
    let day = dateStr.substring(8, 10);
    let month = dateStr.substring(5, 7);
    let year = dateStr.substring(0, 4);

    return day + "/" + month + "/" + year;
}

function getTimeUnvailable() {
    const date = new Date();
    let minutes;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let today = year + '-' + addZero(++month) + '-' + day;

    if ((hoursNow() == '00') && (parseInt(minutesNow()) < 30))
        return null;

    if (parseInt(minutesNow()) < 30)
        minutes = '00';
    else
        minutes = '30';

    const dataEvent = {
        id: 'indisponivel',
        title: "Horário obsoleto",
        start: today + 'T00:00:00',
        end: today + 'T' + hoursNow() + ':' + minutes + ':00',
        backgroundColor: 'gray',
        borderColor: 'gray'
    }

    return dataEvent;
}
function hoursNow() {
    const date = new Date();
    const hours = addZero(date.getHours());
    return hours;
}
function minutesNow() {
    const date = new Date();
    const mins = addZero(date.getMinutes());
    return mins;
}
function addZero(i) {
    if (i < 10)
        i = "0" + i;
    return i;
}

function getDurationTime(hours, minutes) {
    const selected = document.getElementById("tempo");
    const value = parseInt(selected.value);
    let end;

    switch (value) {
        case 1:
            //'00:29'
            end = hours + ':' + (parseInt(minutes) + 29);
            return end + ':00';
        case 2:
            //'00:59'
            if (minutes == '00')
                end = hours + ':' + (parseInt(minutes) + 59);
            else
                end = addZero(parseInt(hours) + 1) + ':' + minutes;

            return end + ':00';
        case 3:
            //'01:29'
            if (minutes == '00')
                end = addZero(parseInt(hours) + 1) + ':' + (parseInt(minutes) + 29);
            else
                end = addZero(parseInt(hours) + 1) + ':' + (parseInt(minutes) + 29);

            return end + ':00';
        case 4:
            //'01:59'
            if (minutes == '00')
                end = addZero(parseInt(hours) + 1) + ':' + (parseInt(minutes) + 59);
            else
                end = addZero(parseInt(hours) + 1) + ':' + (parseInt(minutes) + 59);

            return end + ':00';
    }
}

function WarningMsg(time, hourNow, minutesNow) {
    alert("O horário selecionado (" + time + ") não é válido.\nHorário atual: " +
        hourNow.toString() + ":" + minutesNow.toString() + "\nPor favor, selecione um horário disponível.");
}
