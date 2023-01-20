// ⦁	Ваша задача реализовать функцию-банкомат

// Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
// Количество банкнот не ограничено
// Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом


// ATM(1000) // [500, 500]
// ATM(1025) // [500, 500, 20, 5],
// ATM(10) // 10

const ATM = (money) => {
    let value = money;
    const banknotes = [500, 100, 50, 20, 10, 5, 1];
    const giveBanknote = [];
    while(value !== 0) {
        for(const banknote of banknotes) {
            if(value >= banknote) {
                value -= banknote;
                giveBanknote.push(banknote);
                break;
            } else {
                continue;
            }
        }
    }
    return giveBanknote.length > 1 ? giveBanknote : giveBanknote[0];
}

console.log(ATM(1000));
console.log(ATM(1025));
console.log(ATM(10));