import {ngBsSwitch} from '../src/ng-bs-switch';
import * as angular from 'angular';

describe('ngBsSwitch Test Suite', ()=> {
    var $compile;
    var $rootScope;
    beforeEach(angular.mock.module());
    beforeEach(inject(function() {
        
    }));

    it('should have width set on ng-bs-switch-container with default configuration', () => {
        var $scope = $rootScope.$new();
        var tElement = $compile(`
            <div><ng-bs-switch on-text="ON" off-text="OFF"></ng-bs-switch></div>
        `)($scope);

        $scope.$digest();
        console.log(tElement);
    });
});