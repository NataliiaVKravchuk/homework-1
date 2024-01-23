// Модуль 3 заняття 1 Репета Теорія

// const playlist = {
//   name: "Мій супер плейлист",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   changeName(newName) {
//     console.log("This in changeName", this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());
// playlist.changeName("Нове ім'я");
// playlist.addTrack("new_track");
// playlist.updateRating(4);

// console.log(playlist.getTrackCount());

// // Кома після останнього ключа в об'єкті ставиться для гіта, щоб при наступному коміті він не враховував, що даний рядок змінився
// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist["tracks"]);
// // При зверненні до неіснуючого ключа буде undefined
// const propertyName = "tracks";

// playlist.qwe = 5;
// playlist.rating = 10;

// console.log(playlist);

// Як розрізнити об'єкт від області видимості

// 1. Присвоєння у змінну

// const x = {};

// // 2. Присвоєння аргумента у параметр функції

// const fn = function (myObject) {
//   // при виклику функції відбувається присвоєння об'єкта в параметр
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// // 3. Повернення об'єкта як результата функції

// const rtfm = function () {
//   {
//     return {};
//   }
// };

// const userName = prompt("Enter username");
// const email = prompt("Enter email");

// const signupData = {
//   userName,
//   email,
// };

// console.log(signupData);
// console.log(signupData.userName);
// console.log(signupData.email);

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// const a = [1, 2, 3];
// a.hello = ":)";
// console.log(a);

// масив - це теж об'єкт

// const fn = function () {
//   console.log("hello");
// };
// fn.hello = ":)";

// console.dir(fn);
// console.dir(fn.hello);

// функція - це теж об'єкт

// Конструктори:

// Number

// Boolean

// Array

// Object

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // const keys = Object.keys(feedback);

// // console.log(keys);

// // for (const key of keys) {
// //   console.log(key);
// //   console.log(feedback[key]);

// //   totalFeedback += feedback[key];
// // }

// // console.log("totalFeedback", totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }
// console.log("totalFeedback", totalFeedback);

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);

//   friend.newprop = 555;
// }

