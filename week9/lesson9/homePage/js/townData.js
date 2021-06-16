const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //  console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        towns.splice(1, 1); //remove Springfield from array
        towns.splice(2, 3); //remove Franklin, Greenfield, and Placerton from array

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let info = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            motto.textContent = 'Motto: ' + towns[i].motto;
            founded.textContent = 'Year of Founding: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Avg. Annual Rain: ' + towns[i].averageRainfall + " in.";
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', "landscape photo of " + towns[i].name);

            info.appendChild(h2);
            info.appendChild(motto);
            info.appendChild(founded);
            info.appendChild(population);
            info.appendChild(rainfall);
            info.setAttribute("class", "info");

            card.setAttribute("class","card");
            card.appendChild(info);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });