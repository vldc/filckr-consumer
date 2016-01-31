'use strict';

describe('Service: favorites', function () {

    // load the service's module
    beforeEach(module('flickrConsumerApp'));

    // instantiate service
    var favorites;
    beforeEach(inject(function (_favorites_) {
        favorites = _favorites_;
    }));

    it('should do something', function () {
        expect(!!favorites).toBe(true);
    });

});
