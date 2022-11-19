/*
Напишите функцию isEven(n), которая принимает один параметр, число, и
возвращает четное ли оно.
То есть функция может возвращать два значения: четное или нечетное.
isEven(4); // true
isEven(5); // false
*/

const isEven = (number) => number % 2 === 0;

console.log(isEven(4));
console.log(isEven(5));