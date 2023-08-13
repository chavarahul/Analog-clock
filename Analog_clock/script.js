const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

function Clocktick(){
    let date = new Date();
    let second = date.getSeconds()/60;
    let hour = ((second +date.getHours()))/12;
    let minute = ((second + date.getMinutes()))/60;
    rotate(seconds,second);
    rotate(minutes,minute);
    rotate(hours,hour);
}

function rotate(element,rotation){
      element.style.setProperty('--rotate',rotation * 360);
}
  setInterval(Clocktick,1000);