/* // Вывод в консоль
// console.log('Hello, from JS');
// Переменные
// let userName = 'Марк';
// console.log(userName)

// Типы переменных
/* 
let - переменная
const - константа
var - старая перемення по протоколу ES5
*/
// let - может менять значение во время работы програмы
// let userName = 'Егор';
// console.log(userName);

// userName = 'Вася';
// console.log(userName);

// const - не может менять значение
// const yearOfBirth = 1990;
// const = 2000 -(ошибка)
/*---------------------------------- */
// let name, age;
// name = 'Yurij'

/* const profession= 'JS developer';
profession = 'JS developer'; -(ошибка)*/

// var - старый формат обьявления переменной
// в отличие от let и const имеет функциональную область видимости, а не блочную
// не рекомендуеться к использованию
//  может менять значение на протяжении работы программы

// var city = 'Moscow';
// city = 'Minsk';
// city = 'Kiev';
// console.log(city);

/* ------------------функции--------------- */

/* function sum() {
	var name = "Yurij"
	console.log(name);
}

sum();

console.log(userName);

{
	let userName = "Bob"
	console.log = (userName);

	var someNumber = 10;
	console.log(someNumber);
}

console.log(userName);
console.log(someNumber); */

/* -------------типы данных------------ */
/* let userName = 'Bob'; // строка (текст) (Одно слово, фраза, предложение, абзац, хотб целая книга)

let age = 30; // число

console.log(30); -число
console.log('30'); -строка

let isMarried = true; // Логическое значение true/false

// динамическая типизация
let someVarible = 'Some Value'; // сейчас someVarible типа String
someVarible = 50; //сейчас someVarible типа number
someVarible = true; //сейчас someVarible типа Boolean

// плохой пример нейминга
let u = 'Bob';
console.log(u);
// хороший пример нейминга
const USER_NAME = 'Alice'
console.log(USER_NAME);

// значение null - ничего, пусто или 'значение неизвестно'
let age = 32; 
let age = null; 

// значение undefined
// Означает что значение не было присвоено
// Если переменная обьявлена, но ей не присвоено никакого значения то ее значением будет undefined
let userName;
console.log(typeof userName === 'undefined') //true

let someName = 'James';
someName = undefined; // так не делают
someName = null // так делают

// Обьекты
// Массивы

// Оператор typeof
const someName = 'Bob';
console.log(typeof someName) //- вывод String

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(328947923478932492372934723842729n)

// Symbol
// Символ это уникальное прмитивное значение
// Позволяет добавлять уникальное свойство к обьекту, с увереностью что он не перезапишет никакое другое свойство
 */

/* -----------Операторы сравнение и условия--------------- */

/* >,<,<=,>= - больше меньше больше либо равно меньше либо равно
	== - нестрогое сравнение
	=== - строгое сравнение 
	!= - нестрогое неравенство
	!== - строгое неравенство 
*/

/* console.log(10 > 5); // true
console.log(20> 80) // false */

/* let result = 10 > 5;// true
console.log(result) // true */

/* console.log('5' == 5) // true
console.log('5' === 5) // false */

/*  не правильно
let number = 5;
console.log(number =10) // true */

/*  правильно
let number = 5;
console.log(number ==10) // true */

/* let number = 5;
if (number = 10) { 
	console.log(11111);
	console.log(number);
} */

/* 
if (условие) {
	// код который будет выполнен если условие верно
} else {
	//код который будет выполнен если условие неверно
}
*/

/* const time = 12;

if (time < 12) {
	console.log('Доброе утро');
} else {
	console.log('Добрый день');
} */

/* const time = 20;

if (time < 12) {
  console.log('Доброе утро');
} else if (time >= 12 && time < 18) {
	console.log('Добрый день');
} else {
	console.log('Добрый вечер')
}
 */

/* 
Логические операторы
&& - логическое И
|| - логический или
!true - логичекое не
*/

/* -----------Тернарный оператор-------------- */

// (условие) ? (условие верно) : ( условие не верно)
// 10 < 12 ? console.log('условие верно') : console.log('условие не верно');

