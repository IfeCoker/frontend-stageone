function currentupdatedTime() {
    const time = new Date();
    const UTCTimeMilliseconds = time.getTime();
    const UTCTimeNow = document.getElementById("UTCTimeNow");
    UTCTimeNow.innerHTML = UTCTimeMilliseconds;
}

currentupdatedTime();
setInterval(currentupdatedTime, 1000);