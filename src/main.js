import {getPokemonsByName} from './data.js';
import {getPokemonsByType} from './data.js';
import {getAllTypes} from './data.js';
import data from './data/pokemon/pokemon.js';

//sacar arreglo de pokemons y lo pone en pokemons
const pokemons = data.pokemon;

//Asigna los tipos de pokemon
const fillTypeDropdown = (pokemons) =>{
    let totalTypes = getAllTypes(pokemons);
    let dp= document.getElementById("tipodepokemon");
   
    for (let i = 0; i< totalTypes.length;i++) {
        //console.log(key);
        let option = document.createElement("OPTION");
        option.innerHTML = totalTypes[i];
        dp.options.add(option);
    }
    
}

//mandar los pokemon que pertenecen al tipo del primer dropdown
const fillPokemonDropdown=(pokemons)=>{
    //console.log("aqui estoy mandando los pokemon del tipo seleccionado");
    //console.log(pokemons);
    document.getElementById("dropdownPokemon").options.length = 0; //limpia dropdown
    let dpp = document.getElementById("dropdownPokemon");
    pokemons.forEach(element => {
        let option = document.createElement("OPTION");
        option.innerHTML = element.name;
        dpp.options.add(option);
    });//console.log(element.num+":"+element.name));
    
}

//esta mostrando el pokemon seleccionado/buscado
const showPokemon = (pokemon) =>{
    //console.log("chido "+pokemon);
    document.getElementById("pokemonInicio").innerHTML = pokemon.name.toUpperCase();
    document.getElementById("types-id").innerHTML= "Type: "+pokemon.type;
    document.getElementById("generation").innerHTML= "Generation: "+pokemon.generation.name;
    document.getElementById("imgPokemon").src = pokemon.img;
    document.getElementById("numPokemon").innerHTML = "Num: "+pokemon.num;
    document.getElementById("detailsPokemon").innerHTML = pokemon.about; 
    document.getElementById("weakness").innerHTML= pokemon.weaknesses.join(', ');
    document.getElementById("resistant").innerHTML= pokemon.resistant.join(', ');
}

//muestra los tipos de pokemon y el primer pokemon de ese grupo
document.getElementById("tipodepokemon").addEventListener("change",(e)=>{
    let p = getPokemonsByType(pokemons,e.target.value);
    fillPokemonDropdown(p);
    showPokemon(p[0]);
})

//listado de pokemones del tipo seleccionado
document.getElementById("dropdownPokemon").addEventListener("change",(e)=>{
    let pSelected = getPokemonsByName(pokemons,e.target.value);
    showPokemon(pSelected);
})

//busqueda por nombre
document.getElementById("search").addEventListener("click",()=>{
    let name= document.getElementById("searchName");
    let nameValue= name.value;
    const pokemon = getPokemonsByName(pokemons, nameValue);
    showPokemon(pokemon);
})

//Muestra Galeria aleatoria
window.onload = function () {
    //Variables
    const imagenesp = [];
    /*Crear un numero aleaotrio, elegir imagenes al azar */
    var numeroAleatorio = 0;
    let nombrePokemonesGaleria=[];
    for (let i=0; i<25; i++){
        numeroAleatorio = Math.floor(Math.random() * 250);
        /*guardar la imagen*/
        const pokemon = pokemons[numeroAleatorio];
        console.log(pokemon);
        imagenesp[i] = pokemon.img;
        nombrePokemonesGaleria[i]=pokemon.name.toUpperCase();
    }
    const tiempo = 1000;
    let posicionActual = 0;
    /*Esta variable almacena un objeto, por eso se declara con $ */
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imgCarrousel = document.querySelector('#imgCarrousel');
    let $parrafoNombre= document.querySelector('#type_galeria');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;
    // Funciones
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= imagenesp.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenesp.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    /*Aquí es donde se mete la imagen 
    ese div cambia su background
    vas a air a imagenesp actual*/
    function renderizarImagen () {
        $imgCarrousel.src = imagenesp[posicionActual];
        $parrafoNombre.innerHTML= nombrePokemonesGaleria[posicionActual];
    }
    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, tiempo);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
    }
    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }
    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}

//las funciones que cargan al inicio de la pagina deben ir al ultimo del archivo
fillTypeDropdown(pokemons);
fillPokemonDropdown(pokemons);
showPokemon(pokemons[0]);
/*
console.log(getPokemonsByName(pokemons, "eevee")); //buscando un nombre
console.log(getPokemonsByType(pokemons, "poison")); //buscando un tipo
console.log("imprimire el numero de pokemon: "+ pokemons.num);
*/
