let linkPokemonApi = 'https://pokeapi.co/api/v2/pokemon/'
let btnSearchPokemon = document.getElementById('btnSearchPokemon')

btnSearchPokemon.onclick = () => {
    let inputPokemon = document.getElementById('inputPokemon')

    fetch(linkPokemonApi.concat(inputPokemon.value.toLowerCase()))
    .then(response => {
        if(!response.ok) {
            throw alert("Error! Please check the Pokémon's name again!")
        }
        return response.json()
    })
    .then(pokemon => showSearchReturn(pokemon))
}

function showSearchReturn(pokemon) {
    let imgPokemon = document.getElementById('imgPokemon')
    let namePokemon = document.getElementById('namePokemon')
    let radio2D3D = document.querySelector("input[name='radio2D3D']:checked")

    console.log(pokemon)
    namePokemon.innerText = pokemon.name

    if(radio2D3D.value == "2D") 
        imgPokemon.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
    else
        imgPokemon.src = pokemon.sprites.other.showdown.front_default
}

