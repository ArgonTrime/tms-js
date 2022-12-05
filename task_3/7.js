// TODO: #7. Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных используйте newReleases из предыдущего задания.
//
// // [675465, …]

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }], 
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [ {id: 432534, time: 65876586 }],
    },
];

const getBestRatingReleases = (newReleases) => {
    const bestRating = 5.0;
    return newReleases.reduce((result, {rating, id}) => {
        if(rating[0] === bestRating) {
            result.push(id)
        }
        return result;
    }, [])
}

console.log(getBestRatingReleases(newReleases));