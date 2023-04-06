let pokemonList = [
    
                    {
                        name:'Eevee', 
                        height:'0.3m', 
                        weight:'6.5kg', 
                        type:'normal'
                    },
                    
                    {
                        name:'Umbreon', 
                        height:'1m', 
                        weight:'27kg', 
                        type:'dark'
                    },

                    {
                        name:'Flareon', 
                        height:'0.9m', 
                        weight:'25kg', 
                        type:'fire'
                    },

                    {
                        name:'Glaceon', 
                        height:'0.8m',
                        weight:'25.9kg', 
                        type:'ice'
                    },

                    {
                        name:'Leafeon', 
                        height:'1m', 
                        weight:'25.5kg', 
                        type:'grass'
                    },

                    {
                        name:'Sylveon', 
                        height:'1m', 
                        weight:'23.5kg', 
                        type:'fairy'
                    } 
                ];

                for (let i = 0; i < pokemonList.length; i++) {
                    let pokemonText = '<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')';
                    if (pokemonList[i].height > 1 ) {
                        pokemonText += ' - wow that is big';
                    }
                    pokemonText += '</p>';
                    document.write(pokemonText);
                }

                function add(pokemon) {
                    if (
                        typeof pokemon === "object" &&
                        "name" in pokemon 
                    ) {
                        pokemonList.push(pokemon);
                    } else {
                        console.log("Invalid pokemon object");
                    }
                }
            
                function getAll() {
                    return pokemonList;
                }
            
                function findByName(name) {
                    return pokemonList.filter(function(pokemon) {
                        return pokemon.name === name;
                    });
                }

                let pokemonRepository = (function () {
                    let pokemonList = [];
                  
                    function add(pokemon) {
                      pokemonList.push(pokemon);
                    }
                  
                    function getAll() {
                      return pokemonList;
                    }
                  
                    return {
                      add: add,
                      getAll: getAll
                    };
                  })();
                  console.log(pokemonRepository.getAll()); 
                  pokemonRepository.add({ name: 'Pikachu' });
                  console.log(pokemonRepository.getAll()); 