const moment = require('moment');
const lodash = require('lodash');

let now = moment();
console.log(now.format('MMMM Do YYYY, h:mm:ss a'));
console.log(now.format('dddd'));
console.log(now.format("MMM Do YY"));
console.log(now.format("MMM Do YY"));

var a = moment("2020-01-01");
console.log(a.isValid());

a = moment("2020-14-01");
console.log(a.isValid());

var nextWeek = now.add(7, 'days')
console.log(nextWeek.format('MMMM Do YYYY'));

now = moment();
var Month7 = now.add(7, 'month')
console.log(Month7.format('MMMM Do YYYY'));

now = moment();
var year7 = now.add(7, 'year')
console.log(year7.format('MMMM Do YYYY'));

var lastWeek = now.subtract(7, 'days')
console.log(lastWeek.format('MMMM Do YYYY'));

now = moment();
var lastMonth7 = now.subtract(7, 'month')
console.log(lastMonth7.format('MMMM Do YYYY'));

now = moment();
var lastyear7 = now.subtract(7, 'year')
console.log(lastyear7.format('MMMM Do YYYY'));

var date1 = moment("2014-11-11", "YYYY/MM/DD");
var date2 = moment("2015-09-11", "YYYY/MM/DD");
console.log(date2.diff(date1, "days") + "days");

date1 = moment("2014-11-27", "YYYY/MM/DD");
date2 = moment("2015-09-16", "YYYY/MM/DD");
console.log(date2.diff(date1, "days") + "days");

var then = moment("2018-01-01", "YYYY/MM/DD")
var nnow = moment("2020-01-01", "YYYY/MM/DD")
console.log(nnow.isAfter(then));

then = moment("2018-01-01", "YYYY/MM/DD")
nnow = moment("2010-01-01", "YYYY/MM/DD")
console.log(nnow.isAfter(then));

console.log(moment("2019", "YYYY").isLeapYear());
console.log(moment("2020", "YYYY").isLeapYear());

let arr = [0, 1, false, 2, '', 3];
console.log(lodash.compact(arr));

arr = [1,2,5,6,3,4,8,5,5,6,5,7,4,98,6,2,4,798,5,54,8,9,585]
console.log(lodash.chunk(arr, 4));

arr = [1,2,5,6,3,4,8,5,5,6,5,7,4,98,6,2,4,798,5,54,8,9,585]
console.log(lodash.drop(arr, 10));

arr = [1,2,5,6,3,4,8,52,4,798,5,54,8,9,,585]
console.log(lodash.fill(arr, 4, 2, 6));

arr = [1,2,[5],6,3,[4,8,[5,5,6,[5,7],4,98],6,2,4],798,5,54,8,9,585]
console.log(lodash.flatten(arr));

console.log(lodash.findLast(arr, function(n) {
    return n % 2 == 1;
  }));


arr = [1,2,5,6,3,4,8,52,4,798,5,54,8,9,585];
function duplicate(n) {
    return [n, n];
}
console.log(lodash.flatMap(arr, duplicate));

console.log(lodash.includes({ 'a': 1, 'b': 2 }, 1));

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
console.log(lodash.orderBy(users, ['user', 'age'], ['asc', 'desc']))

console.log(lodash.sampleSize(arr, 20));