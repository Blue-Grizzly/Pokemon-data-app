"use strict"

window.addEventListener("load", start);


async function start(){
 const pokemon = await getPokemon();
 showAllPokemon(pokemon);
}

async function getPokemon(){
    const response = await fetch("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
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


    const calculatedStats = pokemon.statsAttack*1+pokemon.statsDefence*1+pokemon.statsHP*1+pokemon.statsSpecialAttack*1+pokemon.statsSpecialDefence*1+pokemon.statsSpeed*1;
    let evMessage
    let type
    
    if(pokemon.type == "Fire" || pokemon.type == "fire"){
        type = "Fire";
    } else if(pokemon.type == "Water" || pokemon.type == "water") {
        type = "Water";
    } else if(pokemon.type == "Electric" || pokemon.type == "electric") {
        type = "Electric";
    } else if(pokemon.type == "Ground" || pokemon.type == "ground") {
        type = "Ground";
    } else if(pokemon.type == "Rock" || pokemon.type == "rock") {
        type = "Rock";
    } else if(pokemon.type == "Normal" || pokemon.type == "normal") {
        type = "Normal";
    } else if(pokemon.type == "Grass" || pokemon.type == "grass") {
        type = "Grass";
    } else if(pokemon.type == "Ice" || pokemon.type == "ice") {
        type = "Ice";
    } else if(pokemon.type == "Fighting" || pokemon.type == "fighting") {
        type = "Fighting";
    } else if(pokemon.type == "Poison" || pokemon.type == "poison") {
        type = "Poison";
    } else if(pokemon.type == "Flying" || pokemon.type == "flying") {
        type = "Flying";
    } else if(pokemon.type == "Psychic" || pokemon.type == "psychic") {
        type = "Psyichic";
    } else if(pokemon.type == "Bug" || pokemon.type == "bug") {
        type = "Bug";
    } else if(pokemon.type == "Ghost" || pokemon.type == "ghost") {
        type = "Ghost";
    } else if(pokemon.type == "Dark" || pokemon.type == "dark") {
        type = "Dark";
    } else if(pokemon.type == "Dragon" || pokemon.type == "dragon") {
        type = "Dragon";
    } else if(pokemon.type == "Steel" || pokemon.type == "steel") {
        type = "Steel";
    } else if(pokemon.type == "Fairy" || pokemon.type == "fairy") {
        type = "Fairy";
    } else{
        type = "Normal";
    }

    let typeTheme = `${type}Theme`;

    if (pokemon.canEvolve === true){
         evMessage = `This pokémon can  evolve.`;
    } else if(pokemon.canEvolve === false){
         evMessage = `This pokémon can not evolve.`;
    }


    document.querySelector("#detailView").classList.add(typeTheme);

    document.querySelector("#pokedexEntry").textContent = `${pokemon.description}`;
    document.querySelector("#pokemonImage").src = `${pokemon.image}`;
    // document.querySelector("#pokemonFootPrint").src = `pokemon.footprint`;
    document.querySelector("#pokemonName").textContent = `${pokemon.name}`;
    document.querySelector("#dexIndex").textContent = `${pokemon.dexindex}`;
    document.querySelector("#ability").textContent = `${pokemon.ability}`;
    document.querySelector("#pokemonType").textContent = `${pokemon.type}`;
    document.querySelector("#pokemonSubtype").textContent = `${pokemon.subtype}`;
    document.querySelector("#weakness").textContent = `${pokemon.weakness}`;
    document.querySelector("#gender").textContent = `${pokemon.gender}`;
    document.querySelector("#weight").textContent = `${pokemon.weight}`;
    document.querySelector("#height").textContent = `${pokemon.height}`;
    document.querySelector("#generation").textContent = `${pokemon.generation}`;
    document.querySelector("#gameVersion").textContent = `${pokemon.spilversion}`;
    document.querySelector("#canEvolve").textContent = evMessage;
    document.querySelector("#statHP").textContent = `${pokemon.statsHP}`;
    document.querySelector("#statDefence").textContent = `${pokemon.statsDefence}`;
    document.querySelector("#statAttack").textContent = `${pokemon.statsAttack}`;
    document.querySelector("#statSpAttack").textContent = `${pokemon.statsSpecialAttack}`;
    document.querySelector("#statSpDefence").textContent = pokemon.statsSpecialDefence;
    document.querySelector("#statSpeed").textContent = pokemon.statsSpeed;
    document.querySelector("#statTotal").textContent = calculatedStats;


    document.querySelector("#detailView").addEventListener("close", closedModal);
}

function closedModal(){
    document.querySelector("#detailView").classList.remove
        ("NormalTheme", "FireTheme", "WaterTheme", "GrassTheme", "ElectricTheme", "IceTheme", "FightingTheme", "PoisonTheme", "GroundTheme", "FlyingTheme", "PsychicTheme", "BugTheme", "RockTheme", "GhostTheme", "DarkTheme", "DragonTheme", "SteelTheme", "FairyTheme");
    //All the themes
}


// missing functions I think I want

// function showType(){}
// function showDesciption(){}
