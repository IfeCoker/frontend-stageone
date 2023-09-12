var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dateNow = new Date();
const dayOfTheWeek = document.getElementById("dayOfTheWeek")
const dayNow = "<p>" + "The current day is " + days[dateNow.getDay()] + "</p>";
dayOfTheWeek.innerHTML = dayNow;
