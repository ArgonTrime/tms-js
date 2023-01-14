const getUsers = async () => {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(responce => responce.json());
        const wrapper = document.querySelector('.wrapper');
        
        
        for(const {name, username, email, phone, address, website} of users) {
            const {street, suite, city} = address;

            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${name}</h2>
                <p class='user_nameTag'>@${username}</p>
                <p>phone: ${phone}, email: ${email}, website: ${website}</p>
                <p>adress: ${city}, ${street}, ${suite}</p>
            `;
            
            div.classList.add('user');
            wrapper.appendChild(div);
        }
    } catch(error) {
        return new Error('Oops, something went wrong!');
    }
}

getUsers();