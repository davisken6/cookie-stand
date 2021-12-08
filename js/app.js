'use strict';

// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals

let seattleUl = document.getElementById('seattle');
let tokyoUl = document.getElementById('tokyo');
let dubaiUl = document.getElementById('dubai');
let parisUl = document.getElementById('paris');
let limaUl = document.getElementById('lima');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  cookiesPerHourArr: [],
  dailyTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(this.avg * getRandCust(this.minCust, this.maxCust));
      this.cookiesPerHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
seattle.calcCookiesPerHour();

function getRandCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.render = function () {


  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
    seattleUl.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyTotal} cookies`;
  seattleUl.appendChild(li);

};
seattle.render();




let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(this.avg * getRandCust(this.minCust, this.maxCust));
      this.cookiesPerHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
tokyo.calcCookiesPerHour();

tokyo.render = function () {


  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
    tokyoUl.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyTotal} cookies`;
  tokyoUl.appendChild(li);

};
tokyo.render();




let dubai = {
  location: 'Dubai',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(this.avg * getRandCust(this.minCust, this.maxCust));
      this.cookiesPerHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
dubai.calcCookiesPerHour();

dubai.render = function () {


  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
    dubaiUl.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyTotal} cookies`;
  dubaiUl.appendChild(li);

};
dubai.render();




let paris = {
  location: 'Paris',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(this.avg * getRandCust(this.minCust, this.maxCust));
      this.cookiesPerHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
paris.calcCookiesPerHour();

paris.render = function () {


  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
    parisUl.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyTotal} cookies`;
  parisUl.appendChild(li);

};
paris.render();




let lima = {
  location: 'Lima',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(this.avg * getRandCust(this.minCust, this.maxCust));
      this.cookiesPerHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
lima.calcCookiesPerHour();

lima.render = function () {


  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArr[i]} cookies`;
    limaUl.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.dailyTotal} cookies`;
  limaUl.appendChild(li);

};
lima.render();

