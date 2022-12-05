// Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие.
// Чем-то очень похоже на функцию которую мы писали для одного слова.

// Пример: fn([‘hello’, ‘wOrLd’]) // [‘Hello’, ‘World’];

const changingWords = (words) => {
    return words.map((word) => {
        const wordLowerCase = word.toLowerCase();
        const firstCapitalLetter = word[0].toUpperCase();

        return `${firstCapitalLetter}${wordLowerCase.slice(1)}`;
    })
}

console.log(changingWords(['hello', 'wOrLd']));