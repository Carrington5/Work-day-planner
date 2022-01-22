// display current date via moment.js
var dateTime = $('#currentDay');

// console.log(dateTime);
var displayDate = moment().format('MMMM Do YYYY');
dateTime.text(displayDate);

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
    })

    function placeInTime() {
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            var spaceHour = parseInt($(this).attr('id').split('-')[1]);

            if (spaceHour < currentHour) {
                $(this).addClass('past');
            } else if (spaceHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        })
    }
    placeInTime()
    var interval = setInterval(placeInTime, 20000);
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    $('#current-day').text(moment().format('hh:mm A'))
})