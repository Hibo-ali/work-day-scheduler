$(document).ready(function () {

    var init = false;
    var today = moment().format('LLLL'); // Day, M-D-Y-T 
  
    let now24 = moment().format('H'); // 12 hour clock 
    let now12 = moment().format('h'); // 24 hour clock 
    if (init) {
      now24 = 13;
        now12 = 1;
    }

// current date
const todaysDate = $('#currentDay');
todaysDate.text(today);

var calender = new Date(); //  date and time
var currentHour = calender.getHours(); // returns 0-23 on a 24 hour clock

for (var i = 9; i < 22; i++) {
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add('future');
    }
} 