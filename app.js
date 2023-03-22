"use strict"

window.addEventListener("load", start());


function start(){
const Lucario = {
    name: `Lucario`,
    dexindex: `0448`,
    desciption: `It is said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.`,
    ability: [`Inner Focus`, ` SteadFast`],
    image: `<img src = https://archives.bulbagarden.net/media/upload/thumb/archive/4/42/20100122172129%210448Lucario.png/120px-0448Lucario.png>`,
    footprint: `<img src =https://archives.bulbagarden.net/media/upload/f/fd/F0448.png>`,
    type: `Fighting`,
    subtype: `Steel`,
    weakness: [`Fire`, ` Fighting`, ` Ground`],
    gender: [`Male`, ` Female `],
    weight: `54`,
    height: `120`,
    generation: `4`,
    spilversion: `Both`,
    canEvolve: false,
    statsHP: 5,
    statsAttack: 7,
    statsDefence: 5,
    statsSpecialAttack: 7,
    statsSpecialDefence: 5,
    statsSpeed: 6
};
const NotLucario = {
    name: `NotLucario`,
    dexindex: `0448`,
    desciption: `It is said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.`,
    ability: [`Inner Focus`, ` SteadFast`],
    image: `<img src = https://archives.bulbagarden.net/media/upload/thumb/archive/4/42/20100122172129%210448Lucario.png/120px-0448Lucario.png>`,
    footprint: `<img src =https://archives.bulbagarden.net/media/upload/f/fd/F0448.png>`,
    type: `Fighting`,
    subtype: `Steel`,
    weakness: [`Fire`, ` Fighting`, ` Ground`],
    gender: [`Male`, ` Female `],
    weight: `54`,
    height: `120`,
    generation: `4`,
    spilversion: `Both`,
    canEvolve: false,
    statsHP: 5,
    statsAttack: 7,
    statsDefence: 5,
    statsSpecialAttack: 7,
    statsSpecialDefence: 5,
    statsSpeed: 6
};
    showPokemon(Lucario);
    showPokemon(NotLucario);
    console.log(JSON.stringify(NotLucario, " "));
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
    console.log(pokemon);
    function clickPokemon(){
        document.querySelector("#detailView").showModal();
        // document.querySelector("#pokemonList article:last-child").removeEventListener("click", clickPokemon);
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