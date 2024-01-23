// Репета модуль 4 урок 1 Callback-функції і замикання /////////////////////////////////////////////////////////////////////////////////////////

//Callback example1

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback();
// };

// const fnB = function (number) {
//   console.log("Це лог при виклику fnB", 100);
// };

// fnA("Це лог fnA", fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });

//Callback example2

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);

//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };
// const callback2 = function (value) {
//   return value <= 4;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// console.log(r1);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };
// const r3 = filter(fruits, getFruitsWithQuantity);

// console.log(r3);

// Замикання

// const fnA = function (parameter) {
//   const innerVariable = "Значення внутрішньої змінної функції fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("Це виклик innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// Замикання приклад з кухарем

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} готує ${dish}`);
// };

// makeDish("Mango", "пиріжок");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// makeDish("Poly", "котлети");
// makeDish("Poly", "суп");
// makeDish("Poly", "каву");

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeShef("Mango");

// mango("пиріжок");
// mango("чай");

// const poly = makeShef("Poly");

// poly("суп");
// poly("котлети");

// Округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// console.log(Number(floatingPoint.toFixed(2)));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(4.5986, 2));
// console.log(rounder(4.5986, 3));

// З замиканням:

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(4.5986));
// console.log(rounder3(4.5986));

// З приватними властивостями з/п розібратися??????

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       if (amount > 1000) {
//         return "Ти офігів?";
//       }
//       salary += amount;
//     },

//     lower(amount) {
//       salary -= amount;
//     },

//     current() {
//       return `Поточна з/п ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory("Mango", 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// Приклад з бібліотекою

// const myLibFactory = function () {
//   let value = 0;

//   const add = function (num) {
//     value += num;
//   };

//   return {
//     add: add,
//     getValue() {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

// Стрілочні функції

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const add2 = function (a, b, c) {
//   return a + b + c;
// };

// const addArrow2 = (a, b, c) => a + b + c;

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// Переписуємо фільтр через стрілочну функцію

// const filter = (array, test) => {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);

//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = (value) => value >= 3;
// const callback2 = (value) => value <= 4;

// const r1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// console.log(r1);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = (fruit) => fruit.quantity >= 120;

// const r3 = filter(fruits, (fruit) => fruit.quantity >= 120);

// console.log(r3);

// Контекст стрілочної функції визначається місцем її оголошення

// const showThis = () => {
//   console.log(" this in showThis", this);
// };

// showThis(); // якщо не в середині модуля, то window, якщо всередині модуля, то undefined

// const user = { name: "Mango" };
// user.showContext = showThis;
// user.showContext();

// Репета модуль 4 урок 2 Стрілочні функції //////////////////////////////////////////////////////////////////////////////////////////////

// функція оголошена в глобальній області видимості завжди матиме контекст якщо не в середині модуля, то window, якщо всередині модуля, то undefined

// const user = {
//   fullName: "Mango",
//   showName() {
//     console.log("this:", this);
//     console.log("this.fullName:", this.fullName);

//     const inner = function () {
//       console.log("this in inner:", this);
//     };

//     inner();

//     const inner2 = () => {
//       console.log("this in inner2:", this);
//     };

//     inner2();
//   },
// };

// user.showName();

// Ніколи не використовувати стрілочні функції як метод об'єкта

// const user = {
//   fullName: "Mango",
//   showName() => {
//     console.log("this:", this);
//     console.log("this.fullName:", this.fullName);
//   },
// };

// user.showName();

// Стрілочні функції не можуть бути конструкторами

// const User = function (name) {
//   this.name = name;
// };

// const User = (name) => {
//   this.name = name;
// };

// console.log(new User("Mango"));

// Ще один прикдад стрілки як методу об'єкта

// const objA = {
//   x: 5,
//   showX() {
//     console.log("this in objA.showX", this);
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() {
//         console.log("this in objB.showThis", this);
//       },
//     };

//     objB.showThis();
//   },
// };

// objA.showX();

// const objA = {
//   x: 5,
//   showX() {
//     console.log("this in objA.showX", this);
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() => {
//         console.log("this in objB.showThis", this);
//       },
//     };

//     objB.showThis();
//   },
// };

// objA.showX();

// Рефакторинг на стрілочну функцію

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });

// const greaterThenTwo = numbers.filter((num) => num > 2);

// // console.log(greaterThenTwo);

// // const multByTwo = greaterThenTwo.map(function (num) {
// //   return num * 3;
// // });

// const multByTwo = greaterThenTwo.map((num) => num * 3);

// console.log(multByTwo);

// // const sorted = multByTwo.sort(function (a, b) {
// //   return a - b;
// // });

// const sorted = multByTwo.sort((a, b) => a - b);

// console.log(sorted);

// const res1 = numbers
//   .filter(function (num) {
//     return num > 2;
//   })
//   .map(function (num) {
//     return num * 3;
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });
// console.log(res1);

