//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
//You don't need to validate the form of the Roman numeral.
//Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any Os.
//So 1990 is rendered MCMXC (1000=M, 900=CM, 90=XC) and 2008 is rendered MMVIII (2000=MM, 8=VIII). The Roman numeral for 1666 MDCLXVI, uses each letter in descending order.
// solutuion('XXI') // return 21

// Symbal Value
// I      1
// V      5
// X      10
// L      50
// C      100
// D      500
// M      1000

const encodedRomanToDecimalInteger = (romanNumbers) => {
    const romanCollectionValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const romanLettersArray = romanNumbers.split('');

    return romanLettersArray.reduce((result, romanLetter, index, romanLettersArray) => {
        const currentValue = romanCollectionValues[romanLetter];
        const nextValue = romanCollectionValues[romanLettersArray[index + 1]];

        currentValue < nextValue ? result -= currentValue : result += currentValue;
        
        return result;
    }, 0);
}

console.log(encodedRomanToDecimalInteger('XXI'));
console.log(encodedRomanToDecimalInteger('MCMXC'));
console.log(encodedRomanToDecimalInteger('MMVIII'));
console.log(encodedRomanToDecimalInteger('MDCLXVI'));