'use strict';

describe('Service: flickrFeedUrl', function () {

    // load the service's module
    beforeEach(module('flickrConsumerApp'));

    // instantiate service
    var flickrFeedUrl;
    beforeEach(inject(function (_flickrFeedUrl_) {
        flickrFeedUrl = _flickrFeedUrl_;
    }));

    it('should be defined', function () {
        expect(flickrFeedUrl).toBeDefined();
    });

    it('should be a string', function () {
        expect(typeof flickrFeedUrl === 'string').toBe(true);
    });

});
