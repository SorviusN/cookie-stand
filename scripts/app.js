'use strict';

function Place(name, minCustomers, maxCustomers, avgCookies, hourlyCookies, hours, total) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCookies = hourlyCookies;
  this.hours = hours;
  this.total = total;

}

function randomCookies(max, min, avg) { // global function for randomizing the cookies.
  let randomNum = Math.abs(Math.floor(avg * (Math.random() * (max - min)) + min)); // the absolute minimum should be min at the very end.
  return randomNum;
}

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

let Seattle = new Place('Seattle', 23, 65, 6.3, 0, [], 0);
let Tokyo = new Place('Tokyo', 3, 24, 1.2, 0, [], 0);  
let Dubai = new Place('Dubai', 11, 38, 3.7, 0, [], 0);
let Paris = new Place('Paris', 20, 38, 2.3, 0, [], 0);
let Lima = new Place('Lima', 2, 16, 4.6, 0, [], 0);

console.log(Seattle.name);


function createHeader() {
  let times = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM','7:00PM', 'Daily Location Total'];

  const header = document.getElementById('table-head'); // Assigns a variable to the header element in HTML.

  const table = document.createElement('table'); // creates the table which will be used to store all info.
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

function createTable(Place) {

  const header = document.getElementById('table-head');

  const tbodyElem = document.createElement('tbody');
  header.appendChild(tbodyElem);

  const trElem = document.createElement('tr');
  tbodyElem.appendChild(trElem);

  const thElem = document.createElement('h2');
  thElem.textContent = Place.name;
  trElem.appendChild(thElem);


  Place.generateCookies();

  let tdElem = null;
  for (let a = 0; a < 14; a++) {
    tdElem = document.createElement('td');
    tdElem.textContent = Place.hours[a];
    trElem.appendChild(tdElem);
  }

  const totalElem = document.createElement('td');
  totalElem.textContent = Place.total;
  trElem.appendChild(totalElem);
}

function createFooter() {
  const header = document.getElementById('table-head');

  const tfootElem = document.createElement('tfoot');
  header.appendChild(tfootElem);

  const trElem = document.createElement('tr');
  tfootElem.appendChild(trElem);

  const buffer = document.createElement('td');
  trElem.appendChild(buffer);

  const tdElem = document.createElement('td');
  for (let a = 0; a < 14; a++) {
    tdElem.textContent = '1000';
    trElem.appendChild(tdElem);
  }
}
createHeader();
createTable(Seattle);
createTable(Tokyo);
createTable(Dubai);
createTable(Paris);
createTable(Lima);
createFooter();
