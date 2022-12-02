// Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false

//isPalindrome('Привет') --> false
//isPalindrome('шалаш') --> true

const isPolindrome = (someString) => {
    const reverseString = someString.split('').reverse().join('');
    return someString === reverseString;
}

console.log(isPolindrome('Привет'));
console.log(isPolindrome('шалаш'));