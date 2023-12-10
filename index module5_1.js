// Репета модуль 5 урок 1 this /////////////////////////////////////////////////////////////////////////////////////////

// console.log("[] === []", [] === []);
// console.log("{} === {}", {} === {});
// console.log(
//   "function() {} === function() {}",
//   function () {} === function () {}
// );

// const fnA = function () {
//   console.log("hello");
// };
// const fnB = fnA;

// console.log("fnB === fnA", fnB === fnA);

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();

// const foo = function () {
//   console.log("foo -> this", this);
// };

// foo();

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// showTag();

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user", user);

// user.showUserTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;
// outerShowTag();

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// Тренування 1

// const fn = function () {
//   console.log("fn -> this", this);
// };

// fn();

// Тренування 2

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis();

// const outerShowThis = book.showThis;
// console.log(outerShowThis());

// const outerShowTitle = book.showTitle;
// console.log(outerShowTitle());

// Тренування 3

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//   };

//   changeColor();

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updateColor = changeColor;

//   console.log(sweater.updateColor("red"));

//   return sweater.updateColor;
// };

// console.log(makeChangeColor());

// const swapColor = makeChangeColor();
// console.log(swapColor("blue"));

// Тренування 4

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor("yellow");

// const hat = {
//   color: "blue",
//   updateColor,
// };

// console.log(hat.updateColor);
// hat.updateColor("orange");

// Тренування 5

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// console.log(updateCounter(10, counter.increment.bind(counter)));
// console.log(updateCounter(5, counter.decrement.bind(counter)));

// call i apply

// const showThis = function (...args) {
//   console.log(args);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20, 30, 40, 50);
// showThis.apply(objA, [5, 1, 1, 1]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2, 2);

// const changeColor = function (color) {
//   console.log("changeColor-> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, "orange");
// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// // changeColor.call(sweater, "blue");
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);

// changeHatColor("yellow");
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor("red");
// console.log(sweater);

// Артем модуль 5 урок 1 this /////////////////////////////////////////////////////////////////////////////////////////

// Питання з кахуту

// function foo() {
//   console.log(this);
// }

// foo();

// const obj = {
//   logCtx: foo,
// };

// console.log(obj.logCtx);

// obj.logCtx();

// Питання з кахуту

// const objA = {
//   name: "objA",
//   logCtx() {
//     console.log(this);
//   },
// };

// objA.logCtx();

// const objB = {
//   name: "objB",
//   foo: objA.logCtx,
// };

// console.log(objB.foo);
// objB.foo();

// Питання з кахуту

// const foo = () => console.log(this);
// foo();

// arrow function this -> Window і з "use strict" і без "use strict", undefined лише коли type = "module"

// Питання з кахуту 9

// const obj = {
//   objThis: this,
//   foo: () => {
//     console.log(this);
//   },
// };

// console.log(obj.objThis);
// console.log(this);
// obj.foo();

// об'єкт не має свого this, а посилається на window, тому стрілочна функція як метод об'єкту бере батьківський this, тобто window, бо не має свого

// Питання з кахуту 10

// const foo = () => {
//   console.log(this);
// };

// const obj = {
//   key: foo,
// };

// obj.key();

// Питання з кахуту

// function foo(a, b) {
//   console.log("this ->", this, "a ->", a, "b ->", b);
// }

// foo(1, 2);

// foo.apply({}, [1, 2]);

// function boo() {
//   console.log(this);
// }

// foo.call({}, 1, boo);

// Питання з кахуту

// function foo(a, b) {
//   console.log(arguments);
//   console.log("this ->", this, "a ->", a, "b ->", b);
// }

// const testObj = {
//   name: "my Test",
// };

// // const boo = foo.bind(testObj, 1, 2);
// let boo = foo.bind(testObj, 1, 2);
// boo(3, 4);
// boo(4, 5);
// boo(5, 6);

// const boo = foo.bind(testObj);
// boo(3, 4);
// boo(4, 5);
// boo(5, 6);

// Теорія

