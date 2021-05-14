
'use strict';

function Place(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCookies = 0;
  this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  this.total = 0;
}

var times = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM','7:00PM', 'Daily Location Total'];

// GENERAL FUNCTIONS
function randomCookies(max, min, avg) { // global function for randomizing the cookies.
  let randomNum = Math.abs(Math.floor(avg * (Math.random() * (max - min)) + min)); // the absolute minimum should be min at the very end.
  return randomNum;
}

function removeFooter() {
  const table = document.getElementById('table');
  
  const tfoot = document.getElementById('footer');
  table.removeChild(tfoot);
}

// PROTOTYPE FUNCTIONS FOR OBJECT "PLACE"
//
Place.prototype.setHourlyCookies = function() { // creating a function that Place object can use.
  this.hourlyCookies = (randomCookies(this.minCustomers, this.maxCustomers, this.avgCookies));
}

Place.prototype.generateCookies = function() { //creating a function that Place object can use.
    for (let a = 0; a < 14; a++) {
      this.setHourlyCookies();
      this.hours[a] = this.hourlyCookies
    }
    let total = 0;
    for (let b = 0; b < 14; b++) {
    total = total + this.hours[b];
    }
    this.total = total;
}

Place.prototype.render = function() {

  const header = document.getElementById('table-top');

  const table = document.getElementById('table');
  header.appendChild(table);

   const trElem = document.createElement('tr');
  table.appendChild(trElem);

  const thElem = document.createElement('h2');
  thElem.textContent = this.name;
  trElem.appendChild(thElem);

  this.generateCookies();

  let tdElem = null;
  for (let a = 0; a < this.hours.length; a++) {
    tdElem = document.createElement('td');
    tdElem.textContent = this.hours[a];
    trElem.appendChild(tdElem);
  }

  const totalElem = document.createElement('td');
  totalElem.textContent = this.total;
  trElem.appendChild(totalElem);
}

// RENDER TABLE FUNCTIONS

function createHeader() {
  const header = document.getElementById('table-top'); // Assigns a variable to the header element in HTML.

  const table = document.createElement('table'); // creates the table which will be used to store all info.
  table.setAttribute("id", "table")
  header.appendChild(table);

  const tHeadElem = document.createElement('thead');
  table.appendChild(tHeadElem);

  let trElem = document.createElement('tr');
  tHeadElem.appendChild(trElem);

  let buffer = document.createElement('th')
  trElem.appendChild(buffer);
  let thElem;
  for (let a = 0; a < times.length; a++) {
    thElem = document.createElement('th');
    thElem.textContent = times[a];
    trElem.appendChild(thElem);
  }
}

function renderFooter() {

  const header = document.getElementById('table-top');

  const table = document.getElementById('table');
  header.appendChild(table);

  const tfootElem = document.createElement('tfoot');
  tfootElem.id = "footer";
  table.appendChild(tfootElem);

  const trElem = document.createElement('tr');
  tfootElem.appendChild(trElem);

  const buffer = document.createElement('th');
  buffer.textContent = 'Totals';
  trElem.appendChild(buffer);

  for (let a = 0; a < (times.length - 5); a++) {
    let tdElem = document.createElement('td');
    trElem.appendChild(tdElem);
    let sum;
    for (let b = 0; b < places.length; b++)  {
      sum += places[b].hours[a];
    }
    tdElem.textContent = sum;
  }

  let fullTotal = 0;

  for (let c = 0; c < places.length; c++) {
    fullTotal += places[c].total;

  const all = document.createElement('td');
  all.textContent = fullTotal;
  trElem.appendChild(all);
  }
}

// Dynamically adjusting slider scale for Max/Min customers in addLocation field
const maxCustomers = document.querySelector('#max-customers');
const maxCustomerOutput = document.querySelector('.max-customers-output');

maxCustomerOutput.textContent = maxCustomers.value;

maxCustomers.addEventListener('input', function() {
  maxCustomerOutput.textContent = maxCustomers.value;
});

const minCustomers = document.querySelector('#min-customers');
const minCustomerOutput = document.querySelector('.min-customers-output');

minCustomerOutput.textContent = minCustomers.value;

minCustomers.addEventListener('input', function() {
  minCustomerOutput.textContent = minCustomers.value;
});

// EVENT HANDLING FOR THE SUBMIT BUTTON
const formElem = document.getElementById('add-location-form');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit() {
  event.preventDefault();

  let name = event.target.name.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let avgCookies = parseInt(event.target.avgCookies.value);

  let newPlace = new Place(name, minCustomers, maxCustomers, avgCookies);
  places.push(newPlace);
  
  newPlace.render();
  event.target.reset();
  removeFooter();
  renderFooter();

  for (let a = 0; a < places.length; a++) {
  console.log(places[a]);
  }

}
// DECLARING OUR OBJECTS AND FUNCTIONS

let Seattle = new Place('Seattle', 23, 65, 6.3);
let Tokyo = new Place('Tokyo', 3, 24, 1.2);  
let Dubai = new Place('Dubai', 11, 38, 3.7);
let Paris = new Place('Paris', 20, 38, 2.3);
let Lima = new Place('Lima', 2, 16, 4.6);

createHeader();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

let places = [
Seattle,
Tokyo,
Dubai,
Paris,
Lima,
];

renderFooter();








