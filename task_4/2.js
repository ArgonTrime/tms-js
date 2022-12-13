// С помощью функций map, reduce, вывести url у которого самая большая площадь

const boxarts = [
    {
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture200.jpg'
    },
    {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture150.jpg'
    },
    {
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture300.jpg'
    },
    {
        width: 425,
        height: 150,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture425.jpg'
    },
]

const searcheMoreAreaUrlImage = (boxartsCollection) => {
    const squareBoxarts = boxartsCollection.map(({width, height, url}) => {
        return {
            square: width * height,
            url,
        }
    });

    const {url} = squareBoxarts.reduce((result, currentArt) => {
        const {square: resultSquare} = result;
        const {square: currentArtSquare} = currentArt;

        return resultSquare > currentArtSquare ? result : currentArt;
    })

    return url;
}

console.log(searcheMoreAreaUrlImage(boxarts));