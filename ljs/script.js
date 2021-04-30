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
