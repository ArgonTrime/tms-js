// Complete the solution so that the function will break up camel casing, using a space between words.

// fn("camelCasing")  //  "camel Casing"
// fn("identifier")  //  "identifier"
// fn(‘helloMyDearFriend’) // ’hello My Dear Friend’

const decodeCamelCaseString = (anyString) => {
    if(typeof anyString !== 'string') return `It's not a string.`;
    if(anyString.length < 2) return anyString;

    const lettersArray = anyString.split('');
    let resultString = ``;
    let i = 0;

    while(i < lettersArray.length) {
        const letter = lettersArray[i];
        const capitalLetter = letter.toUpperCase();
        ((letter === capitalLetter) && (i !== 0)) ? resultString += ` ${letter}` : resultString += `${letter}`;
        i++;
    }

    return resultString;
}

console.log(decodeCamelCaseString('camelCasing'));
console.log(decodeCamelCaseString('identifier'));
console.log(decodeCamelCaseString('helloMyDearFriend'));
console.log(decodeCamelCaseString(1));