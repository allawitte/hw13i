angular
    .module('myApp')
    .factory('PokemonService', function($http) {

            return {

                getPokemons: function() {
                    return $http.get('data/pokemons.json');
                },
                getPokemon: function(pokemonId, cb) {
                    $http.get('data/pokemons.json')
                        .then(function(result){
                            result.data.forEach(function(item){
                                if ( item.id == pokemonId) {
                                    cb(item);
                                }
                            });
                            //return result.data;
                        });
                }
/*
                getPokemon: function(pokemonId) {
                    return $http.get('data/pokemon.' + pokemonId + '.json');
                }*/

            }

        }

    );
