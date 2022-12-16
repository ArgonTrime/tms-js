// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
// You are provided with consecutive elements of an Arithmetic Progression. 
// There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
// The rest of the given series is the same as the original AP. Find the missing term.
// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
// findMissing([1, 3, 5, 9, 11]) // 7

const findMissing = (numbers) => {
    if(numbers.length < 3) return;

    let differenceBetweenNumbers = null;
    const differenceStartValue = numbers[1] - numbers[0];
    const differenceEndValue = numbers[numbers.length - 1] - numbers[numbers.length - 2];

    if(differenceStartValue === differenceEndValue) {
        differenceBetweenNumbers = differenceStartValue;
    }
    if(differenceStartValue !== numbers[0] + numbers[1]) {
        differenceBetweenNumbers = differenceEndValue;
    }

    let i = 1;
    while(i < numbers.length - 1) {
        const previousValue = numbers[i - 1];
        const iterationValue = numbers[i];
        if(previousValue + differenceBetweenNumbers !== iterationValue) return previousValue + differenceBetweenNumbers;
        i++;
    }
    return `Missing progression number not found.`;
}

console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([5, 7, 9, 13, 15, 17]));
console.log(findMissing([1, 6, 11, 16, 21, 26]));
console.log(findMissing([2, 8, 11]));