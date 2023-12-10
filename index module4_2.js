// Репета модуль 4 урок 3 Перебираючі методи масивів /////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [5, 10, 15, 20, 25];

// forEach

// numbers.forEach(function (number, index, array) {
//   console.log("number", number);
// });

// forEach має 2 аргументи: колбек функція і об'єкт, в контексті якого її викликатимуть

// map

// const doubleNumbers = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
// });

// console.log("numbers", numbers);
// console.log("doubleNumbers", doubleNumbers);

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// console.table(players);

// const playerNames = players.map((player) => {
//   console.log(player);

//   return player.tag;
// });

// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);

// console.log("playerIds", playerIds);

// const res = players.map(({ tag, isOnline }) => ({ tag, isOnline }));

// console.log("res", res);

// const updatedPlayers = players.map((player) => ({
//   ...player,
//   rank: player.rank * 1.1,
// }));

// console.table(updatedPlayers);

// const playerIdToUpdate = "id-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       rank: player.rank + 100,
//     };
//   }
//   return player;
// });

// const updatedPlayers = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? {
//         ...player,
//         rank: player.rank + 100,
//       }
//     : player
// );

// console.table(updatedPlayers);

// Метод filter

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => number < 10 || number > 20);

// console.log(filteredNumbers);

// const onlinePlayers = players.filter((player) => player.isOnline);

// console.table(onlinePlayers);

// const offlinePlayers = players.filter((player) => !player.isOnline);

// console.table(offlinePlayers);

// const hardcorePlayers = players.filter((player) => player.rank > 500);

// console.table(hardcorePlayers);

// Метод find

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number === 10);

// console.log(number);

// const number = numbers.find((number) => number === 100);

// console.log(number);

// const playerIdToFind = "id-3";

// const playerWithId = players.find((player) => player.id === playerIdToFind);
// console.log(playerWithId);

// за допомогою функції:

// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find((player) => player.id === playerId);
// };

// console.log(findPlayerById(players, "id-3"));

// Метод find

// const isAllOnline = players.every((player) => player.isOnline);
// console.log("isAllOnline", isAllOnline);

// const isSomeOnline = players.some((player) => player.isOnline);
// console.log("isSomeOnline", isSomeOnline);

// const someHardcorePlayers = players.some((player) => player.rank > 500);
// console.log("someHardcorePlayers", someHardcorePlayers);

// Метод reduce

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);

// const totalRank = players.reduce(
//   (totalRank, player) => totalRank + player.rank,
//   0
// );
// console.log(totalRank);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);

// Репета модуль 4 урок 3 Перебираючі методи масивів /////////////////////////////////////////////////////////////////////////////////////////

// Метод sort

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);

// const letters = ["b", "B", "a", "A"];

// letters.sort();
// console.log("letters", letters);

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log("numbers", numbers);

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log("ascSortedNumbers", ascSortedNumbers);

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log("descSortedNumbers", descSortedNumbers);

// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return nextPlayer.rank - prevPlayer.rank;
// });
// console.table(sortedByBestPlayers);

// const sortedByTag = [...players].sort((a, b) => {
//   const result = a.tag[0] > b.tag[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });

// console.table(sortedByTag);

// const array = [1, 2[(4, [5])], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

// const tags = tweets.map((t) => t.tags).flat();
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);

// Ланцюжок методів

// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);

// const onlineAndSorted = players
//   .filter((player) => player.isOnline)
//   .sort((playerA, playerB) => playerA.rank - playerB.rank);
// console.table(onlineAndSorted);

// const element = {
//   class: "",
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// element.toggleHovered().changeClass("open").toggleHovered();
// console.log(element);

// const stats = tweets
//   .flatMap((t) => t.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );

// console.log(stats);

// Lodash

// const user = {
//   name: "mango",
// };

// if (user && user.location && user.location.city) {
//   console.log(user.location.city);
// }

// console.log(user?.location?.city);

// Артем модуль 4 урок 1  /////////////////////////////////////////////////////////////////////////////////////////

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// Example 1 map

// const getModels = (arr) => {
//   const models = arr.map((item) => item.model);
//   return models;
// };

// const getModels = (arr) => arr.map(({ model }) => model);

// console.log(getModels(cars));
// console.log(cars);

// Example 2 map

// const makeCarsWithDiscount = (cars, discount) => {
//   const result = cars.map((car) => {
//     const changePrice = (car.price / 100) * discount;
//     car.price -= changePrice;
//     return car;
//   });
//   return result;
// };

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     car.price -= (car.price / 100) * discount;
//     return car;
//   });

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     car.price -= (car.price / 100) * discount;
//     car.price = Math.ceil(car.price);
//     return car;
//   });

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: (car.price * (100 - discount)) / 100,
//   }));

