// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата. 
// const userList = ['Alex', 'alex', 'Max', 'Vika', 'Petr', 'Alexander'];
// fn(userList, ['a', 'p']) // ['Max', 'Vika']

const userList = ['Alex', 'alex', 'Max', 'Vika', 'Petr', 'Alexander'];

//1
const cutNameMatch1 = (users, cutLetters) => {
    const result = [];
    const cutLettersLowerCase = [];

    for(let i = 0; i < cutLetters.length; i++) {
        cutLettersLowerCase.push(cutLetters[i].toLowerCase());
    }

    for(let i = 0; i < users.length; i++) {
        const firstLetterUser = users[i].slice(0, 1).toLowerCase();
        if(!cutLettersLowerCase.includes(firstLetterUser)) {
            result.push(users[i]);
        }
    }
    return result;
}
console.log(cutNameMatch1(userList, ['a', 'p']));

//2
const cutNameMatch2 = (users, cutLetters) => {
    const result = [];
    const cutLettersLowerCase = [];
    let i = 0;
    let j = 0;

    while(i < cutLetters.length) {
        cutLettersLowerCase.push(cutLetters[i].toLowerCase());
        i++;
    }

    while(j < users.length) {
        const firstLetterUser = users[j].slice(0, 1).toLowerCase();
        if(!cutLettersLowerCase.includes(firstLetterUser)) {
            result.push(users[j]);
        }
        j++;
    }
    return result;
}
console.log(cutNameMatch2(userList, ['a', 'p']));

//3
const cutNameMatch3 = (users, cutLetters) => {
    const result = [];
    const cutLettersLowerCase = [];

    for(const letter of cutLetters) {
        cutLettersLowerCase.push(letter.toLowerCase());
    }

    for(const user of users) {
        const firstLetterUser = user.slice(0, 1).toLowerCase();
        if(!cutLettersLowerCase.includes(firstLetterUser)) {
            result.push(user);
        }
    }
    return result;
}
console.log(cutNameMatch3(userList, ['a', 'p']));

//4
const cutNameMatch4 = (users, cutLetters) => {
    
    return users.filter(user => {
        const firstLetterUser = user[0].toLowerCase();
        const letterLowerCase = cutLetters.map(letter => letter.toLowerCase());

        return !letterLowerCase.includes(firstLetterUser);
    })
}
console.log(cutNameMatch4(userList, ['a', 'p']));