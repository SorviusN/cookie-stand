'use strict';

function randomCookies(max, min, avg) { // global function for randomizing the cookies.
  let randomNum = (avg * (Math.random() * (max - min)) + min); // the absolute minimum should be min at the very end.
  return randomNum;
}

function Place(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCookies = null;
  this.hours = [];
}

Place.prototype.setHourlyCookies = function() { // creating a function that Place object can use.
  this.hourlyCookies = (randomCookies(this.minCustomers, this.minCustomers, this.avgCookies));
}

let Seattle = new Place('Seattle', 23, 65, 6.3);
let Tokyo = new Place('Tokyo', 3, 24, 1.2);
let Dubai = new Place('Dubai', 11, 38, 3.7);
let Paris = new Place('Tokyo', 20, 38, 2.3);
let Lima = new Place('Tokyo', 2, 16, 4.6);

console.log(Seattle.name);

Place.prototype.setHourlyCookies = function() { //creating a function that Place object can use.
    let total = 0;
    let cookies = 0;
    for (let a = 7; a < 13; a++) {
      this.setHourlyCookies();
      cookies = this.hourlyCookies;
      this.hours.push(`${a}am: ${cookies} cookies`);
      total += cookies;
    }
    for(let b = 1; b < 9; b++) {
      this.setHourlyCookies();
      cookies = this.hourlyCookies;
      this.hours.push(`${b}pm: ${cookies} cookies`);
      total += cookies;
    }
  this.hours.push(`Total: ${total} cookies`);
}

function createHeader() {
  let times = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM','7:00PM'];

  const header = document.getElementById('table-head'); // Assigns a variable to the header element in HTML.

  const table = document.createElement('table'); // creates the table which will be used to store all info.
  header.appendChild(table);

  const tHeadElem = document.createElement('thead');
  table.appendChild(tHeadElem);

  let trElem = document.createElement('tr');
  

  

  for (let a = 0; a < times.length; a++) {

  }
}
function createTable(Place) {


  const article = document.createElement('article');
  table.appendChild(article);

  const h1Elem = document.createElement('h1');
  h1Elem.textContent = Place.name;
  article.appendChild(h1Elem);

  const tableElem = document.createElement('table');
  article.appendChild(tableElem);
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);
  

}
