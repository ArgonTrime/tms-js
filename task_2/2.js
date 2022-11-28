// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив 
// где буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем
// fn(['a', 'B', 'c']) // ['A', 'b', 'C']

//1
const changingCaseLetters1 = (letters) => {
    const result = [];

    for(let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const isLetterBig = letter === letter.toUpperCase();
        isLetterBig ? result.push(letter.toLowerCase()) : result.push(letter.toUpperCase());
    }
    return result;
}
console.log(changingCaseLetters1(['a', 'B', 'c']));

//2
const changingCaseLetters2 = (letters) => {
    const result = [];
    let i = 0;

    while(i < letters.length) {
        const letter = letters[i];
        const isLetterBig = letter === letter.toUpperCase();
        isLetterBig ? result.push(letter.toLowerCase()) : result.push(letter.toUpperCase());
        i++;
    }
    return result;
}
console.log(changingCaseLetters2(['a', 'B', 'c']));

//3
const changingCaseLetters3 = (letters) => {
    const result = [];

    for(const letter of letters) {
        const isLetterBig = letter === letter.toUpperCase();
        isLetterBig ? result.push(letter.toLowerCase()) : result.push(letter.toUpperCase());
    }
    return result;
}
console.log(changingCaseLetters3(['a', 'B', 'c']));

//4
const changingCaseLetters4 = (letters) => {
    return letters.map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase());
}
console.log(changingCaseLetters4(['a', 'B', 'c']));