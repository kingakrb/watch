const hourEl=document.querySelector(".hour");//hour class
const secondsEl=document.querySelector(".seconds");//hour class
const minutesEl=document.querySelector(".minutes");//hour class

console.log(hourEl);

function UpdateRolex(){
  let currentDate = new Date();
  console.log(currentDate);
//   setTimeout( UpdateRolex,1000);

  const hour=currentDate.getHours();
  const seconds=currentDate.getSeconds();
  const minutes=currentDate.getMinutes();
  console.log(hour,seconds,minutes);
  //hour
  const hourDeg=(hour/12)*360;
  hourEl.style.transform=`rotate(${hourDeg}deg)`;
  //minute
  const minutesDeg=(minutes/60)*360;
  minutesEl.style.transform=`rotate(${minutesDeg}deg)`;
  const secondsDeg=(seconds/60)*360;
  secondsEl.style.transform=`rotate(${secondsDeg}deg)`;
}

//calling function
// UpdateRolex();
setInterval(UpdateRolex,1000)