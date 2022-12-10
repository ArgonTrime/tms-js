// Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая. 
// ВСЕ массивы должны иметь этот метод. Примеры ниже.

// const result1 = numbers.myMap((number) => number > 2) // [3]
// const result2 = numbers.myMap((number) => number % 2 === 0) // [2]

const numbers = [1, 2, 3];

Array.prototype.myFilter = function (callback, thisArg) {
    if(this == null) {
        throw new Error('Cant iterate over undefined of null');
    }

    let context = this;
    let obj = Object(this);

    if(arguments.length > 1) {
        context = thisArg;
    }
    if(typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }

    let objLength = obj.length;
    let result = [];
    let i = 0;

    while(i < objLength) {
        if(i in obj) {
            let current = this[i];
            if(callback.call(context, current, i, obj)) {
                result.push(current);
            }
        }
        i++;
    }

    return result;
}

console.log(numbers.myFilter((number) => number > 2));
console.log(numbers.myFilter((number) => number % 2 === 0));