// const res2 = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);
// console.log(res2);

// Ще один приклад

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// // const onlineAndSorted = players
// //   .filter(function (player) {
// //     return player.isOnline;
// //   })
// //   .sort(function (prevPlayer, nextPlayer) {
// //     return prevPlayer.rank - nextPlayer.rank;
// //   });

// const onlineAndSorted = players
//   .filter((player) => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.table(onlineAndSorted);

// Ще один приклад

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800, timePlayed: 310 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600, timePlayed: 470 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100, timePlayed: 230 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400, timePlayed: 150 },
//   { id: "id-5", tag: "Chelsey", isOnline: false, rank: 900, timePlayed: 80 },
// ];

// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     rank: player.rank + player.rank * 0.1,
//   };
// });

// const updatedPlayers = players.map((player) => ({
//   ...player,
//   rank: player.rank + player.rank * 0.1,
// }));

// console.table(updatedPlayers);

// розібратися чому змінює id, а не timePlayed

// const playerIdToUpdate = "id-3";

// const updatedPlayers = players.map(function (player) {
//   if (player.id = playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });

// const updatedPlayers = players.map((player) => {
//   if ((player.id = playerIdToUpdate)) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });

// Розібратися чому лише цей варіант працює

// const updatedPlayers = players.map((player) => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player;
// });

// const updatedPlayers = players.map((player) =>
//   player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player
// );
// console.table(updatedPlayers);

// Матеріали Артем модуль 4 урок 1 /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function foo(callback) {
//   console.log("callback", callback);
//   callback(10);
// }

// function logger(value) {
//   console.log(value);
// }

// console.log("logger", logger);
// foo(logger);

// const arr = [2, 6, 1, 7, 3];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, multiply));
// console.log(each(arr, division));

// function add(first, second) {
//   return first + second;
// }

// function multiply(first, second) {
//   return first * second;
// }

// function division(first, second) {
//   return first / second;
// }

// Метод for each

// const arr = [2, 6, 1, 7, 3];
// item - ітеруємий елемент (кожен по черзі елемент масиву)
// idx - індекс поточного елемента
// arr - масив, який ми перебираємо
// arr.forEach(function (item, idx, arr) {
//   console.log("item", item);
//   console.log("idx", idx);
//   console.log("arr", arr);

//   // arr[idx] = item * 2;
//   // item *= 2; не працює, бо ми звертаємось до локальної змінної, а не до елемента масиву
// });

// console.log(arr);

// arr.forEach(function (item) {
//   console.log(`work with number ${item}`);
// });

// arr.forEach(function (_, idx) {
//   console.log(idx);
// });

// При роботі з перебираючими методами масивів розглядати по пунктах:
// Що він робить?
// Що він приймає?
// Що він повертає?

// forEach повертає undefined, його не можна присвоїти в змінну

// Види функцій

//declaration
// foo();
// function foo() {}

// expression
// const boo = function () {};

// arrow function
// const foo = () => { };
// () => { };

//Переробляємо функцію each на arrow function

// const arr = [2, 6, 1, 7, 3];

// const add = (first, second) => first + second;
// const multiply = (first, second) => first * second;
// const division = (first, second) => first / second;

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, multiply));
// console.log(each(arr, division));

// Приклад 1 коллбек функції

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
//   console.log(product);
// }

// function logProduct(obj) {
//   console.log(`Product ${obj.name}`);
// }
// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }

// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );
// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

