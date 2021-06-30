/*--------------------------------------------------------------
          Code to populate the weather summary with data
------------------------------------------------------------- */

const apiURL = "https://api.openweathermap.org/data/2.5/weather" +
    "?id=5585010&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 5585010 in imperial units with my app key
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp); //set text of the span to show the temp in F
        document.getElementById('humidity').textContent = Math.round(jsObject.main.temp_min); // show humidity
        document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max); //show high temp 
        document.getElementById('low-temp').textContent = Math.round(jsObject.main.temp_min); // show low temp 
        document.getElementById('description').textContent = jsObject.weather[0].description;
        document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);

    });

/*--------------------------------------------------------------
          Code to populate the forecast table with data
------------------------------------------------------------- */


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast" +
    "?id=5585010&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests forecast info at town 5585010 in imperial units with my app key
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const dataTable = document.getElementById("data_table");
        const dataHead = document.getElementById("data_head");
        dataTable.innerHTML = ''; //clear previous contents of table
        /* the next five lines of code took me far longer than I would have liked */
        for (i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes("18:00:00")) {
                dataTable.innerHTML += `<td> <img src="https://openweathermap.org/img/wn/${jsObject.list[i].weather[0].icon}@2x.png">
                                             ${Math.round(jsObject.list[i].main.temp)} °F
                                        </td>`;

                let date = new Date(jsObject.list[i].dt * 1000); //takes unix seconds, turns into milliseconds
                let day = date.getDay();

                switch (day) {
                    case 0:
                        day = "Sunday";
                        break;
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break;
                    case 4:
                        day = "Thursday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case 6:
                        day = "Saturday";
                        break;
                }

                dataHead.innerHTML += `<th> ${day}</th>`
            }
        }
    });

/*--------------------------------------------------------------
          Code to populate the events article
------------------------------------------------------------- */

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {

        const towns = jsonObject['towns'];

        let articleContent = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('p');
        let content = document.createElement('p');
        let image = document.createElement('img');
        let link = document.createElement('a');

        title.textContent = towns[2].events[2];
        author.textContent = "By: Michael Griggs";
        content.textContent = "Triathlons? Amatuer. IronMan races? Child play. Marathons?" +
            " Those make a nice warmup. If you really want to test your physical ability, try out for the " +
            "Bear Lake Blunder Run. Nowhere else are you allowed to run a race with chained legs, a bike that has square" +
            " wheels, and goggles painted black to blind you. You'll definitely blunder through this one!";
        link.setAttribute('href', "#");
        link.textContent = "Make a blunder by signing up!"

        image.setAttribute('src', "images/fish.jpg");
        image.setAttribute('alt', "Bear Lake");


        articleContent.appendChild(title);
        articleContent.appendChild(author);
        articleContent.appendChild(content);
        articleContent.appendChild(link);


        document.getElementById("eventArticle").appendChild(articleContent);
        document.getElementById("eventArticle").appendChild(image);



    });