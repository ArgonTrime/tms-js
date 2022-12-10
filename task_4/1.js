// Ожидаемый результат
// {
//     '65432445': 'The Chamber',
//     '675465': 'Fracture',
//     '70111470': 'Die Hard',
//     '654356453': 'Bad Boys'
// }

const videos = [
    {
        id: 65432445,
        title: 'The Chamber'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    },
];

const modificationVideoObject = (videos) => videos.reduce((modificationVideosObject, {id, title}, ) => {
    modificationVideosObject[id] = title;
    return modificationVideosObject;
}, {});

console.log(modificationVideoObject(videos));