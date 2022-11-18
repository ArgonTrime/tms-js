/*
Ваша цель - создать функцию deleteChars (str), которая удаляет первый и последний символы строки, 
которая передается в параметр, и возвращает новую строку без этих символов
deleteChars("Hello"): // ell
deleteChars("A"); // пустая строка
*/

const deleteChars = (someString) => someString.length > 2 ? someString.slice(1, someString.length - 1) : '';

console.log(deleteChars('Hello'));
console.log(deleteChars('A'));