// const artem = {
//   name: "Artem",
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const david = {
//   name: "David",
// };

// const maks = {
//   name: "Maks",
// };

// artem.sayHello();
// artem.sayHello.call(david);
// artem.sayHello.apply(maks);

// Теорія

// Прив'язка this до вкладеної функції за допомогою call

// const obj = {
//   name: "my name",
//   sayHello() {
//     console.log("sayHello", this.name);

//     function boo() {
//       console.log("boo", this);
//     }
//     boo.call(this);
//   },
// };
// obj.sayHello();

// Прив'язка this до вкладеної функції за допомогою arrow function

// const obj = {
//   name: "my name",
//   sayHello() {
//     console.log("sayHello", this.name);

//     const boo = () => {
//       console.log("boo", this);
//     };
//     boo();
//   },
// };
// obj.sayHello();

// const obj = {
//   name: "my name",
//   sayHello() {
//     console.log("sayHello", this.name);

//     const boo = () => {
//       console.log("boo", this);

//       const doo = () => {
//         console.log("doo", this);
//       };
//       doo();
//     };
//     return boo;
//   },
// };

// При написанні функції doo не стрілкою, this буде undefined фбо window бо її не викликає ніякий об'єкт, вона просто викликається сама(389)

// obj.sayHello()(); // те саме, що код нижче:

// const boo = obj.sayHello();
// boo();

// Приклад 1 Майстерня коштовностей

// const chopShop = {
//   stones: [
//     {
//       name: "Emerald",
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: "Diamond",
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: "Sapphire",
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: "Ruby",
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     return this.stones.reduce(
//       (acc, { name, price, quantity }) =>
//         name === stoneName ? (acc = price * quantity) : acc,
//       0
//     );
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald"));
// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Sapphire"));
// console.log(chopShop.calcTotalPrice("Ruby"));

// Рефакторинг phonebook

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: phonebook.generateId(),
//       createdAt: phonebook.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//     list: "friends",
//   })
// );

// const newPhoneBook = {
//   contacts: [],
// };

// phonebook.add.call(newPhoneBook, {
//   name: "Mark",
//   email: "mark@mail.com",
//   list: "friends",
// });

// Калькулятор

// const calculator = {
//   create(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);
// calculator.create(5, 2);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// Репета модуль 5 урок 2 прототипне наслідування і класи /////////////////////////////////////////////////////////////////////////////////////////

// setPrototypeOf() почитати

// const objC = {
//   z: 5,
// };

// console.log("objC", objC);
// // console.log(objC.hasOwnProperty("z"));

// const objB = Object.create(objC);
// objB.y = 2;
// console.log("objB", objB);

// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log("objA", objA);

// console.log(objA.z);
// objA.z = 1000;
// console.log("objA", objA);
// console.log(objA.hasOwnProperty("x"));

// const dummyObj = Object.create({ message: "This is property of prototype" });
// dummyObj.message = "This is own property of Obj";
// console.log("dummyObj", dummyObj);
// console.log(dummyObj.message);

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log("objA", objA);
// console.log(objA.x);

// Інтерфейс в програмуванні - це набір доступних властивостей та методів для роботи з ними

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // так функції не робимо, бо буде багата копій
//   // this.changePrice = function (newPrice) {
//   //   this.price = newPrice;
//   // };
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :) ");
// };

// Car.prototype.changePrice = function (newPrice){
//   this.price = newPrice;
// }

// Car.description = "Клас, що описує авто"

// Car.logInfo = function(carObj){
//   console.log("Car.logInfo -> carObj", carObj)
// };

// console.log(Car.prototype);

// const myCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: "BMW", model: "X6", price: 50000 });
// console.log(myCar2);

// const myCar3 = new Car({ brand: "Audi", model: "A6", price: 65000 });
// console.log(myCar3);

// const User = function ({email, password} = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail
// }

// const mango = new User({email: "mango@mail.com", password: 111111})

// mango.changeEmail("my-new-mail@mail.com");

// console.log(mango)

// // Статичні властивості та методи. Доступні лише на самому конструкторі, не мають this

// User.message = "Я статична властивість, мене немає на екземплярах чи в прототипі"

// User.logInfo = function (obj) {
//   console.log("User.logInfo -> obj", obj);
//   console.log("Пошта", obj.email);
//   console.log("Пароль", obj.password);
// }

// console.log(mango);
// console.log(User);

// Класи

// class Car1 {
//   static description = "Клас, що описує авто";

//   static logInfo(carObj){
//     console.log("Car.logInfo -> carObj", carObj)
//   }

//   #test = "test";
  
//   constructor({ brand, model, price } = {}){
//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get price(){
//     return this._price;
//   }

//   set price(newPrice){
//       this._price = newPrice;
//   }

//   get model(){
//     return this._model;
//   }

//   set model(newModel){
//     this._model = newModel;
//   }
// }



// console.dir(Car1);

// const carInstance = new Car1(
//   { brand: "Audi", model: "Q3", price: 35000 }
// );

// console.log(carInstance);
// console.log(carInstance.model);
// carInstance.model = "Q4";

// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

// Наслідування див що не так з об'єктом який передається в конструктор

// class Hero {
//   constructor({name = "hero", xp = 0} = {}){
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount){
//     console.log(`${this.name} отримує ${amount} досвіду`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({weapon,...restProps}={}){
//     super(restProps);
    
//     this.weapon = weapon
//   }

//   attack(){
//     console.log(`${this.name} атакує використовуючи ${this.weapon}`)
//   }
// }

// class Berserk extends Warrior {
//   constructor({warcry,...restProps}={}){
//     super(restProps);

//     this.warcry = warcry;
//   }

//   babyRage(){
//     console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: "Ajax",
//   xp: 500,
//   weapon: "axe",
//   warcry: "waaaaaaaah"
// })

// console.log(ajax)

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp()

// class Mage extends Hero {
//   constructor({spells, ...restProps} = {}){
//     super({restProps});

//     this.spells = spells;
//   }

//   cast(){
//     console.log(`${this.name} чаклує`)
//   }
// }

// const mango = new Warrior({name: "Mango", xp: 1000, weapon:"алебарда"});

// console.log(mango);

// mango.attack()

// mango.gainXp(1000)

// const poly = new Mage({name: "Poly", xp: 500, spells: ["Фаєрбол"]})
// console.log(poly)
// poly.cast();
// poly.gainXp(200)

// console.log(mango.__proto__ === Warrior.prototype);
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);

