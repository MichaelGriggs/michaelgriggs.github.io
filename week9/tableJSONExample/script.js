//get the element id's
nextBtn = document.getElementById('next-btn');
prevBtn = document.getElementById('prev-btn');

// api URL
const dataUrl = "https://api.osrsbox.com/"
let prev = null
let next = null

// GET OSRS Item Data from osrsbox
const getData = (urlRequest) => {

   //convert the strings into a url friendly string
   let encodedURI = encodeURI(dataUrl + urlRequest)
   //fetch data
   fetchData(encodedURI)
      .then(data => {
         //once data is fetched do the following: 
         displayData(data);
      }).catch(error => {
         console.log(error)
      })
}

// Populate the next set of 25
const populateNext = () => {
   if (next !== null) {
      getData(next)
   } else {

      return
   }
}

// Get the previous set of 25
const populatePrev = () => {
   if (prev !== null) {
      getData(prev)
   } else {
      prevBtn.style.visibility = 'hidden';
      return
   }
}

//FETCH DATA (this works with any REST request that doesn't require a header)
async function fetchData(url) {
   // console.log(url)
   const response = await fetch(url)
      .then(response => response.json())
      .then(responseData => {
         return responseData;
      })
      .catch(error => console.log(error)
      )
   return response;
}



// Manipulate the DOM to display the user the mars data.
function displayData(data) {
   //Get the id's to manipulate the DOM
   const dataTable = document.getElementById('data_table');
   // Clear the current HTML
   clearList(dataTable)

   // Display the items
   data._items.forEach(element => {
      dataTable.innerHTML += `<tr> <td> ${element.name} </td>
                                  <td> ${element.id} </td>
                                  <td>${element.cost} Coins</td>
                                  <td> ${element.examine} </td>
                                  <td> ${element.weight} kg </td>
                                  <td><a href= "${element.wiki_url}">Wiki </a></td> </tr>`;

   });
   next = data._links.next.href
   prev = data._links.prev.href
}

const clearList = (element) => {
   element.innerHTML = '' // Clear list to prevent more than 25 items
}

// Initialize data
getData('equipment');

// ADD a click listener to our button
// btn.addEventListener('click', getData);
nextBtn.addEventListener('click', populateNext)
prevBtn.addEventListener('click', populatePrev)


