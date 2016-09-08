import {ngBsSwitch} from '../src/ng-bs-switch';
import * as angular from 'angular';

import '../src/ng-bs-switch.scss';
import './index.scss';

declare var require: any;

angular.module('appModule', [ngBsSwitch])
    .component('app', {
        controller: function() {
            this.checked = true;
            this.size = 'lg';
            this.labelClass = 'warning';
            this.labelOnText = 'ON';
            this.labelOffText = 'OFF';
        },
        template: require('./app.html')
    });