// Приклад 2 коллбек функції
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT`, TRANSACTION_LIMIT);
//       return;
//     } else if (this.balance < amount) {
//       onError(`Not enough money in the account`);
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Successfully withdrawn ${amount}, balance ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT`, TRANSACTION_LIMIT);
//       return;
//     } else if (amount <= 0) {
//       onError(`Nice try Bro 😂`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Added ${amount}, balance ${this.balance}`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`✔Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌Error! ${message}`);
// }

// // Додавання іконок windows + :

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Приклад 4 рефакторинг коду

// const createProduct = (obj, callback) =>
//   callback({
//     id: Date.now(),
//     ...obj,
//   });

// const logProduct = (obj) => console.log(`Product ${obj.name}`);
// const logTotalPrice = ({ price, quantity }) =>
//   console.log(`Total price ${price * quantity}`);

// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );
// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

// Приклад 5 рефакторинг коду

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT`, TRANSACTION_LIMIT);
//       return;
//     } else if (this.balance < amount) {
//       onError(`Not enough money in the account`);
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Successfully withdrawn ${amount}, balance ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`TRANSACTION LIMIT`, TRANSACTION_LIMIT);
//       return;
//     } else if (amount <= 0) {
//       onError(`Nice try Bro 😂`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Added ${amount}, balance ${this.balance}`);
//   },
// };

// const handleSuccess = (message) => console.log(`✔Success! ${message}`);

// const handleError = (message) => console.log(`❌Error! ${message}`);

// // Додавання іконок windows + :

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Приклад 6 Інлайн стрілочні функції

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// Приклад 7 Метод for each

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = (arr) =>
//   arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍋", "🍇", "🍌", "🍑"]);

// Приклад 8 Метод for each

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calculateAverage = (...arr) => {
//   let total = 0;
//   arr.forEach((value) => (total += value));

//   return total / arr.length;
// };

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// Урок 1 Артем //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [3, 10];

// //**
//  * Test callback
//  * @param {*} arr array with two values
//  * @param {*} callback function add and function logger
//  */

// function foo(arr, callback) {
//   const first = arr[0];
//   const second = arr[1];
//   const result = callback(first, second);
//   console.log(callback);
//   console.log(result);
// }

// function add(a, b) {
//   return a + b;
// }

// function logger(a, b) {
//   console.log(`Виклик логгер ${a}`);
//   console.log(`Виклик логгер ${b}`);
// }

// console.log(foo(arr, add));
// console.log(foo(arr, logger));

// Стрілочна функція та повернення об'єкта

// const createProduct = (partialProduct, callback) =>
//   (partialProduct = { id: Date.now, ...partialProduct });

// const createProduct = (partialProduct, callback) => {
//   return {
//     id: Date.now,
//     ...partialProduct,
//   };
// };


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const calculateTotalBalance = users => {
//   return users.reduce((total, item)=> total + item.balance, 0);
// };

// console.log(calculateTotalBalance(users))

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).toSorted((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author))
// .map(book => book.author);

// console.log(names)

// метод toSorted приймає правий і лівий елементи масиву для порівння

// const arr = [3, 5, 1, 6, 8, 2, 3, 5, 7];

// const result = arr.toSorted((right, left) => {
//     return right - left;
// });

// console.log(result);

// right - left - за зростаням
// left - right - за спаданням

// ======================================= Задачі з Володимиром

// Задача 1

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
//   }
  
//   user.mood = "happy";
//   user.hobby = "skydiving";
//   user.premium = false;
  
//   for(const key of Object.keys(user)){
//     console.log(`${key}: ${user[key]}`)
//   };

  
// Задача 2

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// for(const salary of Object.values(salaries)){
//     sum += salary;
// };

// console.log(sum)

// Задача 3

// const products = [
//     {name: "product1", price: 100, amount: 0,},
//     {name: "product2", price: 100, amount: 5,},
//     {name: "product3", price: 100, amount: 2,},
//     {name: "product4", price: 100, amount: 1,},
//     {name: "product5", price: 100, amount: 6,},
//     {name: "product6", price: 100, amount: 3,},
//     {name: "product7", price: 100, amount: 8,},
//     {name: "product8", price: 100, amount: 4,},
// ];

// function getAllPropValues(propName){
//     const values = [];

//     for(const product of products){
//         if(product[propName] !== undefined){
//             values.push(product[propName]);
//         }
//     }

//     return values;
// }

// const result = getAllPropValues("amount");
// console.log(result)