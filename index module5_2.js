// Заняття з ментором

// Kahoot 1

// const numbers = [1, 2, 3, 4]
// numbers.forEach(function(){
//     console.log(this.text)
// },
// {text: "I`m groot!"})

// Kahoot 2

// const numbers = [5, 10, 25, 15];
// const arrayNumbers = numbers.map(function(number){});

// console.log(arrayNumbers);

// Kahoot 19

// let a;
// let b = 2;
// a ??= 1;

// console.log(a)

// Задача 1

// const each = (array,callback) => {
//     let arr = [];

//     for (let i = 0; i < array.length; i += 1){
//         // console.log(callback(array[i]));
//         arr.push(callback(array[i]))
//     }
//     return arr
// }
// const add = (a) => a*2
// console.log(each([1, 8, 5], add))

// const each = (array,callback) => {
//     return array.map(callback)
// }

// const add = (a) => a*2

// console.log(each([1, 8, 5], add))

// Задача 1

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

// const allPrices = (arr) => {
//     return arr.map((item) => item.price);
// };

// console.log(allPrices(cars))

// Задача 2

// const carsWithDiscount = (array, value) => {
//   return array.map(element => { 
//     const newPrice = element.price / 100 * (100 - value)
//     element.price = newPrice;
//     return element
//   })
// }

// const carsWithDiscount = (array, value) => {
//   return array.map(element => { 
//     return {...element, price: Math.round(element.price / 100 * (100 - value))}
//   })
// }



// console.log(carsWithDiscount(cars,10))

// Задача 3

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// const filteredNumbers = numbers.filter((number)=>number>=0
// )
// console.log(filteredNumbers)

// Задача 4

// const heroes = [
//   {name: "Batman", franchise: "DC"},
//   {name: "Ironman", franchise: "Marvel"},
//   {name: "Thor", franchise: "Marvel"},
//   {name: "Superman", franchise: "DC"},
// ];

// const filteredHeroes = heroes.filter((hero) => hero.franchise === "DC"
// )

// const filteredHeroes2 = heroes.filter(({franchise}) => franchise === "Marvel"
// )
// console.log(filteredHeroes);
// console.log(filteredHeroes2);

// const findFranchise = (array, value) => {
//   return array.filter(({franchise}) => franchise === value
//   )
// }

// console.log(findFranchise(heroes,"Marvel"))

// Задача 5

// const filterByPrice = (array,threshold) => {
//   return array.filter((element)=> element.price < threshold)
// }

// console.log(filterByPrice(cars, 25000))

// Задача 6

//   const getCarsWithDiscount = (array) => {
//     return array.filter(({onSale}) => onSale).map(({model}) => model)};
// console.table(getCarsWithDiscount(cars));

// Задача 7

// const numbers = [1, 2, 3, 4, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 100, 100, 4, 105, 10, 7, 3, 75, 1, 19, 10, 11, 20, 25, 2, 5, 27, 2, 41 ]

// const uniqueNumbers = (array) => {
//   return array.filter((element, index, array) => array.indexOf(element) === index)
// }

// const uniqueNumbers = (array) => {
//   return array.reduce((acc, element) => {
//     if (!acc.includes(element)){
//       acc.push(element)
//     }
//     return acc;
//   }, [])
// }

// const uniqueNumbers = (array) => {
//   return array.reduce((acc, element) => !acc.includes(element) ? [...acc, element] : acc, [])
// }

// console.log(uniqueNumbers(numbers))

