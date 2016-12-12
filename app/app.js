'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngMessages',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.home'
]).
    config(function ($stateProvider) {

        var view1State = {
            name: 'view1',
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        };

        var view2State = {
            name: 'view2',
            url: '/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        };

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HometCtrl as vm'
        };

        var pokeListState = {
            name: 'pokeList',
            url: 'list',
            parent: 'home',
            views: {
                "": {
                    templateUrl: 'PokemonList/PokemonList.html',
                    controller: 'PokemonListCtrl as vm'
                }
            }
        };
        var createPokemonState = {
            name: 'createNewPokemon',
            url: 'new',
            parent: 'home',
            templateUrl: 'CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl as vm'
        };
        var pokemonDetailState = {
            name: 'detail',
            parent: 'home',
            url: 'pokemons/:pokemonId',
            templateUrl: 'PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl as vm'
        };

        var pokemonDetailEditState = {
            name: 'edit',
            parent: 'detail',
            url: '/edit/:pokemonId',
            templateUrl: 'PokemonDetail/PokemonEdit.html',
            controller: 'PokemonEditCtrl as vm'
        };


        $stateProvider
            .state(pokeListState)
            .state(homeState)
            .state(createPokemonState)
            .state(pokemonDetailState)
            .state(pokemonDetailEditState);
    });
