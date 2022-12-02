// Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men. Данные
// поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
// Также, вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные поля 
// (first_name и last_name). Количество пользователей может быть не ограничено.

/* Пример результата выполнения:
  {
    women: [
      {
        id: 1,
        fullName: 'Jeanette Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ipAddress: '26.58.193.2',
      }
    ],
    men: [
      {
        id: 2,
        fullName: 'Petr Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
      }
    ]
  }

*/

const users = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
    {
        id: 3,
        first_name: 'Igor',
        last_name: 'Trimailov',
        email: null,
        gender: 'Male',
        ip_address: null,
    },
];

const separationGenderUsers = (users) => {
    const maleUsers = users.reduce((result, user) => {
        const {first_name, last_name, ...remainingKey} = user;
        if(user.gender === 'Male') {
            result.push(
                {fullName: `${first_name} ${last_name}`, ...remainingKey}
            );
        }
        return result;
    }, []);
    const femaleUsers = users.reduce((result, user) => {
        const {first_name, last_name, ...remainingKey} = user;
        if(user.gender === 'Female') {
            result.push(
                {fullName: `${first_name} ${last_name}`, ...remainingKey}
            );
        }
        return result;
    }, []);

    return {
        women: femaleUsers,
        men: maleUsers,
    }
}

console.log(separationGenderUsers(users));