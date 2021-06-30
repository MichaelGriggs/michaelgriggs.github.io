import {jsData} from 'week10\Jun23\nobelData.js';



const loadJsonData = async () => {
    const data = await fetch('nobel.json') //fetches the JSON file. This one is local but an API URL would be about the same.
        .then((response) => response.json()); //this line turns the JSON into a usable JS object
    console.log(data.prizes[2].laureates[0].firstname);
    for (p of data.prizes) {
        if (parseInt(p.year) > 2000) {
            let surname = p.laureates[0].surname;
            if (surname && surname.startsWith('C')) {
                console.log(p);
            }
        }
    }

}
//loadJsonData();

const loadJsData = () => {
    console.log(jsData);
}
loadJsData();