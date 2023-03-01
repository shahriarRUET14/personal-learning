'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/portugal`);
request.send(); ///////////////////
console.log(request.responseText);
