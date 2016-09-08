#ng-bs-switch

A switch directive for angular 1.5, with bootstrap

This directive has no other dependencies except angular and boostrap.

##Usage

###Install

```
npm install @ngfancy/ng-bs-switch --save
```

import `ngBsSwitch` as angular module name.

```js
import {ngBsSwitch} from 'ng-bs-switch';

angular.module('app', [ngBsSwitch])
    .component('app', {
        controller: () => {
            this.checked = false;
        },
        template: require('./app.html')
    });
```

```html
<ng-bs-switch on-text="'ON'" off-text="'OFF'" ng-model="$ctrl.checked"></ng-bs-switch>
```