/* let greeting;
let time = 10;

if (time < 12) {
	greeting = 'Доброе утро';
} else {
	greeting = 'Добрый вечер';
}

console.log(greeting); */

/* let time = 20
let greeting = time < 12 ? 'Доброе утро' : 'Добрый день';
console.log(greeting); */

/* ----------------контенация строк и шаблоны строки----------------- */

/* console.log('Привет, Марк! Как твои дела?');

let greeting = 'Привет, Марк!';
let howAreYou = ' Как твои дела?';

let sayHi = greeting + howAreYou; 
console.log(sayHi); */

// конкатенация 'строка'+'строка'
/* const userName = 'Марк'
console.log('Привет, ' + userName + '! Как твои дела?'); */

// шаблонные строки и интерполяция
// console.log(`Привет, ${userName}! Как твои дела?`);

/* ----------------Функции--------------- */

// DRY - don't repeat yourself
/* 
function sayHi() {
	console.log('Привет, дорогой пользователь!');
}
sayHi(); // вызываем функцию
sayHi() */
/* 
//function declarition
function sayHi() { 
	alert('Привет');
}

// function expression
const sayHi = function () {
	alert('Привет');
} */

/* ================параметры и аргументы для функции============== */

/* function sayHi(name) {
	console.log(`Привет, ${name}! Как твои дела`); 
} //параметр

sayHi(`Yurij`) //аргумент
sayHi(`Pavel`);
sayHi(`James`);
 */

/* -----------------------return----------------------------------- */

/* function sum(a, b) {
	const result = a + b;
	console.log(result);
}

sum(10, 15); */

/* function sum(a, b) {
	const result = a + b;
	return result;
}

sum(10, 15); */

/* function sum(a, b) {
  const result = a + b;
  return result;
}

let res = sum(10, 15);
console.log(res); */

/* ---------------Функция как аргумент------------- */

/* function sum(a, b) {
	return a + b;
}

console.log(sum(15, 15)); */

/* function sum(a, b) {
  return a + b;
}

console.result = sum(summ(15,15), summ(20,20))
console.log(result); */
/* 
function sum(a, b) {
  return a + b;
}

function diff(a, b) { 
	return a - b;
}

function doSomething() {
	let x = 10;
	let y = 15;
	let result = func(x, y);
	console.log(result);
}

doSomething(summ); //25
doSomething(diff); // -5
 */
/* -------------Самовызывающаяся функция IIFE---------- */
/* 
(function sayHi () {
	console.log('Првиет, дорогой пользователь!')
})(); */
/* 
(function summ(a, b) {
	console.log(a);
	console.log(b);
	console.log(a + b);
})(10, 15);
 */

/* -----------------Стрелочные функции------------------*/

/* function sayHi(name) {
	console.log(`Привет, ${name}! Как твои дела?`);
}

sayHi(`Марк`);

const arrSayHi = (name) => {
	console.log(`Привет, ${name}! Как твои дела?`);
}

arrSayHi('Петя') */

/* const summ = (a, b) => a + b;

const res = summ(10, 30);
console.log(res);
 */
/*------------------- Массивы-------------------- */

/* const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 'BMW', ['Mazda', 'Toyota'], 70];
console.log(autoBrands);

console.log(autoBrands[0]);
console.log(autoBrands[2]);

console.log(autoBrands.length) */

/* -------------------методы массивов------------------ */
/* .push(), -добавить элемент в конец масива
arr.pop() -удалить элемент из конца массива
 .pop(),
 arr.shift() - удалить элемент из начала массива 
  .shift(),
  arr.unshift(....items)- добавить элемент в начало массива
   .unshift(), 
	arr.splice([start],[deleteCount, newElements])
	 .splice(), 
	 .slice(), .forEach(), .indexof(), .icludes()  */

/* 
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);

autoBrands.push('Nissan');
console.log(autoBrands);

autoBrands.splice(2, 2);
console.log(autoBrands); */

/* --------------Циклы-------------- */

/* for (let i = 0; i < 10; i++){
	console.log(i);
} */

