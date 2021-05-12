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

function createHeader()
function createTable(Place) {

  const locations = document.getElementById('Locations');

  const article = document.createElement('article');
  locations.appendChild(article);

  const h1Elem = document.createElement('h1');
  h1Elem.textContent = Place.name;
  article.appendChild(h1Elem);

  const tableElem = document.createElement('table');
  article.appendChild(tableElem);
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);
  

}
