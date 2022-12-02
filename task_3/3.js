// Функция принимает массив объектов пользователей первым параметром, вторым параметром принимает массив строк (id). 
// Ф-ция должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей ф-ции вторым параметром и вернуть массивб с оставшимися пользователями.

// removeUsers(users, [2,3]) // [{id: 1, name: 'Alex'}]
// removeUsers(users, [3]) // [{id: 1, name: 'Alex'}, {id: 2, name: 'Tomara'}]

const users = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Tomara',
    },
    {
        id: 3,
        name: 'Max',
    },
]

const removeUsers = (users, userRemoveIds) => {
    return users.filter(({id}) => {
        return userRemoveIds.find(() => !userRemoveIds.includes(id));
    });
}

console.log(removeUsers(users, [2, 3]));
console.log(removeUsers(users, [3]));