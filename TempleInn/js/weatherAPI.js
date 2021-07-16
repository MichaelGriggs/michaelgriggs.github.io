/*--------------------------------------------------------------
          Code to populate Billings with weather
------------------------------------------------------------- */

const billingsURL = "https://api.openweathermap.org/data/2.5/weather" +
    "?id=5640350&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 5640350 in imperial units with my app key
fetch(billingsURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('billingsTempF').textContent = Math.round(jsObject.main.temp); //set text of the span to show the temp in F
        document.getElementById('billingsTempC').textContent = Math.round(((jsObject.main.temp)-32)*(5/9)); //set span text to show current temp in C
        var lower = jsObject.weather[0].description;
        document.getElementById('billingsWeather').textContent = lower.charAt(0).toUpperCase() + lower.slice(1); //capitalize first letter of weather description


    });



/*--------------------------------------------------------------
          Code to populate San Diego with weather
------------------------------------------------------------- */

const sanDiegoURL = "https://api.openweathermap.org/data/2.5/weather" +
    "?id=5391811&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 5391811 in imperial units with my app key
fetch(sanDiegoURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('sanDiegoTempF').textContent = Math.round(jsObject.main.temp); //set text of the span to show the temp in F
        document.getElementById('sanDiegoTempC').textContent = Math.round(((jsObject.main.temp)-32)*(5/9)); //set span text to show current temp in C
        var lower = jsObject.weather[0].description;
        document.getElementById('sanDiegoWeather').textContent = lower.charAt(0).toUpperCase() + lower.slice(1); //capitalize first letter of weather description


    });



    /*--------------------------------------------------------------
          Code to populate Kyiv with weather
------------------------------------------------------------- */

const kyivURL = "https://api.openweathermap.org/data/2.5/weather" +
"?id=703448&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 703448 in imperial units with my app key
fetch(kyivURL)
.then((response) => response.json())
.then((jsObject) => {
    document.getElementById('kyivTempF').textContent = Math.round(jsObject.main.temp); //set text of the span to show the temp in F
    document.getElementById('kyivTempC').textContent = Math.round(((jsObject.main.temp)-32)*(5/9)); //set span text to show current temp in C
    var lower = jsObject.weather[0].description;
    document.getElementById('kyivWeather').textContent = lower.charAt(0).toUpperCase() + lower.slice(1); //capitalize first letter of weather description


});





    /*--------------------------------------------------------------
          Code to populate Apia with weather
------------------------------------------------------------- */

const apiaURL = "https://api.openweathermap.org/data/2.5/weather" +
"?id=4035413&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 4035413 in imperial units with my app key
fetch(apiaURL)
.then((response) => response.json())
.then((jsObject) => {
    document.getElementById('apiaTempF').textContent = Math.round(jsObject.main.temp); //set text of the span to show the temp in F
    document.getElementById('apiaTempC').textContent = Math.round(((jsObject.main.temp)-32)*(5/9)); //set span text to show current temp in C
    var lower = jsObject.weather[0].description;
    document.getElementById('apiaWeather').textContent = lower.charAt(0).toUpperCase() + lower.slice(1); //capitalize first letter of weather description


});

