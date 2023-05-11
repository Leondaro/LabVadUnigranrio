function buildEventList() {
    $("#viewList").empty();

    const viewList = document.getElementById("viewList");
    const calendarList = new FullCalendar.Calendar(viewList, {
        plugins: ['bootstrap', 'interaction', 'list'],
        defaultView: 'listDay',
        height: 'auto',
        locale: 'pt-br',
        themeSystem: 'bootstrap',
        header: {
            left: 'prev',
            center: 'title',
            right: 'next',
        },
        events: [
            {
                title: 'Reservado para mim',
                start: "2023-05-10T09:30",
                end: "2023-05-10T10:59"
            },
            {
                title: 'Reservado para mim',
                start: "2023-05-10T12:00",
                end: "2023-05-10T12:59"
            },
            {
                title: 'Reservado para mim',
                start: "20123-05-10T18:30",
                end: "2023-05-10T19:59"
            },
            {
                title: 'Reservado para mim',
                start: "2023-05-10T22:00",
                end: "2023-05-10T23:59"
            },
        ]
    });
    calendarList.render();
}
