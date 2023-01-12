// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.Ex:
// chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]

const chunk = (array, separator) => {
    const result = [];
    let endElement = null;

    if(array.length % separator === 1) {
        endElement = array.splice(array.length - 1, 1);
    }
    if (array.length % separator === 0) {
        while(array.length != 0) {
            result.push(array.splice(0, separator));
        }
    }

    if (endElement === null) {
        return result;
    } else {
        result.push(endElement);
        return result;
    }
}

console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk(['a', 'b', 'c', 'd'], 2));