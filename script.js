'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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
  openingHours,
  // openingHours: openingHours,

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivered({ startIndex = 0, mainIndex = 0, time = '20:40', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIndregient, ...otherIngredient) {
    console.log(mainIndregient, otherIngredient);
  },
};

// Maps advance
const question = new Map([
  ['question', 'Whats the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your anwser:'));
console.log(answer);

// answer === 3
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer));

// convert to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
// Maps: Fundamental 

const rest = new Map();
rest.set('name', 'Emmanuel Babalola');
rest.set(1, 'Yola Adamawa');
rest.set(2, 'Ikotun Lagos');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are closed :(');

console.log(rest);
console.log(rest.get('categories'));
console.log(rest.get('name'));
console.log(rest.get(2));

const time = 8;
console.log(rest.get(time > rest.set('open') && time < rest.set('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


const orderSet = new Set([
  'Pizza',
  'Pizza',
  'Pasta',
  'Potorico',
  'Pasta',
  'Pasta',
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.add('Rice'));
console.log(orderSet.has('Rice'));
console.log(orderSet.has('Beans'));
orderSet.delete('Potorico');
// orderSet.clear();

console.log(orderSet);

for (const set of orderSet) console.log(set);

// Example
const staff = ['waiter', 'Chef', 'waiter', 'Manager', 'Chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['waiter', 'Chef', 'waiter', 'Manager', 'Chef', 'waiter']).size
);

console.log(new Set('SegunOyinloye').size);
 
// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// properties VALUE
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// const rest1 = {
//   name: 'Tope',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Yemi',
//   owner: 'Frank Edward',
// };


`

// for loop ES6
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

// for (let i = 0; (i = menu.length); i++) console.log(menu[i]);

// Or assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// And assignment operator
// rest1.owner = rest1.owner && '<ANNONYMOUS>';
// rest2.owner = rest2.owner && '<ANNONYMOUS>';
// rest1.owner &&= '<ANNONYMOUS>';
// rest2.owner &&= '<ANNONYMOUS>';

// console.log(rest1);
// console.log(rest2);


// Nullish Coelencin Operator
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// Use Any data type, return Any data type, short-circuiting
console.log(3 || 'Segun');
console.log('' || 'Segun');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----And-----');
console.log(0 && 'Segun');
console.log(7 && 'Segun');

console.log('Hello' && 23 && null && 'Segun');

// practical examle
// const restaurant1 = restaurant.orderPizza
//   ? restaurant.orderPizza('Cheese', 'milk')
//   : 10;
// console.log(restaurant1);

if (restaurant.orderPizza) {
  restaurant.orderPizza('Cheese', 'milk');
}

restaurant.orderPizza && restaurant.orderPizza('Cheese', 'milk');

// ========= Rest Pattern =========

// Spread bcs on the right side
const arr = [1, 2, ...[3, 5]];

// Rest bcs on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [x, , y, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(x, y, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// fnction

const add = function (...number) {
  let sun = 0;
  for (let i = 0; i < number.length; i++) {
    sun += number[i];
  }
  console.log(sun);
};
add(2, 3);
add(2, 3, 4, 5, 6, 7, 8);
add(2, 3, 67, 8, 45, 23, 14, 56);

const z = [223, 5, 7];
add(...z);

restaurant.orderPizza('Onions', 'Cheese', 'busiciut', 'Milk');
restaurant.orderPizza('Onions');



// ========Spreed operator=========

// Real world example
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt('Ingredients 2?'),
  // prompt('ingredient 3?'),
  // prompt('Ingredient 3'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// Object
const newRestuarant = { foundIn: 1996, ...restaurant, founder: 'Galber Toris' };
console.log(newRestuarant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Julius Berger';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// Spreed operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Bread and Beans'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterable are arrays, strings, maps, sets Not object
const str = 'Segun';
const letter = [...str, '', 'S.'];
console.log(letter);
console.log(...str);





// ========Destructuring Object=========
restaurant.orderDelivered({
  time: '12:22',
  address: 'Adebisi Onanbanjo 23',
  mainIndex: 2,
  startIndex: 2,
});

restaurant.orderDelivered({
  address: 'Adebisi Onanbanjo 23',
  startIndex: 2,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default value
const { main = [], starterMenu: starter = [] } = restaurant;
console.log(main, starter);

// mutating variable in object
let a = 111;
let b = 123;
const obj = { a: 3, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested Object
const {
  fri: { open: c, close: o },
} = openingHours;
console.log(c, o);

// Destructuring Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ************switching between variable************
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, k);

//  defaulf value
const [r = 1, s = 1, t = 1] = [8, 9];
console.log(r, s, t); 

//  ========= Coding Challenge ==========

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const playerS1 = game.players[0];
const playerS2 = game.players[1];

const [[gk]] = game.players;
// const gk = game.players[[i]];

const [[, ...fieldPlayers]] = game.players;

// join two array team
const allPlayers = [...game.players[0], ...game.players[1]];

// adding to array

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

console.log(allPlayers);
console.log(fieldPlayers);
console.log(gk);
console.log(playerS1, playerS2);

// const str = 'Segun';
// const letter = [...str, '', 'S.'];
// console.log(letter);
// console.log(...str);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// odds

const { team1: team1, x: draw, team2: team2 } = game.odds;

console.log(team1, draw, team2);

// const printGoal = function (...playerName) {
//   let totalGoal = 0;
//   for (let i = 0; i < playerName.length; i++) {
//     for (let i = 0; i < game.scored.length; i++) {
//       if (playerName[i] == game.scored[i]) totalGoal += 1;
//     }
//     console.log(totalGoal);
//   }
// };


// printGoals('Gnarby', 'Lewandowski');

//  ========= Coding Challenge ==========

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// challenge 1
for (const [i, j] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${j}`);
}

//  challenge 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(Math.trunc(average));

// challenge 3
for (const [i, j] of Object.entries(game.odds)) {
  const teamstr = i === 'x' ? 'draw' : `victory ${game[i]}`;
  console.log(`Odd is ${teamstr} ${j}`);
}

//*/

//
