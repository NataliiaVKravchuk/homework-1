// Матеріали заняття з Артемом 1 ...............................................................................

// // const title = document.querySelector('h1'); // по тегу

// // const title = document.querySelector('#title');

// const title = document.querySelector('.js-title');

// console.dir(title);
// console.dir(title.textContent);

// title.textContent = "Hello JS"

// console.dir(title.textContent);

// // classList

// title.classList.add('title-color')
// title.classList.remove('title-color')
// title.classList.toggle('title-color')

// // додавання інлайн стилів

// title.style.fontSize = '50px';
// title.style.color = 'green';

// // так не робити через repaint reflow 
// // Так як перемальовується весь документ 
// // бо для зміни одного елемента мусимо змінити весь DOM

// // дата-атрибут для передачі даних

// console.dir(title.dataset.id);

// // базові атрибути представлені як властивість

// console.dir(title.id);

// console.dir(title.getAttribute('id'));

// console.dir(title.getAttribute('data-id'));

// title.setAttribute('hidden', 'true')
// title.removeAttribute('hidden')

// const list = document.querySelector('.js-list')
// console.dir(list.children);

// // childNodes не використовуємо, бо він міститить переноси рядків як текст

// console.log([...list.children])

// // const li = document.createElement('li');
// // li.textContent = list.children.length + 1;
// // li.classList.add('title-color')
// // li.dataset.id = '1234';
// // const div = document.createElement('div');
// // const h2 = document.createElement('h2');
// // h2.textContent='Hello';
// // li.append(div);
// // div.append(h2);
// // list.append(li);

// // другий спосіб

// const li = `<li class="title-color" data-id='1234'>${list.children.length + 1}
// <div>
// <h2>Hello</h2>
// </div>
// </li>`;
// list.insertAdjacentHTML('beforeend',li)

// console.log(li)

// const listStatic = document.querySelectorAll('li')
// console.log(listStatic)

// const listDynamics = document.getElementsByTagName('li')
// console.log(listDynamics)

// const li2 = document.createElement('li');
// li2.textContent = list.children.length + 1;
// list.append(li2);
// console.log(listStatic)
// console.log(listDynamics)

// // getElements завжди повертає актуальні дані

const cars = [
    {
      model: "Honda",
      id: 1,
      tel: '232546574564',
      type: "Civic",
      price: 12000,
      img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
        model: "Audi",
        id: 2,
        tel: '254745674564',
      type: "Q7",
      price: 40000,
        img: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        model: "BMW",
        id: 3,
        tel: '254767856564',
      type: "5 series",
      price: 9000,
        img: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    {
        model: "Honda",
        id: 4,
        tel: '254734534556564',
      type: "Accord",
      price: 20000,
        img: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elephant Beside on Baby Elephant",
    },
    {
        model: "BMW",
        id: 5,
        tel: '25473556564',
      type: "X 5",
      price: 50000,
        img: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Blue Geeen and Orange Parrot",
    },
    {
        model: "Mersedes",
        id: 6,
        tel: '2547387986564',
      type: "W124",
      price: 4500,
        img: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Zebras on Zebra",
    },
  ];

//   const container = document.querySelector('.js-container');

//   cars.forEach(({id,model,type,price,img,alt}) => {
//     const markup = `<li><img src="${img}" alt="${alt}" class="img">
//     <h2> Brand - ${model}</h2>
//     <h3> Model - ${type}</h3>
//     <p> Price - ${price}</p>
//   </li>`;
//   container.insertAdjacentHTML('beforeend', markup)
//   })

// const markup = cars.map(({id = 'none',model,type,price,img,alt}) => 
//     `<li data-id="${id}"><img src="${img}" alt="${alt}" class="img">
//     <h2> Brand - ${model}</h2>
//     <h3> Model - ${type}</h3>
//     <p> Price - ${price}</p>
//   </li>`).join('');

//   container.insertAdjacentHTML('beforeend', markup)

//   console.dir(markup);

//   // як видалити елементи
//   // це якщо 1-2 елементи по умові, так як буде переписуватись весь DOM

//   const containerAfter = document.querySelector(".js-container");
//   [...containerAfter.children].forEach(item => {
//     if (item.dataset.id !== "none")
//     {item.remove();}})

//   // видалити все одразу

//   containerAfter.innerHTML = '';

//   const dishes = document.querySelectorAll(".dishes > li"); // означає всі li, вкладені в dishes, якщо в li немає дата-атрибутів щоб вибрати їх окремо
  

// Матеріали заняття з Репетою 1 .................................................................................................

// const navEl = document.querySelectorAll(".js-site-nav")
// console.dir(navEl)

// можна шукати не лише по document, а і по раніше створеній змінній
// const navLinksEl = navEl.querySelectorAll(".js-site-nav-item")
// console.dir(navLinksEl)

// можна шукати по більш специфічному селектору .js-site-nav-item які вкладені в .js-site-nav
// const navLinksEl = navEl.querySelectorAll(".js-site-nav .js-site-nav-item")
// console.dir(navLinksEl)

// const imageEl = document.querySelector(".js_hero_image");
// console.log("imageEl", imageEl)
// console.log(imageEl.src)
// imageEl.src = "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
// imageEl.alt = 'This is new cat';

// const heroTitleEl = document.querySelector('.js_hero_title');
// console.dir(heroTitleEl)
// console.log(heroTitleEl.textContent)
// heroTitleEl.textContent = 'I am lovely cat'

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src)

