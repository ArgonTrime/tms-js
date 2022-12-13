// Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое количество символов,
// функция должна обрезать строку а в конец  добавить многоточие
// fn(‘Hello’, 3) // ‘Hel…’ 

const trimNumberChar = (anyString, trimNumberCount) => {
    if(anyString.length <= trimNumberCount) {
        return anyString;
    }

    return `${anyString.slice(0, trimNumberCount)}...`
}

console.log(trimNumberChar('Hello', 3));
console.log(trimNumberChar('Hello World!', 7));