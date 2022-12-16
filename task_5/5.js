const searchFactorialCycle = (number) => {
    if(number < 1) return;
    let i = 1;
    let result = 1

    while(i < number) {
        result *= i + 1;
        i++;
    }
    return result;
    
}

const searchFactorialRecursion = (number) => {
    if(number === 0){
        return 1;
    } else {
        return number * searchFactorialRecursion(--number);
    }
}

console.log(`Cycle: ${searchFactorialCycle(5)}, Recursion: ${searchFactorialRecursion(5)}.`);