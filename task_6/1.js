// запрос на покемон, получить urls всех покемонов, получить массив объектов покемонов по urls

const getPokemons = async (url) => {
    const pokemonsArray = [];
    const pokemonsUrl = [];

    try {
        const {results} = await fetch(url).then((response) => response.json());
        results.forEach(({url}) => pokemonsUrl.push(url));

        await Promise.allSettled(pokemonsUrl.map(url => fetch(url).then(responce => responce.json())))
        .then((responces) => {
            responces.forEach(({value}) => pokemonsArray.push(value));
           
        });   
    } catch (error) {
        console.log(error.message);
    }

    console.log(pokemonsArray);
}

getPokemons('https://pokeapi.co/api/v2/pokemon');