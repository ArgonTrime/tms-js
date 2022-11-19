/*
Написать функцию которая принимает в себя строчное значение состоящее из одного слова. 
В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна 
быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
Если в слове четное количество букв, то и последняя буква должна быть заглавной.
Пример:

someFn(‘пиТеР’) // Питер
someFn(‘javaScript’) // JavascripT
*/

const someFn = (someString) => {
    const result = someString.toLowerCase();
    const firstLetter = result[0].toUpperCase();
    const lastLetter = result[result.length - 1].toUpperCase();
    if (result.length % 2 === 0) {
        return `${firstLetter}${result.slice(1, result.length - 1)}${lastLetter}`
    }
    return `${firstLetter}${result.slice(1)}`
}

console.log(someFn('пиТеР'));
console.log(someFn('javaScript'));