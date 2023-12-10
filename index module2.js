// Матеріали модуль 2 урок 1 Репета

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += 1;
// }
// for (const friend of friends) {
//   console.log(friend);
// }
// console.table(friends);

// Матеріали модуль 2 урок 1 Репета
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
//   console.log(cart[i]);
//   total += cart[i];
// }

// console.log(total);

// for (const value of cart) {
//   total += value;
// }
// console.log(total);

// Матеріали модуль 2 урок 1 Репета

// let a; //undefined
// a+= 5; //NaN

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }

// console.log(total);

// Матеріали модуль 2 урок 1 Репета

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];
// const loginToFind = "Poly";
// let message = `The user ${loginToFind} is not found`;

// for (i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `The user ${login} is found`;
//     break;
//   }
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `The user ${login} is found`;
//     break;
//   }
// }
// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `The user ${loginToFind} is found`
//   : `The user ${loginToFind} is not found`;

// console.log(message);

// Матеріали модуль 2 урок 1 Репета

// const numbers = [111, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let smallestNumber = numbers[0];
// for (number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// Матеріали модуль 2 урок 1 Репета
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// let string = "";
// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// const string1 = friends.join(",");
// console.log(string1);

// Матеріали модуль 2 урок 1 Репета
// const string = "JavaScript";
// const letters = string.split("");
// let invertedStirng = "";
// console.log(letters);
// for (const letter of letters) {
//   // if (letter === letter.toLowerCase()) {
//   //   invertedStirng += letter.toUpperCase();
//   // } else {
//   //   invertedStirng += letter.toLowerCase();
//   // }
//   const isEqual = letter === letter.toLowerCase();
//   invertedStirng += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedStirng);

// Матеріали модуль 2 урок 1 Репета

// const title = "Top 10 benefits of React framework";
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(" ");
// const slug = words.join("-");
// console.log(slug);
// const slug2 = normalizedTitle.replaceAll(" ", "-");
// console.log(slug2);
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);
// const slug3 = title.toLowerCase().replaceAll(" ", "-");
// console.log(slug3);

// Матеріали модуль 2 урок 1 Репета
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// // The worst variant:
// // for (let i = 0; i < array1.length; i += 1) {
// //   total += array1[i];
// // }
// // for (let i = 0; i < array2.length; i += 1) {
// //   total += array2[i];
// // }
// // The better variant:
// const numbers = array1.concat(array2);
// for (number of numbers) {
//   total += number;
// }
// console.log(total);

// Матеріали модуль 2 урок 1 Репета

// const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
// console.table(cards);

// const cardToRemove = "Card-3";
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);

// const cardToInsert = "Card-6";
// const index1 = cards.indexOf(cardToInsert);
// cards.splice(index1, 0, cardToInsert);

// const cardToUpdate = "Card-4";
// const index2 = cards.indexOf(cardToUpdate);
// cards.splice(index2, 1, "NewCard-4");

// console.table(cards);

// Матеріали модуль 2 урок 2 Репета

// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   const result = a + b;
//   console.log("Виконується функція add");
//   return result;
// };

// const r1 = add(2, 3);
// console.log("r1:", r1);
// const r2 = add(10, 15);
// console.log("r2:", r2);
// const r3 = add(15, 18);
// console.log("r3:", r3);

// const fn = function (value) {
//   if (value < 50) {
//     return "Менше 50";
//   } else {
//     return "Більше 50";
//   }
// };
// console.log("Результат функції:", fn(10));
// console.log("Результат функції:", fn(100));

// Матеріали модуль 2 урок 2 Репета

// const calculateTotalPrice = function (items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// Матеріали модуль 2 урок 2 Репета

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);

// Матеріали модуль 2 урок 2 Репета

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];

// const findLogin = function (allLogins, loginToFind) {
//   // for (const login of logins) {
//   //   if (login === loginToFind) {
//   //     return `The user ${login} is found`;
//   //   }
//   // }
//   // return `The user ${loginToFind} is not found`;

//   return allLogins.includes(loginToFind)
//     ? `The user ${loginToFind} is found`
//     : `The user ${loginToFind} is not found`;
// };

// console.log(findLogin(logins, "Mango"));
// console.log(findLogin(logins, "Kiwi"));
// console.log(findLogin(logins, "Apple"));

