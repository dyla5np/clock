setInterval(setTime, 1000);

const hourArm = document.querySelector("[data-hour]");
const minuteArm = document.querySelector("[data-minute]");
const secondArm = document.querySelector("[data-second]");

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("am/pm");

function setTime() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  const digitalHour = currentDate.getHours();
  const digitalMin = currentDate.getMinutes();
  const digitalSec = currentDate.getSeconds();

  timeRotation(hourArm, hours);
  timeRotation(minuteArm, minutes);
  timeRotation(secondArm, seconds);

  digitalHour >= 12 ? (ampm.innerHTML = "PM") : (ampm.innerHTML = "AM");

  digitalTime(hr, digitalHour);
  digitalTime(min, digitalMin);
  digitalTime(sec, digitalSec);
}

function timeRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

function digitalTime(elem, rotationRatio) {
  elem.innerHTML = rotationRatio;
}

setTime();
