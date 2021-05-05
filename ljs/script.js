// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function () {
//   return {
//     curr: this.from,
//     last: this.to,

//     next() {
//       if (this.curr <= this.last) {
//         return {
//           done: false,
//           value: this.curr++,
//         };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// /* -------------  Array.from */
// let arr = Array.from(range);
// console.log(arr);

// for (let num of range) {
//   console.log(num);
// }

/* let str = "Fella";
let iterator = str[Symbol.iterator]();
console.log(iterator);

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
} */

// let user = {
//   name: "Fella",
//   money: 999,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// alert(user);
// console.log(+user);
// console.log(user + 1);

// const user = {
//   name: "Fella",
//   money: 999,
// };

// const saveVisit = new Map();
// saveVisit.set(user, 99).set(NaN, 100);
// console.log(saveVisit);
// console.log(saveVisit.get(NaN));

// /* Object to Map */
// const mapUser = new Map(Object.entries(user));
// console.log(mapUser);

// /* Map to Object */
// const objUser = Object.fromEntries(mapUser);
// console.log(objUser);
// const objSmth = Object.fromEntries([
//   ["apple", 2],
//   ["banana", 3],
// ]);
// console.log(objSmth);

// const setItems = new Set(["chair", "mirror", "flower", "mirror", "flower"]);
// console.log(setItems.entries());
// console.log(Array.from(setItems));

/* let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aClean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aClean(arr)); */

// const price = {
//   milk: 100,
//   water: 50,
//   salt: 70,
// };

// const newPrice = Object.fromEntries(
//   Object.entries(price).map(([key, value]) => [key, value * 1.1])
// );

// console.log(newPrice);

/* let salaries = {
  Mia: 100,
  Vincent: 200,
  Jules: 250,
};

let salaries2 = {};

function sumSalaries(zp) {
  let sum = 0;
  for (let q of Object.values(zp)) {
    sum += q;
  }
  return sum;
}

console.log(sumSalaries(salaries));
console.log(sumSalaries(salaries2)); */

// console.log("Fella in the wagon".split(" "));

// const theBigDay = new Date();
// theBigDay.setFullYear(2020);
// theBigDay.setMonth(10);
// theBigDay.setDate(10);
// console.log(theBigDay);

// const theDate = new Date();
// console.log(+theDate);

/* const start = Date.now();

for (let i = 0; i < 100000; i++) {
  let smth = Math.sqrt(i ** i);
}
const finish = Date.now();

console.log(`
${start},
${finish},
Cycle: ${finish - start} mls`); */

// let date = new Date(2010, 0, 15);
// console.log(date.getDate());
// function getDateAgo(date, days) {
//   let dayCopy = new Date(date);
//   dayCopy.setDate(date.getDate() - days);
//   return dayCopy.getDate();
// }
// console.log(getDateAgo(date, 14));

/* function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  console.log(date);

  return date.getDate();
}
console.log(getLastDayOfMonth(1990, 10)); */

// function getSecToday() {
//   const date = new Date();
//   console.log(date);
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }

// console.log(`Seconds today: ${getSecToday()}`);

/* function getSecToTomorrow() {
  const date = new Date();
  console.log(date);
  return (
    86400 -
    (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
  );
}

console.log(`Seconds tomorrow: ${getSecToTomorrow()}`); */

// console.log(new Date(new Date() - 10 * 60 * 1000));

// function formatDate(date) {
//   let diff = new Date() - date;
//   if (diff < 1000) {
//     return "right now!";
//   }

//   let sec = Math.floor(diff / 1000);
//   if (sec < 60) {
//     return sec + " seconds ago";
//   }

//   let min = Math.floor(diff / 60000);
//   if (min < 60) {
//     return min + " minutes ago";
//   }

//   let d = date;
//   d = [
//     "0" + d.getDate(),
//     "0" + (d.getMonth() + 1),
//     "" + d.getFullYear(),
//     "0" + d.getHours(),
//     "0" + d.getMinutes(),
//   ].map((item) => item.slice(-2));

//   return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
// }

// console.log(formatDate(new Date(new Date() - 70 * 60 * 1000)));

/* let g = `{
    "meetap": {"title": "Conf", "date": "2017-04-23T12:00:00.000Z"}
}`;

g = JSON.parse(g, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(g); */

/* _______________________________________ */
/* class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }

  push(data) {
    this.last = new Node(data, this.last);
  }

  pop() {
    let result;
    if (this.last !== null) {
      result = this.last.data;
      this.last = this.last.prev;
    }
    return result;
  }
}

const stack = new Stack();
console.log(stack);

stack.push(100);
stack.push(95);
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop()); */