// imageEl.removeAttribute('src');

// console.log(imageEl.hasAttribute('src')); // true/false

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);

// дата-атрибути використовуються для функціоналу

// console.log(actions[2].dataset.action);
// console.log(actions[2].getAttribute('data-action'));

// console.log(navEl.classList);
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');
// navEl.classList.toggle('super-cool');
// navEl.classList.replace('super-cool', 'qwerty');
// console.log(navEl.classList.contains('qwerty')); // true/false

// const currentPageUrl = '/portfolio';
// const linkEl = document.querySelector(`.js-site-nav_link[href="${currentPageUrl}]`);
// console.dir(linkEl);
// linkEl.classList.add('site-nav_link--current');

// const navEl = document.querySelector('.js-site-nav')
// console.dir(navEl);
// // const firstNavItemEl = navEl.firstElementChild;
// const firstNavItemEl = navEl.querySelector('.js-site-nav-item')
// console.dir(firstNavItemEl)
// console.dir(navEl.children)
// console.dir(navEl.lastElementChild)

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'This is page title';
// console.log(titleEl);

// document.body.appendChild(titleEl);

// console.log(document.head);
// console.log(document.body);

// const imageEl = document.createElement('img');
// console.log(imageEl);
// imageEl.src='https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
// imageEl.alt='image description'
// imageEl.width = 320;

// document.body.appendChild(imageEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('js-site-nav-item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('js-site-nav_link');
// navLinkEl.textContent = 'Profile';
// navLinkEl.href = '/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);

// const navEl = document.querySelector('.js-site-nav');
// navEl.appendChild(navItemEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// navEl.insertBefore(navItemEl, navEl.children[1]);

// const heroEl = document.querySelector('.js-hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// heroEl.append(titleEl, imageEl) // prepend додає на початок

// const colorPickerOptions = [
//     {label: 'red', color: '#F44336'},
//     {label: 'green', color: '#4CAF50'},
//     {label: 'blue', color: '#2196F3'},
//     {label: 'grey', color: '#607D8B'},
//     {label: 'pink', color: '#E91E63'},
//     {label: 'indigo', color: '#3F51B5'},
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];

// for (let i=0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.classList.add('color-picker__option');
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// elements.push(buttonEl);
// }

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.classList.add('color-picker__option');
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// return buttonEl;
// })

// console.log(elements);

// colorPickerContainerEl.append(...elements)

// const makeColorPickerOptions = options =>{
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     return buttonEl;
//     });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// const product = {
//     name: 'Servs',
//     description: 'Lorem sdfsf sdfsf werwr sfsdf lkjlkj',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// {<article class="product">
//     <h2 class="product__name">Name</h2>
//     <p class="product__descr">Description</p>
//     <p class="product__price">Price: 1111 credits</p>
// </article>}


// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price} credits`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

// Експорт та імпорт масиву
// Обидва файли мають бути type = module
// У першому файлі пишеться export default [{},{}] і далі йде масив об'єктів
// А в другому файлі на першому рядку пишеться import products(назва локальної змінної) from './data/products.is'; шлях до файлу

// const products = [
//     {
//     name: 'Servs',
//     description: 'Lorem sdfsf sdfsf werwr sfsdf lkjlkj',
//     price: 2000,
//     available: true,
//     onSale: true,
// },
// {
//     name: 'Generator',
//     description: 'Lorem sdfsf sdfsf werwr sfsdf lkjlkj',
//     price: 3000,
//     available: false,
//     onSale: false,
// },{
//     name: 'Zero Element',
//     description: 'Lorem sdfsf sdfsf werwr sfsdf lkjlkj',
//     price: 1500,
//     available: true,
//     onSale: false,
// },{
//     name: 'Titanium',
//     description: 'Lorem sdfsf sdfsf werwr sfsdf lkjlkj',
//     price: 1500,
//     available: true,
//     onSale: false,
// },
// ];

// const productContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({name, description, price}) => {
// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${price} credits`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// return productEl;
// };

// console.log(makeProductCard(products[1]));

// const elements = products.map(makeProductCard);
// console.log(elements);

// productContainerEl.append(...elements);

// const titleEl = document.querySelector('.js_hero_title');
// Очистити повністю
// titleEl.innerHTML = "";
// innerHTML використовувати лише тоді, коли треба створити з нуля або повність видалити розмітку
// з += не використовувати, бо воно повністю видаляє розмітку і переписує зановоб що є деструктивною операцією
// для додавання до вже існуючого є insertAdjacentHTML

