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

###API

all the attributes are one-way binding

`on-text`

positive text on label

`off-text`

negative text on label

`on-text-style`

positive label class, can be `default` `primary` `info` `success` `warning` `error`, default is `primary`

`off-text-style`

negative label class, can be `default` `primary` `info` `success` `warning` `error`, default is `default`

`button-width`

custom button width, unit is px, value type is integer

`label-width`

custom label width, unit is px, value type is integer

`size`

the switch size, similar to button sizing class, can be `lg` `sm` `xs`, default is none of these

`disabled`

disable the switch