/* console.log('Start');

 for (let i =0; i<10; i++) {
console.log(i);
}

console.log('Finish') */

/* ------------------обход массива цмклом for--------------- */

/* const autoBrands = ['Audi', 'BMW', 'Mazda','Toyota'];
console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);
console.log(autoBrands[3]);
console.log(autoBrands[4]);

for (i = 0; i < autoBrands.length; i++) {
	console.log(autoBrands[i]);
	console.log(i);
} */

/* ----------------------обход массива цмклом for (of)------------------------ */
/* 
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

for (let item of autoBrands) {
	console.log(item);
} */

/* --------------------------Обход масива методом forEach()-------------------------------- */

/* const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

autoBrands.forEach(function (brand, i) {
	console.log(`$[brand] => ${i}`);
}) */

// autoBrands.forEach(printBrand);
/* 
function printBrand(brand, i) {
	console.log(`${brand} => ${i}`);
} */
// autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));

/* ----------------------Об'ъекти--------------------- */
// Свойства объектов
/* let userName = 'Марк';
let age = 30;
let isMarried = false;

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false
}

console.log(person);
console.log(person.userName);
console.log(person['age']);

let propertyName = 'profession';
console.log(person.userName)

person.profession = 'JS developer';
console.log(person); */

/* delete personalbar.age;
console.log(person);
 */
/* --------------------Методы в объектах---------------------- */

/* const person = {
  userName: 'Марк',
  age: 30,
  isMarried: false, */
/* sayHi: function () {
		console.log('Привет');
  } 
};*/

/* person.sayHi = function (name) {
	console.log('Привет, ${name}!');
}

person.sayHi('Юрий') */

/* ---------------------Ключевое слово this-------------------------- */

/* const person = {
	userName: 'Марк',
	age: 30,
	sayHi: function (this) {
		console.log('Привет, ${name}! Меня зовут ${this.userName}.');
	}
};

person.sayHi('Юрий') */

/* -------------------Объекты обход цмклом for in (не путать с for of--------------------------- */
// В отличии от for ... of - for ... in может обходить неитерируемые объекты и возвращает ключи
/* const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function (yourName) {
		console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
		},
};

for (let key of person) {
	console.log(key, ':', person[key]);
}

 */

/* ---------------Ньюанс const и изменением объекта и массива------------------ */
/* const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};

person.proff = 'Designer';

//Оштбка! Переопредиление сылки на новый  обьект
person = {
	userName: 'Ник';
} */

/* ----------------Классы. Конструкторы объектов------------------------ */

// Представим ситуацию когда нам надо описать несколько одинаковых объектов

/* const person1 = {
  userName: 'Марк',
  age: 30,
  isMarried: false,
  sayHi: function () {
    console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
  },
};

const person2 = {
  userName: 'Павел',
  age: 28,
  isMarried: true,
  sayHi: function () {
    console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
  },
}; */

// Опишем класс, это как чертеж для всех будущих объектов person которые будут создаваться на его основе

/* class Person {
	constructor(userName, age, isMarried) {
		this.userName = userName;
		this.age = age;
		this.isMarried = isMarried;
	}
	sayHi(name){
console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);}
}

const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);
console.log(person1);
person1.sayHi('Юрий');
console.log(person2);
person2.sayHi('Юрий'); */

/* ----------------Выбор DOM элементов------------- */

// Выбор одного элемента DOM по селектору
// document.querySelector('selector');
//  document.querySelector('h2').classList.add('red')

// Выбор одного элемента DOM по селектору
/* const heading2 = document.querySelector('h2');
heading2.classList.add('red');

document.querySelector('.heading-3').classList.add('green') */

// Выбор колекции элементов
/* const headings = document.querySelectorAll('h2');
console.log(headings);

for (let heading of headings) { 
	heading.classList.add('red-text');
}

const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) { 
	p.classList.add('green-text');
}
 */
/* paragraphs.forEach(function (p)){
	p.classList.add('green-text');
} */

