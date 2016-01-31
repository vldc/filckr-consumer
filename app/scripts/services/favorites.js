'use strict';

/*
 * Favorites storage API
 */
angular.module('flickrConsumerApp')
    .service('favorites', function ($localStorage) {

        var favorites = $localStorage.flickrFavorites || {};
        favorites.list = favorites.list || [];

        this.save = function () {
            $localStorage.flickrFavorites = favorites;
            return this;
        };

        this.getList = function () {
            return favorites.list;
        };

        this.add = function (item) {
            favorites.list.push(item);
            return this.save();
        };

        this.remove = function (item) {
            var index = favorites.list.indexOf(item);

            if (index > -1) {
                favorites.list.splice(index, 1);
            }
            return this.save();
        };

        this.addOrRemove = function (item) {
            var index = favorites.list.indexOf(item);
            var methodName = index > -1 ? 'remove' : 'add';

            return this[methodName](item);
        };
    });
