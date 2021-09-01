var millisecond  = document.querySelector(".tens")
var second = document.querySelector(".sec")
var starttime = document.querySelector(".start")
var resettime = document.querySelector(".reset")
var stoptime = document.querySelector(".stop")
var minutes = document.querySelector(".min")
var Interval
var tens = "00";
var seconds = "00";
var minute = "00";
starttime.addEventListener('click', ()=>{
  function settime() {
    tens++;
    if(tens>99){
        seconds++;
        tens = tens - 99;
        if(seconds<10){
            seconds = "0" + seconds 
        }
    }
    if(seconds>60){
        minute++
        seconds = seconds - 60;
        if(minute<10){
            minute  = "0" +  minute  
        }
    }
    if(tens<10){
        tens = "0" + tens
    }
    
    millisecond.innerText = tens
    second.innerText  = seconds
    minutes.innerText = minute
}
  Interval = setInterval(settime,10)
})
 stoptime.addEventListener('click', ()=>{
    clearInterval(Interval)
    millisecond.innerText = tens
    second.innerText  = seconds
    minutes.innerText = minute
 })

resettime.addEventListener('click', ()=>{
    clearInterval(Interval)
    tens = "00"
    seconds= "00"
    millisecond.innerText = tens
    second.innerText  = seconds
    minutes.innerText = minute
})