// Матеріали модуль 2 урок 2 Репета

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// Матеріали модуль 2 урок 2 Репета

// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedStirng = "";

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedStirng += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedStirng;
// };
// console.log(changeCase("SAMsung"));
// console.log(changeCase("nANALI"));
// console.log(changeCase("RoYaL"));

// Матеріали модуль 2 урок 2 Репета

// const slugify = function (string) {
//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Top 10 benefits of React framework"));
// console.log(slugify("Azure Static Web Apps are Awesome"));

// Матеріали модуль 2 урок 2 Репета
// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// };

// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Матеріали модуль 2 урок 2 Репета

// const add = function (...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7));

// Матеріали модуль 2 урок 2 Репета

// const filterNumbers = function (array, ...args) {
//   const uniqueElements = [];
//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// Уроки модуль 2 урок 1 Артем Задача 1

// const genres = ["Jazz", "Blues"];
// console.log(genres);
// genres.push("Rock'n'roll");
// console.log(genres);
// const firstEl = genres[0];
// console.log(firstEl);
// const lastEl = genres[genres.length - 1];
// console.log(lastEl);
// // const deleteFirstEl = genres.shift();
// // console.log(deleteFirstEl);
// // console.log(genres);
// genres.unshift("Country", "Reggae");
// // console.log(genres);
// // genres.splice(0, 1, "Country", "Reggae");
// // console.log(genres);
// genres.splice(genres.length, 0, "Hard rock");
// console.log(genres);
// genres.splice(-2, 2, "Hard rock");
// console.log(genres);

// Уроки модуль 2 урок 1 Артем Задача 2
// const values = "8 11";
// const arr = values.split(" ");
// console.log(arr);
// let firstValue = arr[0];
// let lastValue = arr[arr.length - 1];
// console.log(typeof firstValue);
// console.log(typeof lastValue);
// console.log(firstValue * lastValue);
// console.log(typeof (firstValue * lastValue));
// firstValue = Number(arr[0]);
// lastValue = +arr[arr.length - 1];
// console.log(typeof firstValue);
// console.log(typeof lastValue);
// // унарний плюс - приводить до числа
// // бінарний плюс - між двома операторами
// // string * string = число, так само відняти і поділити, а лише плюс робить конкатенацію
// console.log(firstValue * lastValue);

// window.isNaN - примусово приводить до типу даних Number
// Number.isNaN - не приводить до типу даних Number

// Уроки модуль 2 урок 1 Артем Задача 3
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Порядковий номер ${i + 1} `, fruits[i]);
// }

// for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
//   console.log(`Порядковий номер ${num} `, fruits[i]);
// }

// Уроки модуль 2 урок 1 Артем Задача 4
// const names = "Jacob,William,Solomon,Kate";
// const phones = "2-12-80,2-12-37,2-12-24";
// const arrNames = names.split(",");
// console.log(arrNames);
// const arrPhones = phones.split(",");
// console.log(arrPhones);

// for (let i = 0; i < arrNames.length, i < arrPhones.length; i += 1) {
//   console.log(`Ім'я: ${arrNames[i]}, номер телефону: ${arrPhones[i]}`);
// }

// Уроки модуль 2 урок 1 Артем Задача 5

// const string = "Welcome to the future";
// const words = string.split(" ");
// console.log(words);
// words.shift();
// words.pop();
// console.log(words);
// const newString = words.join(" ");
// console.log(newString);

// const string = "Welcome to the marvelous future";
// const words = string.split(" ");
// console.log(words.slice(1, words.length - 1).join(" "));

// const string = "Welcome to the marvelous future";
// const words = string.split(" ");
// words.splice(0, 1);
// words.splice(words.length - 1, 1);
// console.log(words);
// const newString = words.join(" ");
// console.log(newString);

// Уроки модуль 2 урок 1 Артем Задача 6
// const string = "Welcome to the marvelous future";
// const arr = string.split("");
// const rev = arr.reverse();
// const result = rev.join("");
// console.log(result);
// const result1 = string.split("").reverse().join("");
// console.log(result1);

// Уроки модуль 2 урок 1 Артем Задача 7
// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min);
// min = Math.min(...numbers);
// console.log(min);

// Уроки модуль 2 урок 2 Артем
// Kahoot
// function foo() {
//   console.log(arguments);
// }
// foo(5, "Mango", true, "Kiwi", 10, false);

