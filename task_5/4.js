// Приближается зима, вы должны подготовить свои лыжные каникулы. Ваша задача определить количество пар перчаток, 
// которое вы можете составить из перчаток, которые есть в вашем ящике.
// Дан массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая,
// что только перчатки одного цвета могут образовывать пары.

// Fn(["red", "green", "red", "blue", "blue"]) // 2 (1 пара красных, одна пара голубых) 
// Fn(["red", "red", "red", "red", "red", "red"]) // 3 (3 красных пары)

const searchPairsGloves = (arrayColorGloves) => {
    const countGlovesCollection = arrayColorGloves.reduce((gloves, glove) => {
        !gloves[glove] ? gloves[glove] = 1 : gloves[glove]++;
        return gloves;
    }, {});

    let countPairsGloves = 0;

    for(const colorGloves in countGlovesCollection) {
        const countGloves = countGlovesCollection[colorGloves];
        
        countGloves % 2 === 0 ? countPairsGloves += countGloves : countPairsGloves += Math.floor(countGloves - 1);
    }

    return countPairsGloves / 2;
}

console.log(searchPairsGloves(['red', 'green', 'red', 'blue', 'blue']));
console.log(searchPairsGloves(['red', 'red', 'red', 'red', 'red', 'red']));
console.log(searchPairsGloves(['black', 'red', 'red', 'red']));