// Артем модуль 5 урок 2 Прототипне наслідування і класи /////////////////////////////////////////////////////////////////////////////////////////

// Теорія Приклад 1

// const user = {
//   name: "test user a",
//   age: 18,
//   sayHello(){
//     console.log(this.name);
//   },
//   showAge(){
//     console.log(`My age is ${this.age}`);
//   }
// }

// const user1 = Object.create(user);
// user1.name = "test user 1"
// user1.sayHello()
// console.log("user1", user1);
// const user2 = Object.create(user);
// user2.showAge()
// console.log("user2",user2)

// Теорія Приклад 2

// const user = {
//   name: "test user a",
//   sayHello(){
//     console.log(this.name);
//   },
// }

// const admin = Object.create(user)
// admin.age = 19;
// admin.showAge = function(){
//   console.log(this.age);
// }

// const practiceOwner = Object.create(admin);
// practiceOwner.name = "Owner";

// console.log(practiceOwner)

// practiceOwner.sayHello()
// practiceOwner.showAge()

// Теорія Приклад 3

// class User {
//   static counter = 0;
//   static addUser(){
//     this.counter +=1
//     console.log(`Number of users ${this.counter}`);
//   }
//   #location
//   constructor({name, email, age = 18, location = "World", password}= {}){
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     this.password = password;
//     User.addUser()
//   }

//   sayHello(){
//     console.log(this.name)
//   }

//   #getEmail(){
//     console.log(this.email)
//   }

//   get locale(){
//     return this.#location;
//   }
//   set locale(city){
//     const value = prompt("Enter password")
//     this.#getEmail()
//     if(value === this.password){
//       this.#location = city
//       console.log(this.#location);
//     }else{
//       console.log("Hacker ?")
//     }

//   }
// }

// const test = new User({
//   name: "User A",
//   email: "test@gmail.com",
//   location: "Lviv",
//   password:"qwerty111"
// });

// console.log(test.locale)
// test.locale = "Dnipro"