/* ____________________________ */
// let obj, met;

// obj = {
//   go() {
//     console.log(this);
//   },
// };

// obj.go();
// obj.go();
// (met = obj.go)();
// (obj.go || obj.stop)();

/* ______________________________ */

// function makeU() {
//   return {
//     name: "Mia",
//     ref: this,
//   };
// }

// const user = makeU();
// console.log(user.ref.name);

// function makeU2() {
//   return {
//     name: "Mia",
//     ref() {
//       return this;
//     },
//   };
// }

// const user2 = makeU2();
// console.log(user2.ref().name);

/* ______________________________ */

// const calculator = {
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

/* _______________________________ */

// function sumTo(n) {
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumTo(100));

// function sumTo(n) {
//   // let sum = n;
//   // if (n === 0) {
//   //   return sum;
//   // } else {
//   //   sum += sumTo(n - 1);
//   // }
//   // return sum;

//   if (n === 0) return 0;
//   return n + sumTo(n - 1);
// }
// console.log(sumTo(100));

// function sumTo(n) {
//   return (n * n + n) / 2;
// }
// console.log(sumTo(100));

/* _______________________________ */

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(77));

/* _______________________________ */

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function PrintListRevers(list) {
//   console.log(list.next);
//   if (list.next) {
//     PrintListRevers(list.next);
//   }
//   console.log(list.value);
// }

// PrintListRevers(list);

/* _______________________________ */

// function args({ a = 3, s = 5, d = 7 } = {}) {
//   console.log(a, s, d);
//   console.log(arguments);
// }

// args();

/* _______________________________ */

// let counter = 10;

// function outer() {
//   let counter = 0;

//   return function inner() {
//     console.log(counter++);
//   };
// }

// const use = outer();

// use();
// use();
// use();

/* _______________________________ */

// function outer() {
//   let name = "Jules";

//   return function () {
//     console.log(name);
//   };
// }

// let name = "Mia";

// const use = outer();

// use();

/* _______________________________ */

// function outer(n) {
//   let sum = n;
//   console.log(sum);

//   function inner(m) {
//     sum += m;
//     console.log(sum);
//     return inner;
//   }

//   return inner;
// }

// outer(50);
// outer(50)(100)(200)(500);

/* _______________________________ */

// function outer(n) {
//   n = parseInt(n) || 0;
//   console.log(n);
//   return (m) => outer(m + n);
// }

// outer(50);
// outer(50)(100)(200)(500);
// outer();
// outer([]);

/* _______________________________ */

// function sum(x) {
//   let f = (y) => sum(x + y);
//   f.valueOf = () => x;
//   return f;
// }

// console.log(sum(50)(100)(200)(500) + sum(50)(100));

/* _______________________________ */

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// const arr = [3, 6, 7, 4, 3, 5, 7, 2, 8];
// console.log(arr.filter(inBetween(5, 10)));

/* _______________________________ */

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// const arr = [3, 6, 7, 4, 3, 5, 7, 2, 8];
// console.log(arr.filter(inArray([5, 7])));

/* _______________________________ */

// function counterBig() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;

//   return counter;
// }

// const counterFunc = counterBig();

// console.log(counterFunc());
// console.log(counterFunc());
// counterFunc.count = 100;
// console.log(counterFunc());
// console.log(counterFunc());

/* _______________________________ */

// function sum(a) {
//   let curr = a;
//   function f(b) {
//     curr += b;
//     return f;
//   }

//   f.toString = function () {
//     return curr;
//   };

//   return f;
// }

// console.log(sum(1)(2));

/* ___________FizzBuzz___________ */
// const gen = function (n, word) {
//   return function (i) {
//     return i % n === 0 ? word : "";
//   };
// };

/*  or  */

// const gen = (n, word) => (i) => (i % n === 0 ? word : "");

// const fizz = gen(3, "Fizz");
// const buzz = gen(5, "Buzz");

// [...Array(99).keys()]
//   .map((i) => i + 1)
//   .forEach((i) => console.log(fizz(i) + buzz(i) || i));

/* _______________________________ */

// function printNumbers(from, to) {
//   let curr = from;

//   setTimeout(function go() {
//     console.log(curr);

//     if (curr < to) {
//       setTimeout(go, 1000);
//     }
//     curr++;
//   }, 1000);
// }

// printNumbers(2, 8);

/* _______________________________ */

// function printNumbers(from, to) {
//   let curr = from;

//   const interval = setInterval(function go() {
//     console.log(curr);

//     if (curr === to) {
//       clearInterval(interval);
//     }
//     curr++;
//   }, 1000);
// }

// printNumbers(2, 8);

/* _______________________________ */

// function sayHi(word) {
//   console.log(`${this.name} ${word || ""}`);
// }

// let user = { name: "Fella" };
// let admin = { name: "Mia" };

// sayHi.call(user);
// sayHi.call(admin);
// sayHi.call(admin, "Boom");

/* ________call apply decorators_______________________ */

// const worker = {
//   smthDo() {
//     return 5;
//   },

//   salaryCalc(x) {
//     return x * this.smthDo();
//   },
// };

// function wrapper(func) {
//   let budget = new Map();

//   return function (x) {
//     if (budget.has(x)) {
//       return budget.get(x);
//     }

//     let result = func.call(this, x);
//     budget.set(x, result);
//     return result;
//   };
// }

// worker.salaryCalc = wrapper(worker.salaryCalc);

// console.log(worker.salaryCalc(100));
// console.log(worker.salaryCalc(200));

/* _______________________________ */

// const worker = {
//   salaryCalc(min, max) {
//     return min / max;
//   },
// };

// function wrapper(func, hashKey) {
//   let budget = new Map();

//   return function () {
//     let key = hashKey(arguments);
//     if (budget.has(key)) {
//       return budget.get(key);
//     }

//     let result = func.apply(this, arguments);
//     budget.set(key, result);
//     console.log(budget);
//     return result;
//   };
// }

// function hashKey() {
//   return [].join.call(...arguments);
// }

// worker.salaryCalc = wrapper(worker.salaryCalc, hashKey);

// console.log(worker.salaryCalc(100, 200));
// console.log(worker.salaryCalc(200, 250));

/* _______________________________ */

// function work(a, b) {
//   return a + b;
// }

// function spy(func) {
//   function inner(...args) {
//     inner.calls.push(args);
//     return func(...args);
//   }

//   inner.calls = [];
//   return inner;
// }

// work = spy(work);

// console.log(work(3, 5));
// console.log(work(5, 5));
// console.log(work(5, 10));

// for (let arg of work.calls) {
//   console.log(arg.join());
// }

/* _______________________________ */

// function f(...args) {
//   console.log(args[0] + args[1]);
// }

// function delay(func, ms) {
//   return function () {
//     setTimeout(() => {
//       func.apply(this, arguments);
//     }, ms);
//   };
// }

// let f1000 = delay(f, 1000);
// console.log(f1000);

// f1000(3, 5);

/* _______________________________ */

// function debounce(func, ms) {
//   let state = false;

//   return function inner() {
//     if (state) return;
//     func.apply(this, arguments);

//     state = true;

//     setTimeout(() => (state = false), ms);
//   };
// }

// let f = debounce(console.log, 1000);

// f(1);
// f(2);

// setTimeout(() => f(2.5), 990);
// setTimeout(() => f(3), 1200);

/* _______________________________ */

// function f(a) {
//   console.log(a);
// }

// function trottle(func, ms) {
//   let state = false,
//     savedArgs,
//     savedThis;

//   function inner() {
//     if (state) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments);
//     state = true;

//     setTimeout(function () {
//       state = false;
//       if (savedArgs) {
//         inner.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return inner;
// }

// let f1000 = trottle(f, 1000);

// f1000(1);
// f1000(2);
// f1000("last");

/* _______________________________ */

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// const item = new Food("cheese", 15);

// console.log(item);

/* _______________________________ */

// const animals = [
//   { spec: "Lion", name: "King" },
//   { spec: "Whale", name: "Fail" },
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function (i) {
//     this.print = function () {
//       console.log(`# ${i} ${this.spec}: ${this.name}`);
//     };
//     this.print();
//   }.call(animals[i], i));
// }

/* _______________________________ */

// const personMethod = {
//   hello() {
//     console.log("hello", this);
//   },
// };

// const person = {
//   name: "Olex",
//   city: "Poznan",
//   origin: "Herson",
//   sayHello() {
//     personMethod.hello.call(this);
//   },
// };

// person.sayHello();

/* _______________________________ */

// function sayHi(x) {
//   console.log(x);
// }

// function defer(f, ms) {
//   return function () {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// const boom = defer(sayHi, 1000);
// boom("hi");

/* _______________________________ */

// const user = {
//   name: "fella",
//   car: false,
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);

// Object.defineProperty(user, "car", { writable: false });
// user.car = true;

/* _______________________________ */

// const student = {
//   name: "fella",
//   age: 30,
//   car: false,
// };

// let clone = Object.defineProperties(
//   {},
//   Object.getOwnPropertyDescriptors(student)
// );

// console.log(clone);

// clone.name = "Fellainthewagon";

// console.log(clone);
// console.log(student);

/* _______________________________ */

// let user = {
//   name: "Mia",
//   surname: "Walles",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.log(user);
// console.log(user.fullName);
// user.fullName = "Vincent Vega";

/* _______________________________ */

// const user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 5) {
//       console.log("Слишком короткое имя!");
//       return;
//     }

//     this._name = value;
//   },
// };

// user.name = "Mia";
// user.name = "Vincent";
// console.log(user);

/* _______________________________ */

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     },
//   });
// }

