let url = 'https://api.osrsbox.com/';

const getData = (urlRequest) => {
    let encodedURI = encodeURI(url + urlRequest);
    fetchData(encodedURI)
        .then((data) => {
            displayData(data);
        })
        .catch((error) => {
            console.log(error);
        })
};

async function fetchData(url) {
    const response = await fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => console.log(error));
    return response;
}

function displayData(data) {
    const dataTable = document.getElementById('data_table');
    data._items.forEach((element) => {
             dataTable.innerHTML += `<tr>
                                  <td>${element.name}</td>
                                  <td>${element.cost} </td>
                                  <td>${element.id} </td>
                                  <td>${element.release_date} </td>
                                  <td>${element.weight} </td>    
                              </tr>`;

   /*     let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = element.name;
        td.appendChild(td);
        dataTable.appendChild(tr);*/
    });
}

getData('equipment');