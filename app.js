"use strict"

window.addEventListener("load", start());


async function start(){
 const pokemon = await getPokemon();
 showAllPokemon(pokemon);
}

async function getPokemon(){
    const response = await fetch("https://raw.githubusercontent.com/Blue-Grizzly/Pokemon-data-app/main/objects.JSON");
    const data = await response.json();
    return data;
}

function showAllPokemon(pokemonList) {
    for (const pokemon of pokemonList) {
        showPokemon(pokemon);
    }
}

function showPokemon(pokemon) {
    const myHTML = /*html*/`
    <article class="grid-item">
        ${pokemon.image}
        <h2>${pokemon.name}</h2>
        <p>#${pokemon.dexindex}</p>
        <p>Type: ${pokemon.type}, ${pokemon.subtype}</p>
    </article>
    `;
    document.querySelector("#pokemonList").insertAdjacentHTML("beforeend", myHTML);
    document.querySelector("#pokemonList article:last-child").addEventListener("click", clickPokemon);
    function clickPokemon(){
        document.querySelector("#detailView").showModal();
        pokemonDialog(pokemon); 
    }
}



function pokemonDialog(pokemon){
    const myHTML = /*html*/`
    <section>
        <ul>
            <li>${pokemon.image}</li>
            <li>Pokémon name: ${pokemon.name}</li>
            <li>Pokédex #${pokemon.dexindex}</li>
            <li>Pokédex entry: ${pokemon.desciption}</li>
            <li>Ability: ${pokemon.ability}</li>
            <li>Footprint: ${pokemon.footprint}</li>
            <li>Type: ${pokemon.type}</li>
            <li>Subtype: ${pokemon.subtype}</li>
            <li>Weakness: ${pokemon.weakness}</li>
            <li>Gender: ${pokemon.gender}</li>
            <li>Weight: ${pokemon.weight}</li>
            <li>Height: ${pokemon.height}</li>
            <li>Gen: ${pokemon.generation}</li>
            <li>Game Version: ${pokemon.spilversion}</li>
            <li>Can evolve: ${pokemon.canEvolve}</li>
            <li>HP: ${pokemon.statsHP}</li>
            <li>Attack: ${pokemon.statsAttack}</li>
            <li>Special Attack: ${pokemon.statsSpecialAttack}</li>
            <li>Special Defence: ${pokemon.statsSpecialDefence}</li>
            <li>Speed: ${pokemon.statsSpeed}</li>
        </ul>
        <form method="dialog">
		<button>Close</button>
        </form>
    </section>
    `;
    document.querySelector("#detailView").addEventListener("close", closedModal)
    document.querySelector("#detailView").insertAdjacentHTML("beforeend", myHTML);
}

function closedModal(){
    document.querySelector("#detailView section:last-child").remove();
}


// missing functions I think I want

// function fetchJSON(){}
// function calcStats(){}
// function showType(){}
// function showDesciption(){}
// function booleanTranslate(){}