// let john = new User("John", new Date(1992, 6, 1));
// console.log(john.birthday);
// console.log(john.age);
// console.log(john);

/* _______________________________ */

// const user = {
//   get firstName() {
//     return this._name;
//   },

//   set firstName(value) {
//     this._name = value;
//   },
// };

// user.firstName = "Mia";

// console.log(user);

/* ___________proto__________________ */

// const animal = {
//   eats: true,
//   walk() {
//     console.log("top-top");
//   },
// };

// const dog = {
//   __proto__: animal,
// };

// dog.walk();

// dog.walk = function () {
//   console.log("dog-top");
// };

// dog.walk();

/* _______________________________ */

// const animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log("I walk");
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// const cat = {
//   name: "Kimbo",
//   __proto__: animal,
// };

// cat.sleep();
// console.log(cat);
// for (let prop in cat) console.log(prop);

// for (let prop in cat) {
//   if (cat.hasOwnProperty(prop)) {
//     console.log(`My propery ${prop}`);
//   }
//   console.log(`Inherited property ${prop}`);
// }

/* _______________________________ */

// function Rabbit(name) {
//   this.name = name;
// }

// const rabbit = new Rabbit("Rodger");
// console.log(rabbit);
// const rabbit2 = new rabbit.constructor("Magic");
// console.log(rabbit2);