// console.table(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));

// Example 3 filter

// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((item) => {
//     if (item.price < threshold) {
//       return item;
//     }
//   });
//   return result;
// };

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 filter

// const getCarsWithDiscount = (cars) => {
//   const result = cars.filter((car) => {
//     // car.onSale === " " або === 0 => !car.onSale
//     if (car.onSale) {
//       return car;
//     }
//   });
//   return result;
// };

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.log(getCarsWithDiscount(cars));

// Example 5 filter

// const getCarsWithType = (cars, type) => {
//   const result = cars.filter((car) => {
//     if (car.type === type) {
//       return car;
//     }
//   });
//   return result;
// };

// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);
// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);
// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// Example 6 find

// const getCarByModel = (cars, model) => {
//   const result = cars.find((car) => {
//     if (car.model === model) {
//       return car;
//     }
//   });
//   return result;
// };

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// Example 7 sort

// const sortByAscendingAmount = (cars) => {
//   const result = cars.sort((a, b) => a.amount - b.amount);
//   return result;
// };

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// Зростання a - b
// Спадання b - a

// const sortByAscendingAmount = (cars) => cars.sort();
// console.log(sortByAscendingAmount([4, 1, 7, 14, 8, 0, 1]));

// Example 8 sort

// const sortByDescendingPrice = (cars) => [...cars].sort((a, b) => b.price - a.price);

// console.log(sortByDescendingPrice(cars));

// Example 9 sort

// const sortByModel = (cars, order) => {
//   let result;
//   if (order === "asc") {
//     result = [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   } else {
//     result = [...cars].sort((a, b) => b.model.localeCompare(a.model));
//   }
//   return result;
// };

// console.log(sortByModel(cars, "asc"));
// console.log(sortByModel(cars, "desc"));

// Example 10 reduce

// const getTotalAmount = (cars) => {
//   const result = cars.reduce((acc, car) => {
//     return acc + car.amount;
//   }, 0);
//   return result;
// };

// console.log(getTotalAmount(cars));

// Example 11 Ланцюжки методів

// const getModelsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).map(({ model }) => model);

// console.log(getModelsOnSale(cars));

// Example 12 Ланцюжки методів

// const getSortedCarsOnSale = (cars) => {
//   const result = cars
//     .filter((car) => car.onSale)
//     .sort((a, b) => a.price - b.price);
//   return result.reduce(
//     (acc, car, idx) => {
//       return acc + `${idx + 1}. ${car.make} ${car.model} price ${car.price}\n`;
//     },
//     result.length ? `The quantity of cars is ${result.length}:\n` : "No cars"
//   );
// };

// console.log(getSortedCarsOnSale(cars));

// Example 13 Задача з рядком і об'єктом

// const str1 = "as;lrieifhva;ksjdnflakjsdnf;ksdf";
// const str2 = "sdfkhskrufhvskdfnvs";

// function foo(str) {
//   str = str.split("");
//   return str.reduce((acc, value) => {
//     //if(key in obj)
//     if (acc.hasOwnProperty(value)) {
//       acc[value] += 1;
//     } else {
//       acc[value] = 1;
//     }
//     return acc;
//   }, {});
// }

// function foo(str) {
//   str = str.split("");
//   const acc = {};
//   for (const value of str) {
//     if (acc.hasOwnProperty(value)) {
//       acc[value] += 1;
//     } else {
//       acc[value] = 1;
//     }
//   }
//   return acc;
// }

// const acc = {
//   name: "User"
// }
// const value = "name"
// acc.name
// acc.[value]

// console.log(foo(str1));
// console.log(foo(str2));

// Заняття з ментором 2 /////////////////////////////////////////////////////////////////////////////////////////

// const animals = ["cat", "dog"];
// animals.length = 0; //робить масив пустим
// console.log(animals[0]);

// Задача 1

// const genres = ["Jazz", "Blues"];
// genres.push("Rock'n'roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const deletedGenre = genres.shift();
// console.log(deletedGenre);
// genres.splice(0, 0, "Country", "Reggy");
// genres.unshift("Country", "Reggy");

// console.log(genres);

// Задача 2

// const genres = ["Jazz", "Blues", "Rock'n'roll", "Country", "Reggy"];

// function findLongestWord(arr) {
//   let longestWord = genres[0];
//   for (const genre of genres) {
//     if (genre.length > longestWord.length) {
//       longestWord = genre;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord(genres));

// Задача 3

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developerSalaries = [8000, 40000, 15000];

// // const allSalaries = managerSalaries.concat(developerSalaries);

