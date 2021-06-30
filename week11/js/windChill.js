   var temp = parseInt(document.getElementById('current-temp').innerHTML);
   // console.log(temp);
   var windspeed = parseInt(document.getElementById('windspeed').innerHTML);
   // console.log(windspeed);

   if (temp < 50 && windspeed > 3) {
       var windchill = 35.74 + (.6215 * temp) - (35.75 * (Math.pow(windspeed, .16))) + ((.4275 * temp) * Math.pow(windspeed, .16));
       // console.log(windchill);
       document.getElementById('windchill').innerHTML = Math.round(windchill) + " F";
   } else {
       document.getElementById('windchill').innerHTML = "N/A";
   }