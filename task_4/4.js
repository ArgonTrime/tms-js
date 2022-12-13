// Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект,
// в котором были отсеяны поля со значениями null или undefined

// fn({ a: 1, b: ‘Hello’, c: null, z: undefined}) // { a: 1, b: ‘Hello’ }
// fn({ name: ‘alex’, age: 10, friends: [], address: null}) // { name: ‘alex’, age: 10, friends: [], }

const removeEmptyValues = (anyObj) => {
    const entries = Object.entries(anyObj);
    const filtredEntries = entries.filter(([key, value]) => {
        return value !== null && value !== undefined;
    });

    return Object.fromEntries(filtredEntries);
}

console.log(removeEmptyValues({ a: 1, b: 'Hello', c: null, z: undefined}));
console.log(removeEmptyValues({ name: 'alex', age: 10, friends: [], address: null}));