// const test1 = new User({
//   name: "User B",
//   email: "gmail@gmail.com",
//   age: 99
// });

// console.log(test);
// console.log(test1);
// test.sayHello()

// class Avatar extends User {
//   constructor({name, email, location, password, age, damage}){
//     super({name, email, location, password, age})
//     this.damage = damage;
//   }

//   attack(){
//     console.log(`Attack with damage ${this.damage}`)
//   }
// }

// class Zombi extends User {
//   constructor({name, email, location, password, age, poison}){
//     super({name, email, location, password, age})
//     this.poison = poison;
//   }

//   toBite(){
//     console.log(`Bite with poison ${this.poison}`)
//   }
// }

// const test2 = new Avatar({
//   name: "User A",
//   email: "test@gmail.com",
//   location: "Lviv",
//   password:"qwerty111",
//   damage: 700,
// });

// console.log(test2)

// const test3 = new Zombi({
//   name: "User B",
//   email: "gmail@gmail.com",
//   age: 99,
//   poison: 500,
// });

// console.log(test3)

// Example 1

// class Blogger{
//   constructor({name, age, numberOfPosts, topics} = {}){
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo(){
//     return `User ${this.name} is ${this.age} years old and has ${ this.numberOfPosts} posts.`
//   }
//   updatePostsCount(value){
//     this.numberOfPosts += value
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts:20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostsCount(5);
// console.log(mango.getInfo());

// Example 2

// class Storage{
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(item){
//     if(!this.items.includes(item)){
//       this.items.push(item)
//       return
//     }

//     console.log("Такий товар вже є")
//   }
//   removeItem(item){
//     const idx = this.items.indexOf(item);
//     if(!!~idx){
//       this.items.splice(idx,1)
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍇", "🍑", "🍋"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("🍌");
// console.table(storage.items);

// storage.removeItem("🍋")
// console.table(storage.items);

// Example 3

// class User {
//     #login;
//     #email;
//     constructor({login,email}={}){
//         this.#login = login;
//         this.#email = email;
//     }

//     get login(){
// return this.#login;
//     }
//     set login(newLogin){
//         if(this.#login !== newLogin){
//             this.#login = newLogin;
//         }

//     }

//     get email(){
// return this.#email;
//     }

//     set email(newEmail){
//         if(this.#email !== newEmail){
//             this.#email = newEmail;
//         }
//     }
// }

// const mango = new User({
//     login: "Mango",
//     email: "mango@dog.woof",
// });

// console.log(mango.login);
// mango.login = "Mangodoge";
// console.log(mango.login);

// const poly = new User({
//     login: "Poly",
//     email: "poly@mail.com",
// });

// console.log(poly.login);
// poly.login = "Polycutie";
// console.log(poly.login);

// Example 4

// class Notes{
//     static Priority = {
//         LOW: "low",
//         NORMAL: "normal",
//         HIGH: "high"
//     }
//     constructor(note){
//         this.items = note;
//     }
//     addNote(note){
//         const inArr = this.items.some(({text}) => text === note.text)
//         if(!inArr){
//             this.items.push(note)
//         }
//     }
//     // removeNote(text){
//     //     const idx = this.items.findIndex(({text: noteText})=> noteText === text);
//     //     if(!!~idx){this.items.splice(idx,1)}

//     // }
//     removeNote(text){
//         const inArr = this.items.some(item.text === text) // або те ж саме з find
// if(inArr){
//     const idx = this.items.findIndex(({text: itemText})=> itemText === text)
// this.items.splice(idx,1)}else{
//     console.log("Немає")
// }   
// }
//     // updateNote(text, newPriority){
//     //     const idx = this.items.findIndex(({text:noteText}) => noteText === text)
//     //     if(!!~idx){this.items[idx].priority = newPriority}
//     // }
//     updateNote(text, newPriority){
//         const inArr = this.items.find(item.text === text)
//         if(inArr){
//             inArr.priority = newPriority;
//         }else{
//             console.log("Немає")
//         }
        
// }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: "Моя перша замітка", 
//     priority: Notes.Priority.LOW});
// console.log(myNotes.items);

// myNotes.addNote({
//     text: "Моя друга замітка",
//     priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// free code camp regular expressions пройти