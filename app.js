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

    let typeTest = pokemon.type;


    const calculatedStats = pokemon.statsAttack*1+pokemon.statsDefence*1+pokemon.statsHP*1+pokemon.statsSpecialAttack*1+pokemon.statsSpecialDefence*1+pokemon.statsSpeed*1;
   
    let evMessage
    let type
    
    if(typeTest.includes("Fire") === true || typeTest.includes("fire") === true){
        type = "Fire";
    } else if(typeTest.includes("Water") === true || typeTest.includes("water") === true) {
        type = "Water";
    } else if(typeTest.includes("Electric") === true || typeTest.includes("electric") === true) {
        type = "Electric";
    } else if(typeTest.includes("Ground") === true || typeTest.includes("ground") === true) {
        type = "Ground";
    } else if(typeTest.includes("Rock") === true || typeTest.includes("rock") === true) {
        type = "Rock";
    } else if(typeTest.includes("Normal") === true || typeTest.includes("normal") == true) {
        type = "Normal";
    } else if(typeTest.includes("Grass") === true || typeTest.includes == "grass") {
        type = "Grass";
    } else if(typeTest.includes("Ice") === true || typeTest.includes("ice") === true ) {
        type = "Ice";
    } else if(typeTest.includes("Fighting") === true || typeTest.includes("fighting") === true) {
        type = "Fighting";
    } else if(typeTest.includes("Poison") === true || typeTest.includes("poison") === true) {
        type = "Poison";
    } else if(typeTest.includes("Flying") === true || typeTest.includes("flying") === true) {
        type = "Flying";
    } else if(typeTest.includes("Psychic") === true || typeTest.includes("psychic") === true) {
        type = "Psyichic";
    } else if(typeTest.includes("Bug") === true || typeTest.includes("bug") === true) {
        type = "Bug";
    } else if(typeTest.includes("Ghost") === true || typeTest.includes("ghost") === true) {
        type = "Ghost";
    } else if(typeTest.includes("Dark") === true || typeTest.includes("dark") === true) {
        type = "Dark";
    } else if(typeTest.includes("Dragon") === true || typeTest.includes("dragon") === true) {
        type = "Dragon";
    } else if(typeTest.includes("Steel") === true || typeTest.includes("steel") === true) {
        type = "Steel";
    } else if(typeTest.includes("Fairy") === true || typeTest.includes("fairy") === true) {
        type = "Fairy";
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