// // let total = 0;
// // for (let i = 0; i < allSalaries.length; i += 1) {
// //   total += allSalaries[i];
// // }
// // console.log(total);

// const allSalaries = [...managerSalaries, ...developerSalaries];
// console.log(allSalaries);
// // const total = allSalaries.reduce((acc, salary) => {
// //   return (acc += salary);
// // }, 0);
// const total = allSalaries.reduce((acc, salary) => (acc += salary), 0);

// console.log(total);

// Задача 4

// const array = [7, 7, 7, 3, 5, 5, 5];
// // console.log(array.reverse());
// for (let i = 0; i < array.length / 2; i += 1) {
//   //   console.log(array[i]);
//   const index = array.length - 1 - i;
//   const template = array[i];
//   array[i] = array[index];
//   array[index] = template;
// }
// console.log(array);

// Задача 5

// function isPalindrome(str) {
//   const normalizedString = str.toLowerCase();
//   const replacedString = normalizedString.replaceAll(" ", "");
//   const arrayString = replacedString.split("");
//   const reversedArray = arrayString.reverse();
//   const reversedString = reversedArray.join("");
//   const palindrome = replacedString === reversedString;
//   console.log(palindrome);
// }

// isPalindrome("Я несу гусеня");

// function isPalindrome(str) {
//   const normalizedString = str.toLowerCase().replaceAll(" ", "");
//   const reversedString = normalizedString.split("").reverse().join("");
//   const palindrome = normalizedString === reversedString;
//   console.log(palindrome);
// }

// isPalindrome("Я несу гусеня");

// Задача 6

// function calcAverage() {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     if (typeof arguments[i] !== "number") {
//       continue;
//     }
//     total += arguments[i];
//     count += 1;
//   }
//   return total / count;
// }
// console.log(calcAverage(1, 2, 3, 4, 5, "s"));

// Матеріали Артем 2 2 /////////////////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7];

// // const result = arr.map((item) => item * 2);

// const result = arr.map((item) => {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// });

// const result = arr.map((item) => (!(item % 2) ? item * 2 : item));

// console.log(result);
// console.log(arr);

// Map під капотом

// const arr = [1, 2, 3, 4, 5, 6, 7];
// function customMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     result.push(callback(item));
//   }
//   return result;
// }

// console.log(customMap(arr, foo));

// function foo(item) {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// }

// flatMap

// const arr = [
//   {
//     name: "Den",
//     skills: ["html", "css"],
//     age: 18,
//   },
//   {
//     name: "Slava",
//     skills: ["js", "react"],
//     age: 22,
//   },
//   {
//     name: "Max",
//     skills: ["node.js", "express"],
//     age: 19,
//   },
// ];

// const result = arr.map((item) => item.skills.map((skill) => skill));

// const result = arr.flatMap((item) => item.skills);

// console.log(result);

// find

// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.find((item) => item > 100);
// console.log(result);

// const result = arr.find((item) => item.skills.includes("js"));

// const result = arr.findIndex((item) => item.skills.includes("node.js"));

// console.log(result);

// filter + chaning

// const result = arr1.filter((item) => !(item % 2)).map((item) => item * 2);
// console.log(result);

// every

// const numbers1 = [1, 2, 3, 4, 5, 6, 7];
// const numbers2 = [2, 4, 6, 8, 10, 12, 14];
// const result = numbers2.every((item) => !(item % 2));
// console.log(result);

// const result = arr.every((user) => user.age >= 18);
// console.log(result);

// some

// const numbers1 = [1, 2, 3, 4, 5, 6, 7];
// const numbers2 = [2, 4, 6, 8, 10, 12, 14];
// const result = numbers1.some((item) => !(item % 2));
// console.log(result);

// sort

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = [...numbers].sort((a, b) => a - b);
// console.log(result);

// numbers.sort();
// console.log(numbers);

// const str = ["s", "a", "f", "B", "A", "S"];
// const result = str.sort();
// const result = str.sort((a, b) => a.localeCompare(b));
// console.log(result);

// arr.sort((a, b) => a.name.localeCompare(b.name));
// console.log(arr);

// reduce

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//   console.log("acc", acc);
//   console.log("item", item);
//   console.log("__________________________");
//   return acc + item;
// }, 0);
// console.log(result);

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//   console.log("acc", acc);
//   console.log("item", item);
//   return acc.push(item * 2);
// }, []);

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//   console.log("acc", acc);
//   console.log("item", item);
//   acc.push(item * 2);
//   return acc;
// }, []);

// filter з подвійною умовою

// const getCarByModelAndPrice = (cars, carPrice, carName) =>
//   cars.filter(({ make, price }) => price < carPrice && make === carName);
// console.log(getCarByModelAndPrice(cars, 25000, "Honda"));

