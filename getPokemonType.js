var getPokemonType = (input) => {
    //take the input and split on each new line to be able to individually check pokemon type
    var fs = require ("fs")

    let pokemonList = fs.readFileSync(input).toString().split('\n')

    
    //Individual fetch requests for every pokemon input
    pokeMonList.forEach(pokemon =>  function (pokemon) {
        //fetches the data from the pokemon API based on the given pokemon and returns it in 
        //a readable json file.
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(response => response.json)

        //this function will take the pokemon and check for which type/types the pokemon is and return the result.
        .then(function (inputPokemon) {
            let returnPokemon = inputPokemon + ': ';
            for (let i = 0; i < inputPokemon[types].length; i++){
                
                //if there is only one type just appends to the string without a comma
                if (inputPokemon[types].length <= 1){
                    returnPokemon += inputPokemon['types'][i]['type']['name']
                }

                //if there is more than one type, but this is the last type, it just appends to the string
                else if (inputPokemon[types].length > 1 && inputPokemon[types].length -1  === i ){
                    returnPokemon += inputPokemon['types'][i]['type']['name']
                }
                //adds a comma and a space if neither of the above conditions were met.
                else {
                    returnPokemon += inputPokemon['types'][i]['type']['name'] + ', '
                }
            }
            //after the pokemon and the types are appended to the string, logs the output
           console.log(returnPokemon)
        })

    }
    )
    
}