/* -------------------дополнительные элементы----------------------- */
/* document.getElementsByClassName(); // выбор элементов по css классу
document.getElementsByTagName();// выбор колекции элеметнов по тегу
document.getElementsById();// выбор одного элемента по ID */

/* ----------------------робота с css классами----------------- */

/* 
element.classlist.add()
.add
.remove()
.toogle()
.contains()
*/

/* const heading = document.querySelector('h2');
console.log(heading);

heading.classList.add('red-text');
heading.classList.remove('red-text'); */

// heading.classList.toogle('green-text');
// heading.classList.toogle('green');

/* const heading = document.querySelector('h2');
const heading: HTMLHeadingElement
if (heading.classList.contains('green')) {
	
} else {

}
 */
/* ------------------------Атрибуты------------------------------- */

/* 
getAttribute(attrName) - возвращает значение указаного атрибута
setAttribute(name,value) - добавляет указанный атрибут и его значение к элементу
hasAttribute(attrName) - возвращает true при наличии у элемента указаного атрибута
removeAttribute(AttrName) - удаляет указанный атрибут

toogleAttribute(name, force)- добавляет новый атрибут при отсуствии или удаляет существующий атрибут
hasAttributes()- возвращает true, если у элемента имеються какие-либо атрибуты
getAttributesNames() - возвращает название атрибутов элемента
*/

/*const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
console.log(srcValue);

img.setAttribute('src', './img/php.png');
img.setAttribute('width', "200");
img.src= './img/js.png' */

/* const button = document.querySelector('#button');
button.setAttribute('value', 'Отправить');
button.value = "Текст для кнопки" */
/* ====================работа с прослушкой событий===================== */

const img = document.querySelector('#logo');
const button = document.querySelector('#button');
button.values = 'удалить';

/* button.addEventListener('click', function () {
	console.log('Click!');
	img.remove();
}) */
/* 
button.addEventListener('click', function () {
  console.log('Click1!');
});

button.addEventListener('click', function () {
  console.log('Click2!');
});

button.addEventListener('click', function () {
  console.log('Click3!');
}); */

/* button.onclick = function () {
	console.log('click1!');
}
 */

/* ========================== */

/* const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', function () {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
}) */

/* function inputHandler() {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
} */

// ===================Объект event================

/* const list = document.querySelector('#list');

list.addEventListener('click', function (event) {
	console.log(this);
	console.log(event.target);
}) */

/* ------------------------Работа с элементами------------------------------- */

/* 
создать элемент- document.createElement('tag-name')
изменить HTML содержимое внутри элемента - element.innerHTML = ''
изменить Текстовое содержимое внутри элемента- node.innerText = ''
клонирование элемента:
node.cloneNode() // true с внутренним содержимым (тектс и теги)
false - без внутренного содержимого
вставить элемент внутрь другого элемента- element.append(nodesOrDOMStings)
Удалить элемент -element.remove()
*/

/* //Выбор контейнера
const container = document.querySelector('#elementsContainer');

// создание заголовка
const newHeader = document.createElement('h1');
newHeader.innerHTML = 'Новый заголовок';
container.append(newHeader); */

/* //
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode();
container.append(headerCopy); */

/* // Вставка разметки черз строки
const htmlExample = '<h2>Еще один заголовок</h2>'
container.insertAdjacentHTML('beforeend', htmlExample); */

/* // Вставка разметки через  шаблонные строки 
const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</2>`;
container.insertAdjacentElement(htmlExample, 'beforeend');  */

/* ----------------------------ToDo список задач--------------------------------- */

/* const todoList = document.querySelectorAll('#todo-list');
const todoForm = document.querySelectorAll('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
	event.preventDefault();
	// Получаем название задачи из инпута
	const taskText = todoInput.value;
	console.log(taskText);

	// Создаем тег li через разметку
	const li = `<li>{taskText}</li>`;
	console.log(li);

	// создает кнопку удалить 
	const deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('role', 'button');
	deleteBtn.innerText = 'Удалить';
	deleteBtn.style['margin-left'] = '15px';
	newTask.append(deleteBtn);
	console.log(newTask);

	// добавляет событие по клику
	deleteBtn.addEventListener('click', function () {
		this.closest('li').remove();
	});
	// добавляем разметку на страницу
	todoList.insertAdjacentHTML('beforend', li);

	// Создает тег li с помощью создания элемента
	const newTask = document.createElement('li');
	newTask.textContent = taskText;
	todolist.append(newTask);
	// очистка поля для новой записи
	todoInput.value = '';

	// Фокус на поле ввода
	todoInput.focus(); */

