// Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз. 


const numbers = [1,1,1,2,2,3,4,4];

const maxCountNumber = (numbers) => {
    const numbersObj = numbers.reduce((result, item) => {
        if(!result[item]) {
            result[item] = 0;
        }
        result[item] += 1;
        return result;
    }, {});
    
    const entries = Object.entries(numbersObj);
    entries.sort(([prevKey, prevValue], [nextKey, nextValue]) => nextValue - prevValue);

    return entries[0][0];
}
console.log(maxCountNumber(numbers));
console.log(maxCountNumber([1, 1, 2, 3]));
console.log(maxCountNumber([1, 2, 3, 4, 2]));