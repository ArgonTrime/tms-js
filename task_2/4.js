// Функция принимает, массив строчных и числовых значений. 
// Функция должна вернуть новый массив состоящий только из строк, количество символов которых чётное.
// fn(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]); // ['Hi', 'JS']

//1
const returningStrings1 = (anyArray) => {
    const result = [];

    for(let i = 0; i < anyArray.length; i++){
        if(typeof anyArray[i] === 'string') {
            result.push(anyArray[i]);
        }
    }

    if(result.length % 2 === 1) {
        return result.slice(0, result.length - 1);
    }
    return result;
}
console.log(returningStrings1(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//2
const returningStrings2 = (anyArray) => {
    const result = [];
    let i = 0;

    while(i < anyArray.length){
        if(typeof anyArray[i] === 'string') {
            result.push(anyArray[i]);
        }
        i++;
    }

    if(result.length % 2 === 1) {
        return result.slice(0, result.length - 1);
    }
    return result;
}
console.log(returningStrings2(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//3
const returningStrings3 = (anyArray) => {
    const result = [];

    for(const item of anyArray){
        if(typeof item === 'string') {
            result.push(item);
        }
    }

    if(result.length % 2 === 1) {
        return result.slice(0, result.length - 1);
    }
    return result;
}
console.log(returningStrings3(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//4
const returningStrings4 = (anyArray) => {
    const result = anyArray.filter(item => typeof item === 'string');

    return result.length % 2 === 1 ? result.slice(0, result.length - 1) : result;
}
console.log(returningStrings4(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));