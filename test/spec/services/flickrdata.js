'use strict';
// var _ = require('lodash');

describe('Service: flickrData', function () {

    beforeEach(module('flickrConsumerApp'));

    var flickrData;
    beforeEach(inject(function (_flickrData_) {
        flickrData = _flickrData_;
    }));

    it('should be an object', function () {
        expect(typeof flickrData === 'object').toBe(true);
    });

    describe('`items` property', function () {
        it('should be an array', function () {
            expect(flickrData.items instanceof Array).toBe(true);
        });
    });

    describe('`populateItems` method', function () {
        it('should be a function', function () {
            expect(typeof flickrData.populateItems === 'function').toBe(true);
        });

        it('should increase `items` property by elements of array passed as argument', function () {
            var startLength = flickrData.items.length;
            var testArray = ['a', 'b', 'c'];
            flickrData.populateItems(testArray);

            expect(flickrData.items.length).toEqual(startLength + testArray.length);
        });

        it('should fail silently when trying to add non-array as items', function () {
            var startLength = flickrData.items.length;
            var testArray = 'not an array, d\'oh!';
            flickrData.populateItems(testArray);

            expect(flickrData.items.length).toEqual(startLength);
        });
    });
});
