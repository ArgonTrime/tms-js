const btn = document.querySelector('button');
//______________________________

//one player
//______________________________
const numberSearchGame = () => {
    const RANDOM_NUMBER = Math.ceil(Math.random() * 100);
    let userNumber = 0;
    let gameCycle = true;

    //input player number
    const imputNumberUser = () => {
        let value = +prompt('Угодайте число от 1 до 100', '');
        if(!isNaN(value) && value >= 1 && value <= 100) {
            return value;
        }
        alert('Плохое число, попробуйте снова');
        return imputNumberUser();
    }

    //game cycle
    while(gameCycle) {
        userNumber = imputNumberUser();
        if(userNumber === RANDOM_NUMBER) gameCycle = false;
        userNumber > RANDOM_NUMBER ? alert('Введенное число больше') : alert('Введенное число меньше');
    }
    console.log(userNumber, RANDOM_NUMBER);
    return alert(`Победа. Отлично вы угадали: ${userNumber}`);
    
    
}
//______________________________

//more players, one winner
//______________________________ 
const numberSearchGame2 = () => {
    const RANDOM_NUMBER = Math.ceil(Math.random() * 100);
    let userNumber = 0;
    let usersCount = 0;
    const playerList = [];
    let gameCycle = true;

    //input users count play game
    const inputUsersCountPlayGame = () => {
        let value = +prompt('Введите количество игроков от 1 до 5', '');
        if(!isNaN(value) && value >= 1 && value <= 5) {
            return value;
        }
        alert('Введите корректное значение игроков');
        return inputUsersCountPlayGame();
    }
    //create players list
    const createPlayesList = (usersCount) => {
        let i = 1;
        while(i <= usersCount) {
            let userName = prompt(`Введите имя ${i}-го игрока`, '');
            playerList.push([userName, 0]);
            i++;
        }
    }
    //input player number
    const inputNumberUser = () => {
        let value = +prompt('Угодайте число от 1 до 100', '');
        if(!isNaN(value) && value >= 1 && value <= 100) {
            return value;
        }
        alert('Плохое число, попробуйте снова');
        return inputNumberUser();
    }
    //checkedValidNumber
    const checkedValidNumber = (number) => {
        if(number === RANDOM_NUMBER) return gameCycle = false;
        number > RANDOM_NUMBER ? alert('Введенное число больше') : alert('Введенное число меньше');
    }

    //single player and more players
    const singlePlayer = () => {
        userNumber = inputNumberUser();
        checkedValidNumber(userNumber);
    }
    const moreOnePlayers = () => {
        for(const player of playerList) {
            alert(`${player[0]}, ваш ход`);
            player[1] = inputNumberUser();
            checkedValidNumber(player[1]);
        }
    }


    //init game here
    usersCount = inputUsersCountPlayGame();
    if(usersCount > 1) createPlayesList(usersCount);
    //game cycle
    while(gameCycle) {
        usersCount === 1 ? singlePlayer() : moreOnePlayers();
    }


    console.log(userNumber, RANDOM_NUMBER);

    if(usersCount === 1) return alert(`Победа. Отлично вы угадали: ${userNumber}`);
    const [[name, value]] = playerList.filter(([name, value]) => RANDOM_NUMBER === value);
    return alert(`Победа ${name}! Отлично вы угадали: ${value}`);
}
//______________________________

//more players, one winner and difficulty level
//______________________________
const numberSearchGame3 = () => {
    const RANDOM_NUMBER = Math.ceil(Math.random() * 100);
    const difficultyLevel = {
        easy: 7,
        medium: 5,
        hard: 3,
    };
    let userNumber = 0;
    let usersCount = 0;
    const playerList = [];
    let gameCycle = true;
    let countStepFindNumber = 0;

    //input users count play game
    const inputUsersCountPlayGame = () => {
        let value = +prompt('Введите количество игроков от 1 до 5', '');
        if(!isNaN(value) && value >= 1 && value <= 5) {
            return value;
        }
        alert('Введите корректное значение игроков');
        return inputUsersCountPlayGame();
    }
    //create players list
    const createPlayesList = (usersCount) => {
        let i = 1;
        while(i <= usersCount) {
            let userName = prompt(`Введите имя ${i}-го игрока`, '');
            playerList.push([userName, 0]);
            i++;
        }
    }
    //input player number
    const inputNumberUser = () => {
        let value = +prompt('Угодайте число от 1 до 100', '');
        if(!isNaN(value) && value >= 1 && value <= 100) {
            return value;
        }
        alert('Плохое число, попробуйте снова');
        return inputNumberUser();
    }
    //checkedValidNumber
    const checkedValidNumber = (number) => {
        if(number === RANDOM_NUMBER) return gameCycle = false;
        number > RANDOM_NUMBER ? alert('Введенное число больше') : alert('Введенное число меньше');
    }
    //set difficulty level
    const setDifficultyLevel = () => {
        let value = prompt(`
            Введите уровень сложности, влияющий на количество попыток.
            ${JSON.stringify(difficultyLevel)}
        `);
        if(difficultyLevel[value]) {
            countStepFindNumber = difficultyLevel[value];
            return;
        }
        alert('Введите корректное значение уровня сложности');
        return setDifficultyLevel();
    }

    //single player and more players
    const singlePlayer = () => {
        userNumber = inputNumberUser();
        checkedValidNumber(userNumber);
        countStepFindNumber--;
    }
    const moreOnePlayers = () => {
        for(const player of playerList) {
            alert(`${player[0]}, ваш ход`);
            player[1] = inputNumberUser();
            checkedValidNumber(player[1]);
            if(gameCycle === false) {
                return alert(`Победа ${player[0]}! Отлично вы угадали: ${player[1]}`);
            }
        }
        countStepFindNumber--;
    }


    //init game here
    usersCount = inputUsersCountPlayGame();
    if(usersCount > 1) createPlayesList(usersCount);
    setDifficultyLevel();
    //game cycle
    while(gameCycle) {
        if(countStepFindNumber === 0) return alert('Вы проиграли, количество попыток закончилось');
        usersCount === 1 ? singlePlayer() : moreOnePlayers();
    }

    //exit game for one player, exit game more player in fn moreOnePlayers
    if(usersCount === 1) return alert(`Победа. Отлично вы угадали: ${userNumber}`);
}
//______________________________

btn.addEventListener('click', () => numberSearchGame3());