// при переборі складного типу даних у змінну const friend записується посилання, а не робиться копія

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === name) {
//       return "Знайшли!!!";
//     }
//   }
//   return "Не знайшли :(";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     // if (friend.online) {
//     //   friendByStatus.online.push(friend);
//     // } else {
//     //   friendByStatus.offline.push(friend);
//     // }

//     if (friend.online) {
//       friendByStatus.online.push(friend);
//       continue;
//     }
//     friendByStatus.offline.push(friend);
//   }
//   return friendByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// // Кількість властивостей об'єкта:

// console.log(Object.keys(x).length);

// Модуль 3 заняття 2 Репета Теорія

// const numbers1 = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers1);

// const numbers2 = [1, 2, 3, ...[4, 5, 6], 7, 8, 9];

// console.log(numbers2);

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const a = [1, 2, 3];

// const b = [...a];

// console.log(a);
// console.log(b);
// console.log(a === b);

// const c = [{ a: 1 }, { b: 2 }, { c: 3 }];

// const d = [...c];

// console.log(c);
// console.log(d);
// console.log(c[0] === d[0]);

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
// console.log(allTemps);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);
// const c = {
//   ...a,
//   ...b,
// };
// console.log(c);

// console.log(..."asdfg");
// строки теж розпиляються, так як це ітерабельний об'єкт, а числа не розпиляються

// const defaultSettings = {
//   theme: "light",
//   showNotitfications: true,
//   hideSideBar: false,
// };

// const userSettings = {
//   showNotitfications: false,
//   hideSideBar: true,
// };

// const finalSettins = {
//   ...defaultSettings,
//   ...userSettings,
// };

// const playlist = {
//   name: "Мій супер плейлист",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };

// console.log(playlist.name, playlist.rating, playlist.tracks);

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfTracks = 0,
//   author = "Anonimus",
// } = playlist;

// console.log(name, rating, tracks, numberOfTracks, author);

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   avatar: "http://s3.amazonaws.com/uifaces/faces.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, avatar, stats } = profile;

// const { followers, views, likes } = stats;

// const {
//   name,
//   tag,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// const name = profile.name;
// const tag = profile.tag;
// const avatar = profile.avatar;

// console.log(name, tag, avatar, followers, views, likes);

// const { name, tag } = profile;

// const restProps = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };

// const { name, tag, ...restProps } = profile;

// console.log(restProps);

// const showProfileInfo = function ({ name, tag, avatar, stats }) {
//   console.log(name, tag, avatar, stats);
// };

// showProfileInfo(profile);

// const rgb = [255, 100, 80];

// const [red, , blue] = rgb;

// console.log(red, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const ratings = Object.values(authors);

// console.log(Math.max(...ratings));

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   // const[(name, rating)] = entry;

//   // const name = enty[0];
//   // const name = rating[1];
//   console.log(name, rating);
// }

// Задача про корзину товарів

// { name: "🍎", price: 50 }
// { name: "🍇", price: 70 }
// { name: "🍋", price: 60 }
// {name: "🍑", price: 110}

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log("Знайшли", productName);
//         console.log("Індекс", i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];
//       if (item.name === product.name) {
//         item.quantity -= 1;
//         return;
//       }
//       items.splice(i, 1);
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍑", price: 110 });
// cart.add({ name: "🍑", price: 110 });
// cart.add({ name: "🍑", price: 110 });

// console.table(cart.getItems());

// console.log("Total:", cart.countTotalPrice());

// cart.remove("🍑");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity("🍎");
// console.table(cart.getItems());

// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");
// console.table(cart.getItems());

// Модуль 3 заняття 1 Артем

// Задача 1

// const userA = {
//   username: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const userB = userA;
// userB.age = 30;

// console.log(userA.age, userB.age);

// userA.mood = "happy";
// // userA["mood"] = "happy";
// userA.hobby = "skydiving";
// userA["premium"] = false;
// userA.skills = {
//   run: true,
// };

// userA.city = "VN";
// console.table(userA);

// delete userA.city;
// console.table(userA);

// const arr = Object.keys(userA);

// for (const key of arr) {
//   console.log(`${key} - ${userA[key]}`);
// }
// console.log(arr);

// Задача 2
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Peter: 130,
// };

// const test = Object.create(salaries);
// test.Kate = 140;
// test.David = 300;
// console.log(test);

// function getTotalSum(obj) {
//   //методом Object.values
//   const values = Object.values(obj);
//   let sum = 0;
//   for (const value of values) {
//     sum += value;
//   }
//   return sum;

//   // методом for in
//   let sum = 0;
//   for (const key in obj) {
//     console.log("усі", key);
//     if (obj.hasOwnProperty(key)) {
//       console.log("Власні", key);
//     }
//     if (!obj.hasOwnProperty(key)) {
//       console.log("НЕ Власні", key);
//     }

//     sum += obj[key];
//   }
//   return sum;
// }
// console.log(getTotalSum(salaries));
// console.log(getTotalSum(test));

// Задача 3

// const stones = [
//   {
//     name: "Смарагд",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Діамант",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Сапфір",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Аквамарин",
//     price: 200,
//     quantity: 2,
//   },
// ];

// /**
//  * Finds stone with current name and returns total price quantity * price
//  * @param {Array} stones
//  * @param {String} stoneName
//  * @returns {Number} Sum
//  */

// function calcTotalPrice(stones, stoneName) {
//   // console.log(stones, stoneName);
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Такого каменю не знайдено";
// }
// console.log(calcTotalPrice(stones, "Сапфір"));
// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Рубін"));

// Задача 4

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
// Object.freeze(Transaction);

// const account = {
//   balance: 0,
//   transactions: [{ amount: 1000, type: "deposit", id: 1676235582786 }],
//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id: Date.now(),
//     };
//     return transaction;
//   },
//   deposit(amount) {
//     if (amount <= 0) {
//       return "Error";
//     }
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },
//   withdraw(amount) {
//     if (this.balance < amount || amount <= 0) {
//       console.log("Недостатньо коштів");
//       return;
//     }
//     if (amount < 200) {
//       console.log("Введіть більшу суму");
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },
//   getBalance() {
//     alert(this.balance);
//   },
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         console.log(transaction);
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// account.withdraw(1000);
// account.withdraw(2000);
// account.withdraw(1000);
// account.getBalance();
// setTimeout(() => {}, 200);
// console.log(account);
// account.getTransactionDetails(1676235582786);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// Видалення ключа з об'єкта

