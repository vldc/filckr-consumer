'use strict';

describe('Factory: FlickrItem', function () {

    // load the service's module
    beforeEach(module('flickrConsumerApp'));

    // instantiate service
    var FlickrItem;
    var flickrItem;
    beforeEach(inject(function (_FlickrItem_) {
        FlickrItem = _FlickrItem_;
        flickrItem = new FlickrItem({});
    }));

    it('should be function', function () {
        expect(typeof FlickrItem === 'function').toBe(true);
    });

    describe('instance', function () {
        it('should be an object', function () {
            expect(typeof flickrItem === 'object').toBe(true);
        });

        describe('`toggleFavorite` method', function () {

            it('should be a function', function () {
                expect(typeof flickrItem.toggleFavorite === 'function').toBe(true);
            });

            it('should set `isFavorite` property to true, when `isFavorite` is undefined', function () {
                flickrItem.isFavorite = undefined;
                flickrItem.toggleFavorite();
                expect(flickrItem.isFavorite).toBe(true);
            });

            it('should set `isFavorite` property to true, when `isFavorite` is false', function () {
                flickrItem.isFavorite = false;
                flickrItem.toggleFavorite();
                expect(flickrItem.isFavorite).toBe(true);
            });

            it('should set `isFavorite` property to false, when `isFavorite` is true', function () {
                flickrItem.isFavorite = true;
                flickrItem.toggleFavorite();
                expect(flickrItem.isFavorite).toBe(false);
            });
        });
    });

});
