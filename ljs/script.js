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

/* _______________________________ */
