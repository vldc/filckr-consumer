'use strict';

angular.module('flickrConsumerApp')
    .factory('FlickrItem', function (favorites) {

        var FlickrItem = function (data) {
            _.extend(this, data);

            this.toggleFavorite = function () {
                // @TODO (2016-01-31): make it less ugly ;)
                this.isFavorite = !this.isFavorite;
                data.isFavorite = this.isFavorite;
                favorites.addOrRemove(data);
            };
        };

        return FlickrItem;
    });
