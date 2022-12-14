/*
Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. 
Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы поприветствовать его немного иначе.
Помогите ей)
Пример вызовов:
sayHello("Oleg"); // Hello, Oleg!
sayHello("Viktor"); // Hello, Viktor!
sayHello("Mark"); // Hi, Mark!
*/

const sayHello = (name) => {
    const result = name.toLowerCase();
    const specialName = 'mark';
    const greeting = result === specialName ? 'Hi' : 'Hello';

    return `${greeting}, ${name}!`;
}

console.log(sayHello('Oleg'));
console.log(sayHello('Viktor'));
console.log(sayHello('Mark'));