// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата. 
// const userList = ['Alex', 'alex', 'Max', 'Vika', 'Petr', 'Alexander'];
// fn(userList, ['a', 'p']) // ['Max', 'Vika']

const userList = ['Alex', 'alex', 'Max', 'Vika', 'Petr', 'Alexander'];

//1
const cutNameMatch1 = (users, cutLetters) => {
    const result = [];
    const lowerCasedBlacklistedLetters = [];

    for(let i = 0; i < cutLetters.length; i++) {
        lowerCasedBlacklistedLetters.push(cutLetters[i].toLowerCase());
    }

    for(let i = 0; i < users.length; i++) {
        const firstLetterUser = users[i][0].toLowerCase();
        if(!lowerCasedBlacklistedLetters.includes(firstLetterUser)) {
            result.push(users[i]);
        }
    }
    return result;
}
console.log(cutNameMatch1(userList, ['a', 'p']));

//2
const cutNameMatch2 = (users, cutLetters) => {
    const result = [];
    const lowerCasedBlacklistedLetters = [];
    let i = 0;
    let j = 0;

    while(i < cutLetters.length) {
        lowerCasedBlacklistedLetters.push(cutLetters[i].toLowerCase());
        i++;
    }

    while(j < users.length) {
        const firstLetterUser = users[j][0].toLowerCase();
        if(!lowerCasedBlacklistedLetters.includes(firstLetterUser)) {
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
    const lowerCasedBlacklistedLetters = [];

    for(const letter of cutLetters) {
        lowerCasedBlacklistedLetters.push(letter.toLowerCase());
    }

    for(const user of users) {
        const firstLetterUser = user.slice(0, 1).toLowerCase();
        if(!lowerCasedBlacklistedLetters.includes(firstLetterUser)) {
            result.push(user);
        }
    }
    return result;
}
console.log(cutNameMatch3(userList, ['a', 'p']));

//4
const cutNameMatch4 = (users, cutLetters) => {
    const lowerCasedBlacklistedLetters = cutLetters.map(letter => letter.toLowerCase());

    return users.filter(user => {
        const firstLetterUser = user[0].toLowerCase();
        return !lowerCasedBlacklistedLetters.includes(firstLetterUser);
    })
}
console.log(cutNameMatch4(userList, ['a', 'p']));