// Теорія області видимості
// let a = 10;
// if (true) {
//   let a = 5;
//   console.log(`a in local ${a}`);
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   console.log(`a in local ${a}`);
// }
// console.log(`a in global ${a}`);

// if (true) {
//   let a = 5;
//   console.log(`a in local ${a}`);
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   console.log(`a in local ${a}`);
//   let a = 5;
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   a = 15;
// }
// console.log(`a = ${a}`);

// const a = 10;
// if (true) {
//   let a = 5;
//   a = 15;
//   console.log(`a in local ${a}`);
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   let a = 100;
//   a = 1;

//   if (true) {
//     a = 15;
//     let a = 25;
//     console.log(`a in local 2 ${a}`);
//   }
//   console.log(`a in local 1 ${a}`);
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   let a = 100;
//   a = 1;

//   if (true) {
//     let a = 25;
//     a = 15;
//     console.log(`a in local 2 ${a}`);
//   }
//   console.log(`a in local 1 ${a}`);
// }
// console.log(`a in global ${a}`);

// let a = 10;
// if (true) {
//   a = 1;

//   if (true) {
//     a = 15;
//     console.log(`a in local 2 ${a}`);
//   }
//   console.log(`a in local 1 ${a}`);
// }
// console.log(`a in global ${a}`);

// Уроки модуль 2 урок 2 Артем Задача 1

// function getSum() {
//   //   console.log(arguments);
//   //   for (const argument of arguments) {
//   //     console.log(argument);
//   //   }
//   //   // const arr = Array.from(arguments);
//   //   const arr = [...arguments];
//   //   console.log(arr);
//   let total = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     // console.log(arguments[i]);
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(getSum(44, 5, 14, 3));

// Уроки модуль 2 урок 2 Артем Задача 2
// const courses = ["HTML", "CSS", "JavaScript", "React", "Node"];
// function addCourse(name) {
//   if (!courses.includes(name)) {
//     //якщо масив курсів не містить курсу з назвою name
//     courses.push(name);
//     return `Курс ${name} успішно додано`;
//     // відпрацьовує додаючи курс до масиву, але не вказуємо що повернути, тому undefined
//   }
//   return "Ви вже маєте даний курс";
// }

// const result1 = addCourse("Express");
// console.log(result1);
// const result2 = addCourse("CSS");
// console.log(result2);

// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const idx = courses.indexOf(name);
//     courses.splice(idx, 1);
//     console.log(courses);
//     return `Курс ${name} успішно видалено`;
//   }
//   return "Курс з такою назвою не знайдено";
// }

