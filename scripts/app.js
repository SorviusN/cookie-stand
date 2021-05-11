'use strict';

function randomCookies(max, min, avg) {
  let randomNum = avg * (Math.random() * (max - min)) + min; // the absolute minimum should be min at the very end.
  return randomNum;
}


let places = [{
  name: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.5,
  hourlyCookies: null,
  hours: [],

  createTimes: function() {
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
  },

  setHourlyCookies: function() {
  this.hourlyCookies = randomCookies(this.minCustomers, this.minCustomers, this.avgCookies);
  },
},
{
  name: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlyCookies: null,
  hours: [],

  createTimes: function() {
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
  },

  setHourlyCookies: function() {
  this.hourlyCookies = randomCookies(this.minCustomers, this.minCustomers, this.avgCookies);
  }
},
{
  name: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlyCookies: null,
  hours: [],

  createTimes: function() {
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
  },

  setHourlyCookies: function() {
  this.hourlyCookies = randomCookies(this.minCustomers, this.minCustomers, this.avgCookies);
  }
},
{ 
  name: "Paris",
  minCustomers: 3,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlyCookies: null,
  hours: [],

  createTimes: function() {
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
  },

  setHourlyCookies: function() {
  this.hourlyCookies = randomCookies(this.minCustomers, this.minCustomers, this.avgCookies);
  }
},
{ 
  name: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlyCookies: null,
  hours: [],

  createTimes: function() {
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
  },

  setHourlyCookies: function() {
  this.hourlyCookies = randomCookies(this.minCustomers, this.minCustomers, this.avgCookies);
  }
},
]


for (let i = 0; i < places.length; i++) {
  places[i].createTimes();

  const locations = document.getElementById('Locations');

  const article = document.createElement('article');
  locations.appendChild(article);

  const h1Elem = document.createElement('h1');
  h1Elem.textContent = places[i].name;
  article.appendChild(h1Elem);

  const uElem = document.createElement('ul');
  article.appendChild(uElem);

    for (let a = 0; a < places[i].hours.length; a++) {
    //create new line
      const liElem = document.createElement('li');
      liElem.textContent = places[i].hours[a];
      uElem.appendChild(liElem);
    }
}
