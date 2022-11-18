/*
У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме.
*/

const searchHypotenuse = (oneSide, twoSide) => Math.sqrt(oneSide ** 2 + twoSide ** 2);

console.log(searchHypotenuse(3, 4));