var date = new Date();
var day = date.getDay();
if (day == 5) {
    document.getElementById("pancakeDiv").style.display = "block";
} else {
    document.getElementById("pancakeDiv").style.display = "none";
}