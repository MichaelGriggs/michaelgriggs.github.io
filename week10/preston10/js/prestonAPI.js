/*--------------------------------------------------------------
          Code to populate the weather summary with data
------------------------------------------------------------- */

const apiURL = "https://api.openweathermap.org/data/2.5/weather" +
    "?id=5604473&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests weather info at town 5604473 in imperial units with my app key
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp; //set text of the span to show the temp in F
        document.getElementById('humidity').textContent = jsObject.main.temp_min; // show humidity
        document.getElementById('high-temp').textContent = jsObject.main.temp_max; //show high temp 
        document.getElementById('low-temp').textContent = jsObject.main.temp_min; // show low temp 
        document.getElementById('description').textContent = jsObject.weather[0].description;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;

    });

/*--------------------------------------------------------------
          Code to populate the forecast table with data
------------------------------------------------------------- */


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast" +
    "?id=5604473&units=imperial&appid=fe61f743c07bfa797c0b732d9771b3f7";
//line above requests forecast info at town 5604473 in imperial units with my app key
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
                                             ${jsObject.list[i].main.temp} °F
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