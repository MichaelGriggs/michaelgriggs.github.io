const apiURL = "http://api.openweathermap.org/data/2.5/weather" +
"?id=5604473&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 5604473 in imperial units with my app key
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp; //set text of the span to show the temp in F
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //add .png to access the file we want
        const desc = jsObject.weather[0].description; // access the description of the weather
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc); // set 'icon's src to the variable imagesrc
        document.getElementById('icon').setAttribute('alt', desc); //set 'icon's alt text to the description provided
    });