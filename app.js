"use strict"

window.addEventListener("load", start);


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
        <img src=${pokemon.image}>
        <h2>${pokemon.name}</h2>
        <p>#${pokemon.dexindex}</p>
        <p>Type: ${pokemon.type} ${pokemon.subtype}</p>
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


    const calculatedStats = pokemon.statsAttack+pokemon.statsHP+pokemon.statsSpecialAttack+pokemon.statsSpecialDefence+pokemon.statsSpeed;
    
    let typeTheme
    
    if(pokemon.type == "Fire" || pokemon.type == "fire"){
        typeTheme = "FireTheme"
    } else if(pokemon.type == "Water" || pokemon.type == "water") {
        typeTheme = "WaterTheme"
    } else if(pokemon.type == "Electric" || pokemon.type == "electric") {
        typeTheme = "ElectricTheme"
    } else if(pokemon.type == "Ground" || pokemon.type == "ground") {
        typeTheme = "GroundTheme"
    } else if(pokemon.type == "Rock" || pokemon.type == "rock") {
        typeTheme = "RockTheme"
    } else if(pokemon.type == "Normal" || pokemon.type == "normal") {
        typeTheme = "NormalTheme"
    } else if(pokemon.type == "Grass" || pokemon.type == "grass") {
        typeTheme = "GrassTheme"
    } else if(pokemon.type == "Ice" || pokemon.type == "ice") {
        typeTheme = "IceTheme"
    } else if(pokemon.type == "Fighting" || pokemon.type == "fighting") {
        typeTheme = "FightingTheme"
    } else if(pokemon.type == "Poison" || pokemon.type == "poison") {
        typeTheme = "PoisonTheme"
    } else if(pokemon.type == "Flying" || pokemon.type == "flying") {
        typeTheme = "FlyingTheme"
    } else if(pokemon.type == "Psychic" || pokemon.type == "psychic") {
        typeTheme = "PsyichicTheme"
    } else if(pokemon.type == "Bug" || pokemon.type == "bug") {
        typeTheme = "BugTheme"
    } else if(pokemon.type == "Ghost" || pokemon.type == "ghost") {
        typeTheme = "GhostTheme"
    } else if(pokemon.type == "Dark" || pokemon.type == "dark") {
        typeTheme = "DarkTheme"
    } else if(pokemon.type == "Dragon" || pokemon.type == "dragon") {
        typeTheme = "DragonTheme"
    } else if(pokemon.type == "Steel" || pokemon.type == "steel") {
        typeTheme = "SteelTheme"
    } else if(pokemon.type == "Fairy" || pokemon.type == "fairy") {
        typeTheme = "FairyTheme"
    } else{
        typeTheme = "NormalTheme"
    }

    document.querySelector("#detailView").classList.add(typeTheme);
    
    const myHTML = /*html*/`
    <section>
        <ul>
            <img src=${pokemon.image}>
            <li>Pokémon name: ${pokemon.name}</li>
            <li>Pokédex #${pokemon.dexindex}</li>
            <li>Pokédex entry: ${pokemon.desciption}</li>
            <li>Ability: ${pokemon.ability}</li>
            <li>Footprint: <img src=${pokemon.footprint} class="footPrint"></li>
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
            <li>Total stats:${calculatedStats}</li>
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
    document.querySelector("#detailView").classList.remove
        ("NormalTheme", "FireTheme", "WaterTheme", "GrassTheme", "ElectricTheme", "IceTheme", "FightingTheme", "PoisonTheme", "GroundTheme", "FlyingTheme", "PsychicTheme", "BugTheme", "RockTheme", "GhostTheme", "DarkTheme", "DragonTheme", "SteelTheme", "FairyTheme");
    //All the themes
        document.querySelector("#detailView section:last-child").remove();
}


// missing functions I think I want

// function calcStats(){}
// function showType(){}
// function showDesciption(){}
// function booleanTranslate(){}