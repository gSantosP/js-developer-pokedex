const pokemonCardInfo = document.getElementById('pokemonCardInfo');
const buttonToLoadMore = document.getElementById('buttonToLoadMore');

const limit = 10;
let offset = 0;

function convertPokemonToDetailedCard(pokemon) {
    //console.log("MY ID: ", pokemon.number);
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">Name: ${pokemon.name}</span>
            
            
            <span class="name">Base Experience: ${pokemon.base_experience}</span>
            <br>
            <span class="name">Weight: ${pokemon.weight}</span>
            <span class="name">Height: ${pokemon.height}</span>
            

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <ol class="types">
                    ${pokemon.moves.map((move) => `<li class="type ${move}">${move}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToDetailedCard).join('');
        pokemonCardInfo.innerHTML += newHtml;
    })
}

function loadCurrentPokemon(pokemon){
    pokeApi.getPokemonDetail(pokemon);
    pokemonCardInfo.innerHTML += newHtml;
    
};


loadPokemonItens(offset, limit);
//loadCurrentPokemon(pokemon);