// Задача 8

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const calculatorTags = tweets.flatMap(({tags}) => tags).reduce((acc, element) => {
//   if (acc[element]){
//     acc[element] = acc[element] +=1;
//   }else{
//     acc[element] = 1
//   }
//   return acc;
// },{})

// const calculatorTags = tweets.flatMap(({tags}) => tags).reduce((acc, element) => ({...acc, [element]:acc[element] ? acc[element] +=1 : 1}),{})

// console.log(calculatorTags)

// Заняття питання - відповідь

// !! подвійна інверсія одразу приводить до буля

// console.log(!!0)
// console.log(!!1)
// console.log(Boolean(0))

// let arr = [ 1, "c", 2, 3, "a", 4, "b", 5, 6];


// arr = arr.filter(item => typeof item ===  "number")

// console.log(arr)

// Задача про равлика

// function calcDays(depth){
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < depth){
//     total += daySpeed;
//     days +=1;
//     if(total < depth){
//       total -= nightSpeed
//     }
//   }

//   console.log(days)
// }

// function calcDays(depth){
//   const daySpeed = 7;
//   const nightSpeed = 2;
  
//   const result = Math.round(depth / (daySpeed - nightSpeed))

//   console.log(result)
// }


// calcDays(42)
// calcDays(17)
// calcDays(18)

// Приклад рекурсії

// function foo(start, end){
//   if(start !== end){
//     start +=1
//     foo(start, end)
//   }
//   console.log(start, end)
// }

// foo(1,10)

// Приклад return

// const input = prompt("enter name")
// const names = ["Olga", "Pavlo", "Kate"]

// function checkName(name){
//   if(!name){
//     alert("Please enter name")
//     return;
//   }
//   if(names.includes(name)){
//     alert(`Hello ${name}`)
//     return;
//   }
//   alert("Please register")
// }
// checkName(input)

// Використання квадратних дужок

// const names = ["Olga", "Pavlo", "Kate"];
// console.log(names[0]);
// for (let i = 0; i < names.length; i += 1){
//   console.log(names[i]);
// }

// const value = prompt()
// console.log(typeof(value));

// const user = {
//   name: "Artem",
//   age: 28,
// }

// const keys = Object.keys(user)
// console.log(keys);
// for(const key of keys){
//   console.log("Назва ключа", key, user[key]);
// }

// Лексичне оточення і замикання

// function foo(){
//   let x = 55;
//   function boo(a){
//     return x + a
//   }
//   return boo
// }

// console.log(foo()(12));
// boo();

// Singleton pattern

// BigInteger

// const number = 111111111111111111111111111111111111111111111111111111111111111111111111111111;
// const big = 111111111111111111111111111111111111111111111111111111111111111111111111111111n;
// console.log(number);
// console.log(big);

// console.log(Number.MAX_SAFE_INTEGER)

// console.log(typeof number);
// console.log(typeof big);

// Symbol

// const symbol = Symbol();
// const symbol2 = Symbol();
// const object = Object(symbol)
// console.log(object);
// console.log(symbol2);

// Spread & Rest
// Spread розпиляє Rest збирає

// const obj = {
//   name: "Name",
//   age: 28,
// }

// const newObj = {...obj};
// console.log(newObj);

// const {...obj2} = obj
// console.log(obj2)

// Class

// class User {
//   #password
//   constructor (name, password){
//     this.name = name;
//     this.#password = password;
//   }
//   get password(){
//     this.#password
//   }
//   set password(newPassword){
//     this.#password = newPassword
//   }
// }

// const user1 = new User("Artem", 123456)
// console.log(user1)

// Виклик геттера без дужок, на відміну від виклику методу
// user1.password

// Виклик сеттера
// user1.password = "qwerty"

// console.log(user1.password)

// Задача class Toggle

// class Toggle {
//   constructor({isOpen = false} = {}){
//     this.on = isOpen;
//   }

//   toggle(){
//     this.on = this.on ? false : true;
//   }
// }

// const firstToggle = new Toggle({isOpen: true});

// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);

// call apply bind

// function foo(a, b){
//   console.log(this, `a => ${a}`, `b => ${b}`);
// }

// foo(1, 2)

// foo.call({name: "Hello"}, 1, 2)

// foo.apply({name: "Hello"}, [1, 2])

// const copy = foo.bind({name: Hello})
// copy(1,2)
// copy(3,4)

// setTimeout

// setTimeout(() => {
//   console.log("hello")
// }, 3000)

// setInterval

// let i = 0;

// const id = setInterval(() => {
//   i += 1
//   console.log("Hello world", i);
//   if(i === 10){
//     clearInterval(id)
//   }
// }, 3000)