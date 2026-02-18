
var date = new Date("March 10, 2026 10:00:00").getTime();

var x = setInterval(function(){

var now = new Date().getTime();

var diff = date - now;

var days = Math.floor(diff/(1000*60*60*24));

var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

var minutes = Math.floor((diff%(1000*60*60))/(1000*60));

if(document.getElementById("days")){

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

}

});
