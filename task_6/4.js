// Написать функцию, которая принемает 2 аргумента. Функицю и задержку. 
// fn(request, timeout). Если время выполнения функции запроса больше чем таймаут твоя функция
// должна вернуть ошибку, если меньше то результат ответа

const fakeResponce = (data, workTimerInMs) => {
    return new Promise((responce) => {
        setTimeout(() => responce(data), workTimerInMs);
    })
}

const checkFastResponce = async (responce, timesInMs) => {
    
    const delayTimer = new Promise((_, reject) => {
        setTimeout(() => reject('Pesponce is slow!'), timesInMs);
    });

    return await Promise.race([responce, delayTimer])
        .then(value => console.log(value))
        .catch(error => console.log(error));
}

checkFastResponce(fakeResponce('Responce data!', 1000), 2000);