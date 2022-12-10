// Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. ВСЕ массивы должны иметь этот метод. Примеры ниже.
// const numbers = [1,2,3]
// const result1 = numbers.myMap((number) => number * 2) // [2,4,6]
// const result2 = numbers.myMap((number) => String(number)) // [‘1’, ‘2’, ‘3’]

const numbers = [1, 2, 3];

Array.prototype.myMap = function (callback, thisArg) {
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
    let newArray = [];
    let i = 0;

    while(i < objLength) {
        if(i in obj) {
            newArray[i] = callback.call(context, this[i], i, obj);
        }
        i++;
    }

    return newArray;
}

console.log(numbers.myMap((number) => number * 2));
console.log(numbers.myMap((number) => String(number)));
console.log(numbers.myMap((number) => `...${number * 2}...`));