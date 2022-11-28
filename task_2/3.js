// Функция принимает массив чисел. Возвращает массив строк такого вида:
// fn([3,4,6]); // ['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36']

//1
const squaredNumbers1 = (numbers) => {
    const result = [];

    for(let i = 0; i < numbers.length; i++) {
        const item = numbers[i];
        result.push(`Value: ${item}; Index: ${i}; Squares: ${item ** 2}`);
    }

    return result;
}
console.log(squaredNumbers1([3, 4, 6, 0]));

//2
const squaredNumbers2 = (numbers) => {
    const result = [];
    let i = 0;

    while(i < numbers.length) {
        const item = numbers[i];
        result.push(`Value: ${item}; Index: ${i}; Squares: ${item ** 2}`);
        i++;
    }

    return result;
}
console.log(squaredNumbers2([3, 4, 6]));

//3
const squaredNumbers3 = (numbers) => {
    const result = [];

    for(const number of numbers) {
        result.push(`Value: ${number}; Index: ${numbers.findIndex(index => index === number)}; Squares: ${number ** 2}`)
    }

    return result;
}
console.log(squaredNumbers3([3, 4, 6]));

//4
const squaredNumbers4 = (numbers) => {
    return numbers.map((number, index) => `Value: ${number}; Index: ${index}; Squares: ${number ** 2}`);
}
console.log(squaredNumbers4([3, 4, 6]));