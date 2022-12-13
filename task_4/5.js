// Функция принимает массив чисел, а возвращает чсло которое встречается лишь 1 раз. 
// fn([1,2,2,3,4,3,4]) // 1
// fn([1,1,2,3,3,4,4]) // 2

const searchUniqueValue = (anyArrayNumbers) => {
    const [uniqueValue] = anyArrayNumbers.filter((item) => anyArrayNumbers.indexOf(item) === anyArrayNumbers.lastIndexOf(item)); 
    return uniqueValue;
}

console.log(searchUniqueValue([1,2,2,3,4,3,4]));
console.log(searchUniqueValue([1,1,2,3,3,4,4]));