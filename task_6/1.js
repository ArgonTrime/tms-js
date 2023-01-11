// запрос на покемон, получить urls всех покемонов, получить массив объектов покемонов по urls

const getPokemons = async () => {
    try {
        const pokemonUrls = await fetch('https://pokeapi.co/api/v2/pokemon')
            .then((responce) => responce.json())
            .then(({results}) => results.map(({url}) => url));
         
        const pokemons = await Promise.allSettled(pokemonUrls.map(url => {
            return fetch(url).then(responce => responce.json());
        })).then(pokemonsResponces => {
            return pokemonsResponces.map(({value}) => value);
        });
        console.log(pokemons);
    } catch(error) {
        throw new Error('Oops something is wrong!');
    }
}

getPokemons();