'use strict';

angular
    .module('myApp')
    .controller('PokemonListCtrl', function(PokemonService) {
    console.log('Pokemon List');
    var vm = this;

    vm.myOrderProperty = 'weight';
    vm.myQuery = '';

    PokemonService.getPokemons().then(function(pokemonData) {
        vm.pokemons = pokemonData.data;
    });

});
