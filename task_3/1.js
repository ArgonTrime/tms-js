// Функция принимает массив чисел, возвращает новый массив, в котором все чётные числа получили + 1, а нечётные -1. Использовать метод map
// Пример: fn([1,2,3]) // [0, 3, 2]. 

const changingNumbers = (numbers) => {
    if(!Array.isArray(numbers)) return;

    return numbers.map((number) => number % 2 === 0 ? ++number : --number);
}

console.log(changingNumbers([1, 2, 3]));