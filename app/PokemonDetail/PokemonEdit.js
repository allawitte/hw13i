'use strict';

angular
    .module('myApp')
    .controller('PokemonEditCtrl', function ($state, $stateParams, PokemonService, $scope) {
        console.log('Edit');
        var vm = this;

        vm.format = 'M/d/yy h:mm:ss a';

        PokemonService.getPokemon($stateParams.pokemonId, function (response) {
            vm.pokemon = response;
        });
        $scope.setUpdate(vm.pokemon);
    });
/**
 * Created by HP on 11/21/2016.
 */
