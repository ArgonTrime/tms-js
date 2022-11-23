/*
У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме.
*/

const searchHypotenuse = (firstSide, secondSide) => Math.sqrt(firstSide ** 2 + secondSide ** 2);

console.log(searchHypotenuse(3, 4));