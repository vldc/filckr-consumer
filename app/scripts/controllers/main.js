'use strict';

angular.module('flickrConsumerApp')
    .controller('MainCtrl', function ($http, flickrData) {
        this.data = flickrData;
    });
