var mint = 00;
var seconds = 00;
var mili = 00;
var appendMili = document.getElementById("mili");
var appendSeconds = document.getElementById("seconds");
var appendMint = document.getElementById("mint");
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
var interval;
// function for start button
function start() {
  mili++;
  if (mili < 9) {
    appendMili.innerHTML = "0" + mili;
  }
  if (mili > 9) {
    appendMili.innerHTML = mili;
  }
  if (mili > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    mili = 0;
    appendMili.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mint++;
    appendMint.innerHTML = "0" + mint;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
}
btnStart.onclick = function () {
  interval = setInterval(start);
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
};
btnStop.onclick = function () {
  clearInterval(interval);
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
};
btnReset.onclick = function () {
  clearInterval(interval);
  mili = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendMili.innerHTML = mili;
  // document. getElementById("start"). disabled = false;
  // document. getElementById("stop"). disabled = false;
};