// Аналогічні вирази:
// courses.includes(name)
// !!~courses.indexOf(name)
// 0 => false
// -1 => true
// -(x+1)
// -(0 + 1) -1 => true
// -(-1 + 1) -0 => false
// !! === Boolean()

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   if (!!~idx) {
//     courses.splice(idx, 1);
//     return `Курс ${name} успішно видалено`;
//   }
//   return "Курс з такою назвою не знайдено";
// }

// const result3 = removeCourse("React");
// console.log(result3);
// const result4 = removeCourse("Vue");
// console.log(result4);

// function updateCourse(oldName, newName) {
//   console.time("foo");
// const idx = courses.indexOf(oldName);
//   if (!!~idx) {
//
//     // courses.splice(idx, 1, newName);
//     courses[idx] = newName;
//     return `Курс ${oldName} замінили на ${newName}`;
//   }
//   console.timeEnd("foo");
//   return "Курс з такою назвою не знайдено";
// }

// const result5 = updateCourse("Express", "NestJS");
// console.log(result5);
// const result6 = updateCourse("Angular", "NestJS");
// console.log(result6);
// console.log(courses);

// console.log(a); // undefined
// var a = 10;
// // var має "спливання" код визначення - перший рядок, у коді - присвоєння значення
// var a = 8;
// var a = 123;
// var a = 5;
// var a = 12;
// var a = 5;
// // це сприймається як переприсвоєння значення і ні vs code ні браузер не вказує на помилку

// // console.log(b); // index module2.js:617 Uncaught ReferenceError: Cannot access 'b' before initialization
// // let b = 10;

// if (true) {
//   var c = 10;
// }
// console.log(c);
// // var виходить за межі блочної області видимості, для нього є лише глобальна і функціональна області видимості

// function foo() {
//   var d = 10;
// }
// console.log(d); //index module2.js:636 Uncaught ReferenceError: d is not defined

//Заняття з ментором 1

// console.log(Number(null));
// console.log("2" > "12");
// //рядки порівнюються посимвольно, 2 більше 1 і по юнікоду і як число, якщо символи однакові, довший рядок перемагає. Великі літери менші по юнікоду, ніж маленькі.
// console.log(10 >= "7");
// console.log(Boolean("-5"));
// console.log(3 > 2 > 1);
// //           true > 1 // false
// console.log("10" > 5);
// console.log(Number(false));
// console.log("5" - true);
// console.log("Їжак" > "їжачок");

// Задача 1 вирішували з Артемом

// Задача 2
// const userInput = Number(prompt("Введіть кількість хвилин"));
// console.log(userInput);
// let hours = Math.floor(userInput / 60);
// let minutes = userInput % 60;
// console.log(`${hours}:${minutes}`);
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

// Задача 3

// const min = 10;
// const max = 35;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log("odd", i);
//     continue;
//   }
//   console.log("even", i);
//   total += i;
// }
// console.log(total); //додаємо парні

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log("odd", i);
//     total += i;
//   }
//   console.log("even", i);
// }
// console.log(total); //додаємо непарні

// Задача 4

// let userInput = Number(prompt("Введіть число"));
// let total = 0;
// while (userInput !== 0) {
//   total += userInput;
//   userInput = Number(prompt("Введіть число"));
// }
// alert(total);

// Задача 5

// const min = Number(prompt("Введіть число від 1 до 59"));

// if (min >= 0 && min < 15) {
//   alert("Перша чверть години");
// } else if (min >= 15 && min < 30) {
//   alert("Друга чверть години");
// } else if (min >= 30 && min < 45) {
//   alert("Третя чверть години");
// } else if (min >= 45 && min < 60) {
//   alert("Четверта чверть години");
// } else {
//   alert("Ви не потрапили в діапазон години");
// }

// switch (true) {
//   case min >= 0 && min < 15:
//     console.log("Перша чверть години");
//     break;
//   case min >= 15 && min < 30:
//     console.log("Друга чверть години");
//     break;
//   case min >= 30 && min < 45:
//     console.log("Третя чверть години");
//     break;
//   case min >= 45 && min < 60:
//     console.log("Четверта чверть години");
//     break;
//   default:
//     console.log("Ви не потрапили в діапазон години");
// }

// if (min >= 0 && min < 15) {
//   alert("Перша чверть години");
// } else if (min < 30) {
//   alert("Друга чверть години");
// } else if (min < 45) {
//   alert("Третя чверть години");
// } else if (min < 60) {
//   alert("Четверта чверть години");
// } else {
//   alert("Ви не потрапили в діапазон години");
// }

// Задача 6

// const num = 20;

// for (let i = 1; i <= num; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// Задача 7

// const string = "abcde";

// if (string[0] === "a") {
//   console.log("так");
// } else {
//   console.log("ні");
// }

// const message = string[0] === "a" ? "так" : "ні";
// console.log(message);

// const message1 = string.startsWith("a") ? "так" : "ні";
// console.log(message1);

// Матеріали Модуль 2 Артем Заняття масиви

// const array = [1, "Hello", null, true, [1, 2, 3]];
// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j += 1) {
//       console.log(item[j]);
//     }
//     continue;
//   }
//   console.log(item);
// }

// for (const item of array) {
//   if (typeof item === "string") {
//     item = false;
//   }
// }

// for (let i = 0; i < array.lendth; i += 1) {
//   if (typeof array[i] === "string") {
//     item = false;
//   }
// }
// console.log(array);

// let i = 0;
// while (i < array.length) {
//   if (typeof array[i] === "string") {
//     array[i] = false;
//   }
//   i += 1;
// }

// console.log(array);

// Example 7

// const langs = ["python", "javscript", "c++", "haskel", "php", "ruby"];
// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// Не правильний метод. Сучасний метод sort. Також подивитись і почитати про метод сортування бульбашкою.

// Пріоритетність &&

// let x = 7;
// let y = null;
// let a = 9;
// console.log(a || x && null);

// Матеріали Модуль 2 Артем Заняття функції

// Перервати виконання функції за умовою

// function largeNumber() {
//   let sum = 0;
//   for (const value of arguments) {
//     sum += value;
//     if (sum > 10) {
//       return true;
//     }
//   }
//   return false;
// }
// const response = largeNumber(1, 2, 3);
// console.log(response);

// Змінна а переприсвоїться лише після виклику функції

// let a = 10;

// function foo() {
//   a = 15;
// }
// foo();
// console.log(a);

// Це 2 різні змінні

// let a = 10;

// function foo() {
//     let a = 15;
//     a = 45
// }
// foo();
// console.log(a);

// Звернення до змінної перед ініціалізацією

// let a = 10;

// function foo() {
//   let a = 15;
//   a = 45;
// }
// foo();
// console.log(a);

// Примітивна змінна

// let a = 10;

// function foo(a) {
//   a = 45;
// }
// foo();
// console.log(a);

// Складний тип даних при оголошенні параметру присвоєння за посиланням

// const test = [1, 2, 3];
// function foo(arr) {
//   arr.splice(0, 1);
// }
// foo(test);
// console.log(test);

// Call Stack

// function createString(name, year) {
//   const result = add(year);
//   return `${name} years ${result}`;
// }
// console.log(createString("Mango", [1, 2, 3]));

// function add(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// Матеріали Артем Модуль 2 урок 2 Example 1 Індекс маси тіла

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));

