// 'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function({starterindex = 1, maindIndex = 0, unKnownObj = 5}){
    console.log(`Order Recieved : ${this.starterMenu[starterindex]}`)
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },};


  console.log(Object.entries(restaurant))
  const objToMap = new Map(Object.entries(restaurant))

  console.log([...objToMap])
  
  // for(const [key, value] of objToMap){
  //   console.log(value)

  // }




// const orderSet = new Set([
//   'a','b','c'
// ]);
// console.log(orderSet)
// for(const order of orderSet)
// {console.log(order);}



// console.log(restaurant.openingHours.thu)




// //Rest Paterns And Paramenters
// const arr = [1,2,3, ...[4,5]] //spread in left side


// //...rest partern : destructuring

// const [ a,b, ...other] = arr
// console.log(a,b,other)

// const [d,e, ...c]   = [...restaurant.mainMenu, ...restaurant.starterMenu]  

// //Objects
// const {sat: newStat = [], ...weekdays} = restaurant.openingHours
// console.log(newStat);
// newStat.open =true;
// console.log(restaurant.openingHours)
// console.log(null || undefined || a)
// the Rest Element must be the Rest Elemnet
// const arr = [7,8,9];
// const newArr = [1,2, ...arr];
// console.log(...newArr);
// //Whenever we need all the element individually then we need spreas opearator

// const newMenu = [...restaurant.mainMenu, 'Vat'];
// console.log(newMenu);
// //Copy of Array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // restaurant.starterMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //ealmost every
// const str = 'Shahriar';
// const letters = [ ...str, ' ', 'S.'];
// console.log(letters);









// const arr = [1,2,3,4]
// const a = [0]
// const b = [1]
// const c = [2]
// const [x,y,z] = arr  // its a destructuring assignment
// console.log(x,y,z)
//original array not affected
// console.log(arr)

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

//Switching Variables
// [secondary, main] = [main, secondary]
// [main, secondary] = [secondary,main]
// console.log(main, secondary);


// const [starter, mainItem] = restaurant.order(2,0)
// console.log(starter,mainItem);

// //nested 
// const nested = [2,4, [ 5,6]];
// // const [i , ,j] = nested;
// // console.log(j);
// //nested destructuring
// const [i, ,[ j,k]] = nested;
// console.log(i,j,k)


// //default Values

// const [p,q,r=1] = [8,9];
// console.log(p,r)


//Destructuring Objectss
 
//with the same

// to reference use curly braces 
// const {name:shahriar, openingHours, categories} = restaurant;
// // console.log(shahriar, openingHours, categories);

// const { starterMenu: starters = [] , Menu = []} = restaurant;
// // console.log(Menu);


// //mutating Variables 
// // Third bracket uses to Array, curly braces uses to point object or function
// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};

//nested objectsc
// const {fri:{open:o = [],close:c = []}=[]} = restaurant.openingHours;
// // console.log(o)

// restaurant.orderDelivery(
// {
//   time: '20:22',
//   address: 'No address',
//   mainIndex :2,
//   starterindex : 3,
// });
// restaurant.orderDelivery({
//   unKnownObj:5
// });
























