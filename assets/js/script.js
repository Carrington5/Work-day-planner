// display for current date via moment.js and console.log date and time
var datetime = $('#currentDay');
var displayDate = moment().format('MMMM Do YYYY');
datetime.text(displayDate);

// variables
var now = moment();
var currentTime = now.hours();
// console.log(currentTime);
var buttonsEl = $('.saveBtn');
// console.log(buttonEl);

var timeArray = [$('#8').text(), $('#9').text(), $('#10').text(), $('#11').text(), $('#12').text(), $('#13').text(), $('#14').text(), $('#15').text(), $('#16').text(), $('#17').text()];


function placeInTime(x) {
    if (x < currentTime) {
        return "past";
    } else if (x === currentTime) {
        return "present";
    } else if (x > currentTime) {
        return "future";
    }
};

function colorizeBlock() {
    let textArray = [$('#txt1'), $('#txt2'), $('#txt3'), $('#txt4'), $('#txt5'), $('#txt6'), $('#txt7'), $('#txt8'), $('#txt9'), $('#txt10')];
    for (var i = 0; i < textArray.length; i++) {
        var timeParsed = moment(timeArray[i], "hh:mm A").hours();
        textArray[i].addClass(placeInTime(timeParsed));
    }
};

var logFunction = function () {
    console.log("button clicked");
};


// create save buttons
//var targetE1 = event.target;
var btn1E1 = document.getElementById('#btn1');
btn1E1.addEventListener('click', logFunction());
var btn2El = document.getElementById('#btn2');
var btn3El = document.getElementById('#btn3');
var btn4El = document.getElementById('#btn4');
var btn5El = document.getElementById('#btn5');
var btn6El = document.getElementById('#btn6');
var btn7El = document.getElementById('#btn7');
var btn8El = document.getElementById('#btn8');
var btn9El = document.getElementById('#btn9');
var btn10El = document.getElementById('#btn10');

if (targetEl.matches(btn1El) || targetEl.matches(btn2El) || targetEl.matches(btn3El) || targetEl.matches(btn4El) || targetEl.matches(btn5El) || targetEl.matches(btn6El) || targetEl.matches(btn7El) || targetEl.matches(btn8El) || targetEl.matches(btn9El) || targetEl.matches(btn10El)) {
    console.log("button" + targetEl + "clicked!");
};

for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', logFunction());
}


// save text to local storage
function saveText(y) {
    y.preventDefault();
};

colorizeBlock();