//   return Number((weight / Math.pow(height, 2)).toFixed(1));
// }

// const bmi = calcBMI("88.3", "1,75");
// console.log(bmi);

// Матеріали Артем Модуль 2 урок 2 Example 2 Мінімальне число

// function min(a, b) {
//   //   if (a > b) {
//   //     return b;
//   //   }
//   //     return a;

//   return a > b ? b : a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Матеріали Артем Модуль 2 урок 2 Example 3 Площа прямокутника

// function getRectArea(dimensions) {
//   dimensions = dimensions.split(" ");
//   //   const first = Number(dimensions[0]);
//   //   const second = Number(dimensions[1]);
//   //   return first * second;
//   return Number(dimensions[0]) * Number(dimensions[1]);
//   console.log(dimensions);
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("46 11"));
// console.log(getRectArea("8 112"));

// Матеріали Артем Модуль 2 урок 2 Example 4 Логування елементів

// function logItems(items) {
//   for (let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//     console.log(`${num} `, "-", items[i]);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Матеріали Артем Модуль 2 урок 2 Example 5 Логування контактів

// function printContactsInfo(names, phones) {
//   const arrNames = names.split(",");
//   const arrPhones = phones.split(",");
//   for (let i = 0; i < arrNames.length, i < arrPhones.length; i += 1) {
//     console.log(`Ім'я: ${arrNames[i]}, номер телефону: ${arrPhones[i]}`);
//   }
// }

// console.log(
//   printContactsInfo("Jacob,William,Solomon,Kate", "2-12-80,2-12-37,2-12-24")
// );

// Матеріали Артем Модуль 2 урок 2 Example 6 Пошук найбільшого елемента

// function findLargestNumber() {
//   // const arr = Array.from(arguments);
//   const arr = [...arguments];
//   let max = arr[0];
//   for (const num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
// console.log(findLargestNumber(49, 4, 3, 81, 12));

// Якщо приходить і масив, і числа: (Перевірити що не так) ???????????????????????????

// function findLargestNumber() {
//     let max;
//     for (const num of arguments) {
//     if (typeof num === "number") {
//         max = num;
//         break;
//     }
//   for (const num of arguments) {
//     if (num > max) {
//       max = num;
//     } else {
//         max = findLargestNumber(...num)
//     }
//   }
//   return max;
// };

//   console.log(findLargestNumber([1, 2, 99, 7], 49, 4, 3, 81, 12));

// Матеріали Артем Модуль 2 урок 2 Example 7 Середнє значення

// function calAverage() {
//   let total = 0;
//   for (const num of arguments) {
//     total += num;
//   }
//   return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

// Матеріали Артем Модуль 2 урок 2 Example 8 Форматування часу

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;
//   return `${hours.toString().padStart(2, "0")} : ${minutes
//     .toString()
//     .padStart(2, "0")}`;
//   console.log(hours);
//   console.log(minutes);
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// Спочатку freeCodeCamp потім CodeWars !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
