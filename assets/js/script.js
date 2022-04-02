$(document).ready(function () {

    var init = false;
    var today = moment().format('LLLL'); // Day, M-D-Y-T 
  
    let now24 = moment().format('H'); // 12 hour clock 
    let now12 = moment().format('h'); // 24 hour clock 
    if (init) {
      now24 = 13;
        now12 = 1;
    }