// ще один приклад сортування

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort(({ amount: a }, { amount: b }) => a - b);

// console.table(sortByAscendingAmount(cars));

// Example 9 sort

// const sortByModel = (cars, order) =>
//   [...cars].sort(({ model: a }, { model: b }) =>
//     order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
//   );

// console.log(sortByModel(cars, "asc"));
// console.log(sortByModel(cars, "desc"));

// Example 11 Ланцюжки методів

// const getModelsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).map(({ make, model }) => `${make} ${model}`);

// console.log(getModelsOnSale(cars));

// Example 13 Задача з рядком і об'єктом

// const str1 = "as;lrieifhva;ksjdnflakjsdnf;ksdf";
// const str2 = "sdfkhskrufhvskdfnvs";

// function foo(str) {
//   result = str.split("").reduce((acc, value) => {
//     acc.hasOwnProperty(value) ? (acc[value] += 1) : (acc[value] = 1);
//     return acc;
//   }, {});
//   return result;
// }

// function foo(str) {
//   result = str.split("").reduce((acc, value) => {
//     const keys = Object.keys(acc);
//     keys.includes(value) ? (acc[value] += 1) : (acc[value] = 1);
//     return acc;
//   }, {});
//   return result;
// }

// console.log(foo(str1));
// console.log(foo(str2));

// const fruitBasket = [
//   "banana",
//   "cherry",
//   "orange",
//   "apple",
//   "cherry",
//   "orange",
//   "apple",
//   "banana",
//   "cherry",
//   "orange",
//   "fig",
// ];
// const count = fruitBasket.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   //якщо ключа ще не було створено
//   // acc[fruit] = (0) + 1 => 1
//   // якщо ключ вже існує
//   // acc[fruit] = acc[fruit] +1
//   return acc;
// }, {});
// console.log(count);

// Заняття в групі з Ярославом /////////////////////////////////////////////////////////////////////////////////////////

// Задача 1

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };

//   user.mood = "happy";
//   user.hobby = "skydiving";
//   user.premium = false;

//   const keys = Object.keys(user)
//   for(const key of keys){
// console.log(
//     `${key} : ${user[key]}`
// )
//   };

// console.log(keys);

// Задача 2 

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//     worker1: 360,
//     worker2: 750,
//     worker3: 240,
//   };

//   const totalSalary = function(obj){
// const salaryArray = Object.values(obj)
// let total = 0;

// for (const value of salaryArray) {
//   total += value;
// }
// return total
//   }

//   console.log(totalSalary(someObj))

// Задача 3

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

//  const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//     { name: "Бриллиант", price: 2700, quantity: 6 },
//     { name: "Сапфир", price: 400, quantity: 7 },
//     { name: "Щебень", price: 150, quantity: 100 },
//   ];

//   const calcTotalPrice = function(someStones, stonesName){
//     for (const stone of someStones){
//         if(stone.name === stonesName){
//             return stone.price*stone.quantity;
//         }
//         return "Камінь не знайдено";
//     }
//   }
//   console.log(calcTotalPrice(stones, "Изумруд"))

  // Задача 4


  ///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//     { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
//   ];

//   const newFruits = function(arr, discount){
//     const newArray = [];
//     let id = 1;
//     for(let item of arr) {
//         const newFruit = {
//             ...item, 
//             price: item.price * (1-discount), 
//         id,
//     };
//         id +=1;
//         newArray.push(newFruit);
//     }
// return newArray
//   };

  // console.log(newFruits(fruits, 0.2));
  // console.log(fruits)


// Задача 5

    // напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

//  const arr = ["best", "the", "foo", "is", "js"];

// const arr2 = [...arr]
// arr2.splice(arr2.indexOf("foo"), 1);
// arr2.reverse();
// console.log(arr2.join(" "));
// console.log(arr)

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// console.log(string);

// function checkStorage(available, ordered) {
//   if(ordered === 0){
//     return "There are no products in the order!"
//   } else if(ordered > available){
//     return "Your order is too large, there are not enough items in stock!"
//   } else {
//     return "The order is accepted, our manager will contact you"
//   };
//   };

//   console.log(checkStorage(10, 100))

//   function getFileName(file) {
// return file.includes(".") ? file.slice(0,file.indexOf(".")) : file
// };

// console.log(getFileName("styles.css"))

// function calculateEvenTotal(number) {
//   let evenTotal = 0;
//   for (let i = 0; i <= number; i += 1){
//     if (i % 2 === 0){
//       evenTotal += i;
//     }
//   }
//   return evenTotal;
// }

// console.log(calculateEvenTotal(8))
