const fetchPokemons = async function (number) {
   
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
    const pokemonList = await response.json();
    
    let pokemons = [];
    while (pokemons.length < number) {
        const index = Math.floor(Math.random() * pokemonList.results.length);
        if (!pokemons.includes(pokemonList.results[index])) {
            pokemons.push(pokemonList.results[index]);
        }
    }
    
    const detailedData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
                name: data.name,
                imageURL: data.sprites.front_default,
            };
        })
    );

    return detailedData;
};

export default fetchPokemons;