// console.log(Transaction);
// delete Transaction.DEPOSIT;
// console.log(Transaction);

// Змінити назву ключа в об'єкті можна лише видаливши ключ і записавши новий, з таким самим значенням

// Модуль 3 заняття 2 Артем

// Задача 1

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//     weight: "60,7",
//     height: "1.54",
//   })
// );

// console.log(
//   calcBMI({
//     weight: "82,7",
//     height: "1.75",
//   })
// );

// Задача 2

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     console.log(`Ім'я: ${nameList[i]}, номер телефону: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Kate",
//   phones: "2-12-80,2-12-37,2-12-24",
// });

// Виведення порядкового номеру:

// const smiles = ["😂", "😁", "😏", "🥰", "😴", "😋"];
// for (let i = 0, num = 1; i < smiles.length; i += 1, num += 1) {
//   console.log(`Порядковий номер ${num}-${smiles[i]}`);
// }

// for (num = 1; num <= smiles.length; num += 1) {
//   console.log(`Порядковий номер ${num}-${smiles[num - 1]}`);
// }

// Задача 3
// Ставимо /** і натискаємо tab, з'являється JS Doc
/**
 * Get object with info about company and returns info string
 * @param {Object} object
 * @returns {String} Info string
 */

// function getBotReport({ conmpanyName, bots: { repairBots, defenceBots } }) {
//   return `${conmpanyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReport({
//     conmpanyName: "Cyberdyne Systems",
//     bots: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// Задача 4

/**
 * Gets object with company and returns info about stock
 * @param {Object} object
 * @returns {String} Info string about stock in company
 */

// function getStockReport({ conmpanyName, stock }) {
//   const values = Object.values(stock);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `${conmpanyName} has ${total} items in stock`;
// }
// console.log(
//   getStockReport({
//     conmpanyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );
// console.log(
//   getStockReport({
//     conmpanyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );

// Задача 5

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Те саме з перебором масиву об'єктів

// function createContact(arr) {
//   // for дає доступ перевизначати [i]
//   // for (let i = 0; i < arr.length; i += 1) {
//   //   arr[i] = {
//   //     id: generateId();
//   //     list: "default",
//   //     ...arr[i],
//   //   };
//   //   console.log(arr[i]);
//   // for of (при заміні const на let) дає лише доступ додавати або змінювати властивості поточного об'єкту, але не перевизначати його
//   for (let obj of arr) {
//     obj.id = generateId();
//     if (!obj.hasOwnProperty("list")) {
//       obj.list = "default";
//     }
//     // також можна використати:
//     // if ("list" in obj) {

//     // }
//     console.log(arr);
//   }
// }

// console.log(
//   createContact([
//     {
//       name: "Mango",
//       email: "mango@mail.com",
//       list: "friends",
//     },
//     {
//       name: "Poly",
//       email: "poly@hotmail.com",
//     },
//   ])
// );

// Задача 6

// function transformUsername({ firstName, lastName, ...info }) {
//   console.log(firstName), console.log(lastName), console.log(info);
//   return {
//     fullName: firstName + " " + lastName,
//     ...info,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Матеріали модуль 3 урок 1 Артем

// const user = {
//   name: "Artem",
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//   },
//   sayHello() {
//     console.log(`My name is ${this.name}`);
//   },
// };
// const keys = Object.keys(user);
// Чому функція також відображається в консолі ???????????????????????????????????????
// for (const key of keys) {
//   if (typeof this[key] === "function") {
//     continue;
//   } else {
//     console.log(key);
//   }
// }
// console.log(keys);

// Object.freeze(user);

// user.asdf = "sadfasf";
// user.age = 100;

// console.log(user);

// const user = {
//   name: "Artem",
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//   },
// };

// const user2 = Object.create(user);
// user2.age = 33; // у user2 age додається як власна властивість, а в user не змінюється

// console.log(user);
// console.log(user2);

// const user = {
//   score: false,
// };

// Дізнатись чи є взагалі в об'єкта така властивість

// if (user.hasOwnProperty("score")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// if ("score" in user) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// Рекурсія

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countup(5));

// Деструктуризація масиву об'єктів

// const users = [
//   {
//     name: "User1",
//     language: "html",
//     cars: {
//       bmw: "X5",
//     },
//   },
//   {
//     name: "User2",
//     language: "css",
//     cars: {
//       audi: "A8",
//       bmw: "X6",
//     },
//   },
//   {
//     name: "User3",
//     language: "js",
//     cars: {
//       audi: "A7",
//     },
//   },
// ];

// for (const {
//   name,
//   cars: { audi: car },
// } of users) {
//   console.log(name, car);
// }

// for (const {
//   name,
//   cars: { audi = "None", bmw = "None" },
// } of users) {
//   console.log(name, audi, bmw);
// }

// function foo({ name = "No name", cars: { bmw = "None" } = {} } = {}) {
//   console.log(name, bmw);
// }

// foo({
//   name: "User1",
//   language: "html",
//   cars: {
//     bmw: "X5",
//   },
// });

// foo({
//   name: "User2",
//   language: "html",
// });

// foo();

// Знаходження мінімального числа методом розпилення spread

// const arr = [12, 22, 3, 14, 45, 16, 57];
// const min = Math.min(...arr);
// console.log(min);
// const arr1 = arr;
// console.log(arr === arr1);
// const arr2 = [...arr];
// // створення копії
// console.log(arr === arr2);

// const [first, ...props] = arr;
// console.log(first);
// console.log(props);

// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// }
// console.log(props);

// rest

// function foo(...rest) {
//   console.log(rest);
// }
// foo(1, 2, 3, 4, 5, 6);

// spread
// const arr = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second) {
//   console.log(first, second);
// }
// foo(...arr);

// rest + spread
// const arr = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//   console.log(arguments);
//   console.log(first, second, rest);
// }
// foo(...arr);

// Заняття з Володимиром ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const books = [1, 6, 5, 7, 9, 6, 2];
// const index1 = books.indexOf(6);
// const index2 = books.lastIndexOf(6);

// console.log(index1);
// console.log(index2);

// function getLastElementMeta(array) {
//     const newArray = [];
//     newArray[0] = array.length-1;
//     newArray[1] = array[array.length-1];
//     return newArray;
//   };


//   function getExtremeElements(array) {
//     const newArray = [];
//     newArray[0] = array[0];
//     newArray.length = 2;
//     newArray[newArray.length-1] = array[array.length-1];
//     return newArray;
//   };

//   console.log(getExtremeElements([1, 10, 20]))

//   function getSlice(array, value) {
//     let newArray = [];
//     if(array.indexOf(value)){
//       newArray = array.slice(0,array.indexOf(value)+1);
//     };
//     return newArray;
//   };

//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))

// function calculateTotalPrice(order) {
//     let total = 0;
//     for(const item of order){
//       total += item;
//     };
//     return total;
//   };

//   console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//     let arr = [];
//     for(let i = start; i <= end; i += 1){
//       if(i % 2 === 0){
//         arr.push(i);
//       };
//     };
//     return arr;
//   };

//   console.log(getEvenNumbers(6, 12))

// function checkStorage(storage, item) {
//     const normalizedItem = item.toLowerCase();
//     if (storage.includes(normalizedItem)) {
//       return `${normalizedItem} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   };
//   };

//   console.log(checkStorage(["apple", "plum", "pear"], "plum"))