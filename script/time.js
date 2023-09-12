// var localTime = new Date();
// var timeNow = "<p>" + "The current UTC time in milliseconds is " + localTime.getUTCMilliseconds() + "</p>"

// document.write(timeNow);

function currentupdatedTime() {
    const time = new Date();
    const UTCTimeMilliseconds = time.getTime();
    const UTCTimeNow = document.getElementById("UTCTimeNow");
    UTCTimeNow.innerHTML = UTCTimeMilliseconds;
}

currentupdatedTime();
setInterval(currentupdatedTime, 1000);