/* _______________________________ */

/* function Cat() {}
Cat.prototype = {
  eats: true,
};

let cat = new Cat();
console.log(cat);

// Cat.prototype = {};
// console.log(cat.eats);

// Cat.prototype.eats = false;
// console.log(cat.eats);

// delete cat.eats;
// console.log(cat.eats);

delete Cat.prototype.eats;
console.log(cat.eats); */

/* _______________________________ */

// const obj = new Object();
// console.log(obj);
// console.log(obj.__proto__ === Object.prototype);

/* _______________________________ */

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log("Hey, buddy!");
// }

// f.defer(1000);

/* _______________________________ */

/* apply*/

// Function.prototype.defer = function (ms) {
//   let func = this;

//   return function (...arg) {
//     // setTimeout(() => func.apply(this, arguments), ms);
//     setTimeout(() => func(...arg), ms);
//   };
// };

/* bind*/

// Function.prototype.defer = function (ms) {
//   return function () {
//     setTimeout(() => this(...arguments), ms);
//   }.bind(this);
// };

// function f(a, b, c) {
//   console.log(a + b + c);
// }

// f.defer(1000)(1, 2, 5);

/* _______________________________ */

// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal);

// console.log(rabbit.eats);

// console.log(Object.getPrototypeOf(rabbit) === animal);

// Object.setPrototypeOf(rabbit, {});

// console.log(rabbit.eats);

// let cat = Object.create(animal, {
//   speak: {
//     value: "Mew",
//   },
// });

// console.log(cat.eats, cat.speak);

/* _______________________________ */

// const human = {
//   legs: 2,
//   head: true,
// };

// const woman = Object.create(
//   Object.getPrototypeOf(human),
//   Object.getOwnPropertyDescriptors(human)
// );

// console.log(woman.legs);

/* _______________________________ */

// let obj = Object.create(null);
// let key = "__proto__";

// obj[key] = "boom";
// console.log(obj[key]);

// console.log(Object.getOwnPropertyNames(obj));

/* _______________________________ */

// const dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join();
//     },
//   },
// });

// dictionary.apple = "apple";
// dictionary.__proto__ = "protein";

// for (let key in dictionary) {
//   console.log(key);
// }

/* _______________________________ */

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.sayUf = function () {
//   console.log("Uff-Uff");
// };

// const dog = new Dog("Zhopkins");

// dog.sayUf();

// console.log(dog);
// console.log(Object.getPrototypeOf(dog));

/* _______________________________ */

const parent = {
  name: "Mia",
  children: {
    son: "Vincent",
    doughter: "Elis",
  },
};

let clone = Object.create(
  Object.getPrototypeOf(parent),
  Object.getOwnPropertyDescriptors(parent)
);

console.log(clone);
