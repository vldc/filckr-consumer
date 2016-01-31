'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(module('flickrConsumerApp'));

    var MainCtrl,
        scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    describe('Controller: MainCtrl', function () {

        it('should be an object', function () {
            expect(typeof MainCtrl === 'object').toBe(true);
        });

        describe('`data` property', function () {
            it('should be an object', function () {
                expect(typeof MainCtrl.data === 'object').toBe(true);
            });

            describe('`data.items` property', function () {
                it('should be an array', function () {
                    expect(MainCtrl.data.items instanceof Array).toBe(true);
                });
            });
        });
    });
});
