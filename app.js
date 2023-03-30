"use strict"

window.addEventListener("load", start);

async function start(){
 const pokemon = await getPokemon();
 pokemon.sort(sortBydexNumber);
 showAllPokemon(pokemon);
}

// Gets JSON data v
async function getPokemon(){
    const response = await fetch("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
    const data = await response.json();
    return data;
}

// Sorts pokemon by their Pokedex number v 
function sortBydexNumber(pokemonA, pokemonB){
    return pokemonA.dexindex - pokemonB.dexindex;
}

// Creates the pokemon grid/list with the html in showPokemon for all pokemon in data
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

// The engine room v
function pokemonDialog(pokemon){

// Variables v
    let typeTest = pokemon.type;
    let evMessage
    let type
    
    
// The test for what type the clicked pokemon has to determine what color the background will be on the modal v
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
        type = "Psychic";
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
    
// Creates message for wether or not the pokemon can be evolved v
    if (pokemon.canEvolve === true){
        evMessage = `This pokémon can  evolve.`;
    } else if(pokemon.canEvolve === false){
        evMessage = `This pokémon can not evolve.`;
    }
// Adds up the stats for the total stats data point v
    const calculatedStats = pokemon.statsAttack+pokemon.statsDefence+pokemon.statsHP+pokemon.statsSpecialAttack+pokemon.statsSpecialDefence+pokemon.statsSpeed;

// Dom manipulation v
    document.querySelector("#detailView").classList.add(typeTheme);
    document.querySelector("#pokedexEntry").textContent = `${pokemon.description}`;
    document.querySelector("#pokemonImage").src = `${pokemon.image}`;
    // document.querySelector("#pokemonFootPrint").src = `pokemon.footprint`; removed due to copy right concerns.
    document.querySelector("#pokemonName").textContent = `${pokemon.name}`;
    document.querySelector("#dexIndex").textContent = `#${pokemon.dexindex}`;
    document.querySelector("#ability").textContent = `Ability: ${pokemon.ability}`;
    document.querySelector("#pokemonType").textContent = `Type: ${pokemon.type}`;
    
    if (pokemon.subtype != undefined || pokemon.subtype != null){
        document.querySelector("#pokemonSubtype").textContent = `Subtype: ${pokemon.subtype}`;
    } else{
        document.querySelector("#pokemonSubtype").textContent = "";
    }
    
    document.querySelector("#weakness").textContent = `Weaknesses: ${pokemon.weaknesses}`;
    document.querySelector("#gender").textContent = `${pokemon.gender}`;
    document.querySelector("#weight").textContent = `Weight: ${pokemon.weight}g`;
    document.querySelector("#height").textContent = `Height: ${pokemon.height}cm`;
    document.querySelector("#generation").textContent = `Generation introduced: ${pokemon.generation}`;
    document.querySelector("#gameVersion").textContent = `Game versions available: ${pokemon.spilversion}`;
    document.querySelector("#canEvolve").textContent = evMessage;
    document.querySelector("#statHP").textContent = `Health: ${pokemon.statsHP}`;
    document.querySelector("#statDefence").textContent = `Defence: ${pokemon.statsDefence}`;
    document.querySelector("#statAttack").textContent = `Attack: ${pokemon.statsAttack}`;
    document.querySelector("#statSpAttack").textContent = `SP Attack: ${pokemon.statsSpecialAttack}`;
    document.querySelector("#statSpDefence").textContent = `SP Defence: ${pokemon.statsSpecialDefence}`;
    document.querySelector("#statSpeed").textContent = `Speed: ${pokemon.statsSpeed}`;
    document.querySelector("#statTotal").textContent = `Total: ${calculatedStats}`;

// Waits for the modal to close so the background can be removed v
    document.querySelector("#detailView").addEventListener("close", closedModal);
}


function closedModal(){
    document.querySelector("#detailView").classList.remove
        ("NormalTheme", "FireTheme", "WaterTheme", "GrassTheme", "ElectricTheme", "IceTheme", "FightingTheme", "PoisonTheme", "GroundTheme", "FlyingTheme", "PsychicTheme", "BugTheme", "RockTheme", "GhostTheme", "DarkTheme", "DragonTheme", "SteelTheme", "FairyTheme");
    //Removes all the themes ^
}
