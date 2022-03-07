const s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 24;
function difference_of_time(){

    const timenow = new Date().getTime(),
        timeup = new Date(2022,9,14,7,0,0).getTime(),
        difference = timeup - timenow;
    if (difference < 0){
        document.getElementById("time-days").innerHTML = 0;
        document.getElementById("time-hours").innerHTML = 0;
        document.getElementById("time-minutes").innerHTML = 0;
        document.getElementById("time-seconds").innerHTML = 0;
    } 
    else{
        const days = Math.floor(difference / d),
        hours = Math.floor((difference % d) / h),
        minutes = Math.floor((difference % h) / m),
        seconds = Math.floor((difference % m) / s);

        document.getElementById("time-days").innerHTML = days;
        document.getElementById("time-hours").innerHTML = hours;
        document.getElementById("time-minutes").innerHTML = minutes;
        document.getElementById("time-seconds").innerHTML = seconds;
    }
    
}
    //每秒更新網站
var timer = 0
timer = window.setInterval("difference_of_time()", 1000);
console.log(timer)



