// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving 
// the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortOddNumbersUp = (numbers) => {
    let isSwapNumbers = true;

    while(isSwapNumbers) {
        isSwapNumbers = false;

        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] % 2 === 0) continue;
            if(numbers[i] % 2 !== 0) {
                const currentNumber = numbers[i];

                for(let j = i + 1; j < numbers.length; j++) {
                    if(numbers[j] % 2 === 0) continue;
                    if(numbers[j] % 2 !== 0 && numbers[j] < numbers[i]) {
                        const nextNumber = numbers[j];
                        numbers[i] = nextNumber;
                        numbers[j] = currentNumber;
                        isSwapNumbers = true;
                        break;
                    }
                }
            }
        }
    }
    return numbers;
}

console.log(sortOddNumbersUp([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortOddNumbersUp([5, 8, 6, 3, 4]));
console.log(sortOddNumbersUp([7, 1]));