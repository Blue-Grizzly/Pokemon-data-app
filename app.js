"use strict"


const Lucario = {
    name: `Lucario`,
    dexindex: `0448`,
    desciption: `It is said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.`,
    ability: [`Inner Focus `, `SteadFast`],
    image: `<img src = https://archives.bulbagarden.net/media/upload/thumb/archive/4/42/20100122172129%210448Lucario.png/120px-0448Lucario.png>`,
    footprint: `<img src =https://archives.bulbagarden.net/media/upload/f/fd/F0448.png>`,
    type: `Fighting`,
    subtype: `Steel`,
    weakness: [`Fire `, `Fighting `, `Ground `],
    gender: `Male`,
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

window.addEventListener("load", showPokemon(Lucario));

function showPokemon(pokemon) {
    const myHTML = /*html*/`
    <p>${pokemon.image}Pokémon name: ${pokemon.name}</p>

    `;
    document.querySelector("body").insertAdjacentHTML("beforeend", myHTML);
    document.querySelector("body:last-child p").addEventListener("click", addPokemon);
}

console.log(Lucario);

function addPokemon(){
    document.querySelector("dialog").open = true;
    pokemonDialog(Lucario); //very temp solution
}


function pokemonDialog(pokemon){
    const myHTML = /*html*/`
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
    `;
    document.querySelector("dialog").insertAdjacentHTML("beforeend", myHTML);
}