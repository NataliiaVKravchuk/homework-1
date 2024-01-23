// Практика з викладачем

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];


//============== 1 =======================================
// function arrayChanges(arr) {
//   return arr.map((elem, index) => {
//     return {
//       ...elem,
//       price: elem.price * 0.8,
//       id: index + 1,
//     };
//   })
// }


//============== 2 =======================================

// const arrayChanges = (arr) =>
//   arr.map((elem, index) => 
//      ({
//       ...elem,
//       price: elem.price * 0.8,
//       id: index + 1,
//   }))

//   console.log(arrayChanges(fruits));

//============== 2 =======================================

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */

//  const concerts = {
//     Київ: new Date("2020-04-01"),
//     Умань: new Date("2025-07-02"),
//     Вінниця: new Date("2020-04-21"),
//     Одеса: new Date("2025-03-15"),
//     Хмельницький: new Date("2020-04-18"),
//     Харків: new Date("2025-07-10"),
//   };

//   const cities = Object.keys(concerts)
//   const filteredCities = cities.filter((item)=> concerts[item] > new Date())
//   const result = filteredCities.toSorted((a,b) => concerts[a] - concerts[b])

//   console.log(result)

  //============== 3 =======================================

  //TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   const newArr = tweets.flatMap(item => item.tags);
//   const result = newArr.reduce((acc, item) => {
//     return {
//         ...acc,
//         [item]: acc[item] ? acc[item] +1 : 1,}
//   },{})

//   console.log(result)

  /**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */

//  class Client {
//     #login;
//     #email;
//     constructor(login, email){
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin){
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail){
//         this.#email = newEmail;
//     }
//  }

//  const newClient = new Client("abc", "mail@com");
//  console.log(newClient)
//  console.log(newClient.login)
//  console.log(newClient.login = "Abc")

//ДЗ:==============================================

 /*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

// const someFn = `function foo() {
//     const arr = [1, 2, 3];
//     console.log(arr);
//   }`;
  
//   console.log(checkBrackets(someFn));

  // https://chromewebstore.google.com/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf?pli=1