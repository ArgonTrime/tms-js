// Написать функцию, которая принемает 2 аргумента. Функицю и задержку. 
// fn(request, timeout). Если время выполнения функции запроса больше чем таймаут твоя функция
// должна вернуть ошибку, если меньше то результат ответа

const fakeResponce = new Promise((resolve) => {
    return setTimeout(() => resolve('Responce value'), 1000)
});

const checkFastResponce = async (responce, timesInMs) => {
    
    const errorTimer = new Promise((resolve, reject) => {
        return setTimeout(() => reject('Pesponce is slow!'), timesInMs);
    });

    try {
        return await Promise.race([responce, errorTimer]).then(value => console.log(value));
    } catch(error) {
        console.log(error);
    }
}

checkFastResponce(fakeResponce, 2000);