/* ------------------------------set interval----------------------- */
/* const timerIntervalID = setInterval(function () {
	console.log('Fired!');
}, 1000);

// clearInterval(timerIntervalID) */

/* ===============setTimeout=================== */

/* const timerID = setTimeout(function () {
	console.log('setTimeout Fired!');
}, 2000);
clearInterval(timerID); */

/* ==============================setInterval+ setTimeout=================================== */
/* setInterval(function () {
	console.log('setInterval Fired!');
}, 1000)

setTimeout(function () {
	clearInterval(timerID);
},10000) */

/* ==============секундомер=========== */
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

/* setInterval(function () {
	// counter= counter + 1;
	//counter +=1;
	counter++;

	console.log(counter);
}, 1000) */

// start

/* const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
	console.log('btnStart');
	timerID = setInterval(function(){
	counter++
	counterElement.innerText = counter;
	}, 1000)
}
	
// pause
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
	console.log(btnStop)
	clearInterval(timerID);
	}

	// reset
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
	counter = 0;
	counterElement.innerText = counter;
	clearInterval(timerID);
}; */

/* ---------------Callback. Callback hell----------- */

/* console.log('Start');

setTimeout(function () {
	console.log('Print after 2s);
}, 2000);

console.log('Finish'); */

/* setTimeout(function () {
	console.log('Step 1');
	setTimeout(function () {
		console.log('Step 2');
		setTimeout(function () {
			console.log('Step 3');
		}, 1000);
	}, 1500);
}, 2000) */

// летим в отпуск
// отпуск отменяется
/* function checkRooms(siccess, failed) {
  setTimeout(function () {
    console.log('Проверям номера в отеле...');
    const avaibleRooms = true;

    function checkTickets(message, success, failed) {
      setTimeout(function () {
        console.log('---- function checkTickets----');
        console.log('Ответ на предыщем шаге:', message);

        console.log('Проверяем авиабилеты...');
        const avaibleTickets = true;

        if (avaibleTickets) {
          letmessage = 'Билеты есть';
          success(message);
        } else {
          let message = 'Увы! Билетов не хватает.';
          failed(message);
        }
      }, 500);
    }

    if (avaibleRooms) {
      let message = 'Номера есть';
      success(message);
    } else {
      let message = 'Номера есть';
      failed(message);
    }
  }, 1000);
}

checkRooms();

checkRooms(
  function (messageFromCheckRooms) {
    checkTickets(messageFromCheckRooms, function (messageFromCheckTickets) {
      submitVacation(message);
    });
  },
  function (messageFromCheckRooms) {
    cancelVacation(messageFromCheckRooms);
  }
); */

/* ==================промиси=============== */

/* const myPromise = new Promise(function (resolve, reject) {
	console.log('Promise created');
	setTimeout(function () {
		// - запрос на сервер
		const response = true
		if (response) {
			let message ="SIUCCESS"
			resolve(message);
		} else {
			let message ="FAILED"
			reject(message);
		}
	},1000)
});

myPromise.then(function (data) {
	console.log('Then');
	console.log(data);
}).catch(function (data) {
	console.log('Catch');
	console.log(data);
}) */

/* ----------------------Асинхроные функции---------------------- */

/* async function startPromise() {
	try {
		const result = await promiseFunction();
		console.log('result');
	}
	catch (err) {
		console.log(err);
	}
}
startPromise() */

/* --------------------------несколько асинхроных функций-------------------- */



// вставляем несколько конструкций последовательно
/* ------------------------------Fetch example курсы валют------------------------------------ */