// const transactionHistory = [
//     {
//         id:878454121,
//         amount: 200,
//         date: "20/01/2012",
//         business:'Legros, Weimann and Treutel',
//         name: 'Auto Loan Account 0721',
//         type: 'invoice',
//         account: 382005215,
// },{
//     id:87848221,
//     amount: 300,
//     date: "18/01/2012",
//     business:'Hane-Bone',
//     name: 'Savings Account 1894',
//     type: 'withdrawal',
//     account: 7575245,
// },
// ];

// const makeTransactionTableRowMarkup = transaction => {
//     const {id, amount, date, business, type, name, account} = transaction;

//     return `
//     <tr>
//           <td>${id}</td>
//           <td>${amount}</td>
//           <td>${date}</td>
//           <td>${business}</td>
//           <td>${type}</td>
//           <td>${name}</td>
//           <td>${account}</td>
//         </tr>`
// };

// const tableEl = document.querySelector('.js-transaction-table');
// const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');
// tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
// console.log(makeTransactionTableRows);

// Уроки заняття з Артемом 1 .................................................................................................

// const refs = {
//     staticItems: document.querySelectorAll('.js-item'),
//     dynamicItems: document.getElementsByClassName('js-item'),
//     ul: document.querySelector('ul'),
// }

// console.log(refs.dynamicItems[refs.dynamicItems.length-1]);
// const arr = [];
// for(let i = 1; i <=3; i +=1){
//     const li = document.createElement('li');
//     li.classList.add('js-item');
//     li.textContent = Number(refs.ul.lastElementChild.textContent) + i;
//     arr.push(li);
// }

// refs.ul.append(...arr);
// console.log(refs.dynamicItems[refs.dynamicItems.length-1]);

// const arr = [];
// for(let i = 1; i <=3; i +=1){
//     const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) + i}</li>`
//     arr.push(markup)
// }
// refs.ul.insertAdjacentHTML("beforeend",arr.join(""));
// console.log(arr)

// Приклад з reduce і машинами

//   const container = document.querySelector('.js-container');


// const markup = cars.reduce((acc, {id = 'none',model,type,price,img,alt}) => 
//    acc + `<li data-id="${id}"><img src="${img}" alt="${alt}" class="img">
//     <h2> Brand - ${model}</h2>
//     <h3> Model - ${type}</h3>
//     <p> Price - ${price}</p>
//   </li>`, '')

//   container.insertAdjacentHTML('beforeend', markup)

//   console.dir(markup);

  // Знайти в якому елементі є div з h1 hello world 
  // Абстрактний приклад
  // Тернарний оператор прописується для уникнення помилки, якщо у якихось елементах div немає зовсім

  // [...refs.ul.firstElementChild.children].forEach(item => {
  //   if(item.firstElementChild ? item.firstElementChild.tagName === 'H1' : false){
  //     console.log(item.firstElementChild.textContent)
  //   }
  // })

  // container.addEventListener('click', (e) => {
  //   if(e.target.closest('li')){
  //     const id = e.target.closest('li').dataset.id
  //     const currentCar = cars.find(({id: carId}) => carId === Number(id))
  //     console.log(currentCar);
  //   }
  // })

  // https://dou.ua/lenta/articles/interview-questions-javascript-developer/


// Матеріали заняття з Артемом 2 .................................................................................................



const button = document.querySelector(".js-click");
const container3 = document.querySelector(".js-container3")
button.addEventListener("click", onClick);

let step = 0;

function onClick(evt){
  step +=5;
  container3.style.marginLeft = `${step}px`;
  container3.style.marginTop = `${step}px`;
  console.log(evt.currentTarget);
}

const title = document.querySelector('.js_hero_title')
const maxLength = 12;
const totalLength = maxLength + 3;
title.addEventListener("click", onClick);

function onClick(evt){
  const title = evt.currentTarget;
  const str = title.textContent.slice(0,maxLength);

  if(title.textContent.length > totalLength){
    
  const remainder = title.textContent.slice(maxLength);
  title.setAttribute('data-title',remainder);
  title.textContent = str+'...';
  } else {
    const remainder = title.dataset.title;
    if (remainder){
      title.textContent = str + remainder;
    }
  }
}

const userName = document.querySelector('js-input');

userName.addEventListener('input', onInput)

const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt){
  evt.preventDefault()
}s

// Деструктуризація в різні змінні

// const obj = {
//   x: 10,
// }

// const {x: myX1, x: myX2} = obj;

// console.log(myX1 === myX2)

// Практика з ментором ..................................
// Задача з дужками......................................

function checkBrackets(str) {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    }
    if (bracket === "}" || bracket === ")" || bracket === "]") {
      const lastEl = stack.pop();
      if (bracket !== obj[lastEl]) {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}
