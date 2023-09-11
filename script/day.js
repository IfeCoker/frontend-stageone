var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dateNow = new Date();
var dayNow = "<p>" + "Today is " + days[dateNow.getDay()] + "</p>";

document.write(dayNow);