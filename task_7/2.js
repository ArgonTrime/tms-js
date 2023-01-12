// Результатом работы вашей функции должен быть массив пользователей. У каждого объекта пользователя должно 
// появиться поле myPosts: [<в этом массиве будут посты, которые сделал этот пользователь>].
// Поле массив, так как у одного пользователя может быть более 1-го поста.

const getUsersWithPosts = async () => {
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responce => responce.json());

        const users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json());

        const result = users.map(user => {
            const {id} = user;
            if(!user.myPosts) {
                user.myPosts = [];
            }

            const comments = posts.filter(({userId}) => userId === id);
            user.myPosts.push([...comments]);
            return user;
        });
        return console.log(result);
    } catch(error) {
        return new Error('Oops, something went wrong!');
    }
}

getUsersWithPosts();