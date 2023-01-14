// Результатом работы вашей функции должен быть массив пользователей. У каждого объекта пользователя должно 
// появиться поле myPosts: [<в этом массиве будут посты, которые сделал этот пользователь>].
// Поле массив, так как у одного пользователя может быть более 1-го поста.

const getUsersWithPosts = async () => {
    const MY_URL = 'https://jsonplaceholder.typicode.com/';

    try {
        const [users, posts] = await Promise.all([
            fetch(`${MY_URL}users`).then(responce => responce.json()),
            fetch(`${MY_URL}posts`).then(responce => responce.json())
        ]);

        const postsUserId = new Map();
        for(const {userId, title} of posts) {
            if(!postsUserId.has(userId)) {
                postsUserId.set(userId, [])
            }
            postsUserId.get(userId).push(title);
        }

        const usersWithPosts = users.map(user => {
            const {id} = user;
            if(!user.myPost) {
                user.myPost = []
            }
            user.myPost.push([...postsUserId.get(id)]);
            return user;
        });
        
        return console.log(usersWithPosts);
  
    } catch(error) {
        return new Error('Oops, something went wrong!');
    }
}

getUsersWithPosts();