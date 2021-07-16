let kyivTable = document.getElementById('kyivTableBody');

fetch(address)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        kyivTable.innerHTML += `<tr>
                                <td> ${jsObject.days[0].sunday.day}</td>
                                <td> ${jsObject.days[0].sunday.hours}</td>
                                <td> ${jsObject.days[0].sunday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[1].monday.day}</td>
                                <td> ${jsObject.days[1].monday.hours}</td>
                                <td> ${jsObject.days[1].monday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[2].tuesday.day}</td>
                                <td> ${jsObject.days[2].tuesday.hours}</td>
                                <td> ${jsObject.days[2].tuesday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[3].wednesday.day}</td>
                                <td> ${jsObject.days[3].wednesday.hours}</td>
                                <td> ${jsObject.days[3].wednesday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[4].thursday.day}</td>
                                <td> ${jsObject.days[4].thursday.hours}</td>
                                <td> ${jsObject.days[4].thursday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[5].friday.day}</td>
                                <td> ${jsObject.days[5].friday.hours}</td>
                                <td> ${jsObject.days[5].friday.ordinances}</td>
                            </tr>
                            <tr>
                                <td> ${jsObject.days[6].saturday.day}</td>
                                <td> ${jsObject.days[6].saturday.hours}</td>
                                <td> ${jsObject.days[6].saturday.ordinances}</td>
                            </tr>`
   
                            ;
    });