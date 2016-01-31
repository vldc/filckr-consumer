'use strict';

angular.module('flickrConsumerApp')
    .service('flickrData', function ($http, FlickrItem, favorites, flickrFeedUrl) {
        this.items = [];

        this.populateItems = function (items) {
            if (!_.isArray(items)) {
                return;
            }

            items.forEach(function (itemData) {
                this.items.push(new FlickrItem(itemData));
            }.bind(this));
        };

        this.populateItems(_.clone(favorites.getList()));

        $http.jsonp(flickrFeedUrl)
            .then(function (response) {
                 this.populateItems(response.data.items);
            }.bind(this));
    });
