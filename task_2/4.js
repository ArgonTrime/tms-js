// Функция принимает, массив строчных и числовых значений. 
// Функция должна вернуть новый массив состоящий только из строк, количество символов которых чётное.
// fn(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]); // ['Hi', 'JS']

//1
const returningStrings1 = (anyArray) => {
    const result = [];

    for(let i = 0; i < anyArray.length; i++){
        const item = anyArray[i];
        const isEven = item.length % 2 === 0;
        const isString = typeof item === 'string';
        if(isString && isEven) {
            result.push(item);
        }
    }
    return result;
}
console.log(returningStrings1(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//2
const returningStrings2 = (anyArray) => {
    const result = [];
    let i = 0;

    while(i < anyArray.length){
        const item = anyArray[i];
        const isEven = item.length % 2 === 0;
        const isString = typeof item === 'string';
        if(isString && isEven) {
            result.push(item);
        }
        i++;
    }
    return result;
}
console.log(returningStrings2(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//3
const returningStrings3 = (anyArray) => {
    const result = [];

    for(const item of anyArray){
        const isEven = item.length % 2 === 0;
        const isString = typeof item === 'string';
        if( isString && isEven) {
            result.push(item);
        }
    }
    return result;

}
console.log(returningStrings3(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));

//4
const returningStrings4 = (anyArray) => {
    return anyArray.filter(item => (typeof item === 'string') && (item.length % 2 === 0));

}
console.log(returningStrings4(['Hi', 2, 3, 4, 5, 'JS', 2, 'C++']));