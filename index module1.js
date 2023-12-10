// Матеріали модуль 1 вебінар 2 Репета

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Salary of employee ${i} - ${salary}`);
//   totalSalary += salary;
// }

// console.log("totalSalary: ", totalSalary);

// Матеріали модуль 1 вебінар 2 Репета

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("odd", i);
//     continue;
//   }
//   console.log("even", i);
//   total += i;
// }

// console.log("total", total);

// let balance = 500;
// const payment = 2000;

// console.log(
//   `Total sum of order ${payment} credits. Checking available balance.`
// );

// if (balance >= payment) {
//   console.log("ok");
//   balance -= payment;
//   console.log(`Ok. Withdrawing credits. Thank you for purchase`);
//   console.log(`There are ${balance} credits on balance.`);
// } else {
//   console.log("There are not enough credits on balance");
// }
// console.log("The operation is over");

// Уроки Модуль 1 урок 1 Артем
// let weight = "88,3";
// let height = "1.75";

// // console.log(weight);
// // weight = Number(weight.replace(",", "."));
// // console.log(weight);
// // height = Number(height.replace(",", "."));
// // console.log(height);
// // const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// // console.log(bmi);

// const bmi = (
//   Number(weight.replace(",", ".")) /
//   Math.pow(Number(height.replace(",", ".")), 2)
// ).toFixed(1);
// console.log(bmi);

// Матеріали Модуль 1 урок 1 Артем

// Значення за замовчуванням та оператор нульового злиття (??)
// || АБО працює на 6 значень які повертають false
// ?? працює на 2 значення: null i undefined
//const incomingValue = 5;

//const result = incomingValue + Number("11");
//let test = 0;
//console.log(test);
//const value = test ?? "some value";
//console.log(value);
//console.log(result);
//const defaultValue = 10;
//const value = result || defaultValue;
//console.log(value);

// Уроки Модуль 1 урок 2 Артем
// console.log(null && "false" && "Mango");
// console.log(null || "false" || "Mango");
// console.log(("false" && "Mango") || null);
// console.log(("Mango" && null) || false);

// Уроки Модуль 1 урок 2 Артем
// const userInput = prompt("Яка офіційна назва JavaScript?").toLocaleLowerCase();
// const ecma = "ECMAScript";

// if (userInput === ecma.toLocaleLowerCase()) {
//   alert("Вірно");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// Уроки Модуль 1 урок 2 Артем
// const value = Number(prompt("Enter number"));
// if (value > 0) {
//   alert("This is positive number");
// } else if (!value) {
//   alert("This is zero");
// } else if (value < 0) {
//   alert("This is negative number");
// } else {
//   alert("This is not a number");
// }
// if (value > 0) {
//   alert("This is positive number");
// }
// if (value === 0) {
//   alert("This is zero");
// }
// if (value < 0) {
//   alert("This is negative number");
// }
// if (isNaN(value)) {
//   alert("This is not a number");
// }

// const value = Number(prompt("Enter number"));
// if (value % 2) {
//   alert("This is odd number");
// } else {
//   alert("This is even number");
// }

// alert(value % 2 ? "This is odd number" : "This is even number");

// Уроки Модуль 1 урок 2 Артем
// let link = "https://somesite.com/about";
// console.log(link.slice(link.length - 1));
// console.log(link.endsWith("/"));
// if (!link.endsWith("/")) {
//   //   link = `${link}/`;
//   link += "/";
// }
// console.log(link);

// Уроки Модуль 1 урок 2 Артем
// const days = Number(prompt("Enter days"));
// if (!days) {
//   alert("Today");
// } else if (days === 1) {
//   alert("Tomorrow");
// } else if (days === 2) {
//   alert("The day after tomorrow");
// } else {
//   alert("The day in future");
// }

// if (days >= 0) {
//   switch (days) {
//     case 0:
//       alert("Today");
//       break;
//     case 1:
//       alert("Tomorrow");
//       break;
//     case 2:
//       alert("The day after tomorrow");
//       break;
//     default:
//       alert("The day in future");
//   }
// } else {
//   alert("Friend, you overslept");
// }

// Уроки Модуль 1 урок 2 Артем
// const max = 100;
// const min = 19;

// for (let i = min; i <= max; i += 1) { // може бути комбінована умова i >=min && i <=max
//   if (!(i % 5)) { //25 % 5 => 0 => false => !false => true
//     console.log(i);
//   }
// }

// Уроки Модуль 1 урок 2 Артем

// const color = prompt("Enter color").toLowerCase;
// switch (color) {
//   case "red":
//     alert("STOP!!!");
//     break;
//   case "yellow":
//     alert("READY!!!");
//     break;
//   case "green":
//     alert("GO!!!");
//     break;
//   default:
//     alert("BE CAREFUL!!!");
// }

// Матеріали Модуль 1 урок 2 Артем

// const value = "";
// if (value) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// const value = 5;
// switch (value) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 5:
//     console.log("Good result");
//     break;
//   default:
//     console.log("default");
// }

// if (value === 1) {
//   console.log("one");
// } else if (value === 2) {
//   console.log("two");
// } else if (value === 5) {
//   console.log("Good result");
// } else {
//   console.log("default");
// }

// Switch використовувати лише з числами і рядками

// Switch true теж не використовувати

// switch (true) {
//     case 5 > 5:
//         console.log "..."
// }

// Області видимості: Глобальна, блочна(локальна), функціональна

// let a = 15;
// if (true) {
//   a = 25;
//   let a = 1;
// }

// console.log(a);

// буде помилка, бо в пріоритеті пошук змінної у своїй області видимості

// let a = 10;
// if (true) {
//   let a = 15;
//   if (true) {
//     a = 25;
//   }
// }

// console.log(a);

// const str = "hello world";
// let i = 0;
// while (i < str.length) {
//   if (str[i] === "w") {
//     console.log("yes");
//     break;
//   }
//   console.log("no", str[i]);
//   i += 1;
// }

// Матеріали Модуль 1 урок 2 Артем Exmple 4

// const a = 120;
// const b = 180;
// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// Матеріали Модуль 1 урок 2 Артем Exmple 6

// let link = "https://somesite.com/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   //   link = `${link}/`;
//   link += "/";
// }
// console.log(link);

// Матеріали Модуль 1 урок 2 Артем Exmple 8
// const hours = 16;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

//Матеріали Модуль 1 урок 2 Артем Exmple 12

// const login = prompt("Тут має бути Логін");
// if (!login) {
//   alert("Скасовано");
// } else if (login === "Адмін") {
//   const password = prompt("Тут має бути Пароль");
//   alert(password === "Я Адмін" ? "Доброго дня!" : "Не правильний пароль");
// } else {
//   alert("Я Вас не знаю");
// }

// const str1 = "М'який";
// const str2 = "М'який";
// console.log(str1);
// console.log(str2);
