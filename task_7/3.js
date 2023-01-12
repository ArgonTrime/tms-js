// ⦁	Написать метод которые повторяет логику Object.entries(). 
// EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]]
// ⦁	Написать метод которые повторяет логику Object.fromEntries(). 
// EX: customFromEntries([[‘a’, 1], [‘b’, 2]]) // { a: 1, b:2 }

const customEntries = (obj) => {
    const result = [];

    for(const key in obj) {
        result.push(['' + key, obj[key]]);
    }

    return result;
}

const customFromEntries = (arrayEntries) => {
    return arrayEntries.reduce((result, [key, value]) => {
        result[key] = value;
        return result;
    }, {})
}

console.log(customEntries({a: 1, b:2}));
console.log(customFromEntries([['a', 1], ['b', 2]]));