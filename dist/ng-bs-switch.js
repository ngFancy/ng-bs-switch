(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(1);
	var NgBsSwitch = (function () {
	    function NgBsSwitch($timeout, $element) {
	        this.$timeout = $timeout;
	        this.$element = $element;
	        this.ngModelCtrl = null;
	        this.animated = false;
	    }
	    Object.defineProperty(NgBsSwitch.prototype, "labelDimension", {
	        get: function () {
	            return this.labelWidth ? this.labelWidth + 'px' : 'auto';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgBsSwitch.prototype, "containerDimension", {
	        get: function () {
	            return this.containerWidth ? this.containerWidth + 'px' : 'auto';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgBsSwitch.prototype, "wrapperOffset", {
	        get: function () {
	            return this.isChecked ? 0 + '' : (0 - this.labelWidth) + 'px';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgBsSwitch.prototype.resize = function () {
	        this.labelWidth = 0;
	        this.buttonWidth = 0;
	        this.containerWidth = 0;
	        this.$timeout(this.calculateDimension.bind(this));
	    };
	    NgBsSwitch.prototype.calculateDimension = function () {
	        var rootElement = this.$element[0];
	        if (!this.labelWidth) {
	            var onLabelWidth = rootElement.querySelector('.on-text').clientWidth;
	            var offLabelWidth = rootElement.querySelector('.off-text').clientWidth;
	            this.labelWidth = onLabelWidth > offLabelWidth ? onLabelWidth : offLabelWidth;
	        }
	        if (!this.buttonWidth) {
	            this.buttonWidth = rootElement.querySelector('.switch-button').clientWidth;
	        }
	        this.containerWidth = this.labelWidth + this.buttonWidth;
	    };
	    NgBsSwitch.prototype.bindNgModelCtrl = function (ngModelCtrl) {
	        var _this = this;
	        this.ngModelCtrl = ngModelCtrl;
	        this.ngModelCtrl.$render = function () {
	            _this.isChecked = Boolean(_this.ngModelCtrl.$modelValue);
	            if (!_this.animated) {
	                _this.animated = true;
	            }
	        };
	        this.$timeout(this.calculateDimension.bind(this));
	    };
	    NgBsSwitch.prototype.onClick = function () {
	        if (!this.disabled) {
	            this.isChecked = !this.isChecked;
	            this.ngModelCtrl.$setViewValue(this.isChecked);
	        }
	    };
	    NgBsSwitch.prototype.$onInit = function () {
	        this.isChecked = angular.isUndefined(this.isChecked) ? false : this.isChecked;
	        this.disabled = angular.isUndefined(this.disabled) ? false : this.disabled;
	        this.offTextStyle = angular.isUndefined(this.offTextStyle) ? 'default' : this.offTextStyle;
	        this.onTextStyle = angular.isUndefined(this.onTextStyle) ? 'primary' : this.onTextStyle;
	    };
	    NgBsSwitch.prototype.$onChanges = function (changes) {
	        if (changes.buttonWidth || changes.labelWidth || changes.size || changes.offText || changes.onText) {
	            if (angular.isUndefined(this.containerWidth)) {
	                return;
	            }
	            this.$timeout(this.resize.bind(this));
	        }
	    };
	    NgBsSwitch.prototype.$onDestroy = function () {
	        if (typeof this.ngModelCtrl !== 'undefined') {
	            this.ngModelCtrl = null;
	        }
	    };
	    NgBsSwitch.$inject = ['$timeout', '$element'];
	    return NgBsSwitch;
	}());
	exports.NgBsSwitch = NgBsSwitch;
	exports.ngBsSwitch = angular.module('ngFancy.ngBsSwitch', [])
	    .directive('ngBsSwitch', function () {
	    return {
	        restrict: 'E',
	        controller: NgBsSwitch,
	        controllerAs: '$ctrl',
	        template: "\n                <span class=\"ng-bs-switch-container\" \n                      ng-click=\"$ctrl.onClick()\" \n                      ng-class=\"[{checked: $ctrl.isChecked, disabled: $ctrl.disabled}, $ctrl.size]\"\n                      ng-style=\"{width: $ctrl.containerDimension}\"\n                      tabindex=\"{{$ctrl.disabled ? '-1': '0'}}\"><!--\n                 --><span class=\"switch-wrapper\"\n                          ng-class=\"{animated: $ctrl.animated}\"\n                          ng-style=\"{left: $ctrl.wrapperOffset}\"><!--\n                     --><span class=\"on-text switch-label\"\n                              ng-class=\"$ctrl.onTextStyle\"\n                              ng-style=\"{width: $ctrl.labelDimension}\">{{$ctrl.onText}}</span><!--\n                     --><span class=\"switch-button\"></span><!--\n                     --><span class=\"off-text switch-label\"\n                              ng-class=\"$ctrl.offTextStyle\"\n                              ng-style=\"{width: $ctrl.labelDimension}\">{{$ctrl.offText}}</span><!--\n                 --></span><!--\n             --></span>\n            ",
	        scope: {},
	        bindToController: {
	            'offText': '<?',
	            'onText': '<?',
	            'onTextStyle': '<?',
	            'offTextStyle': '<?',
	            'buttonWidth': '<?',
	            'labelWidth': '<?',
	            'size': '<?',
	            'disabled': '<?'
	        },
	        require: ['ngModel', 'ngBsSwitch'],
	        link: function (scope, element, attr, ctrls) {
	            var ngModelCtrl = ctrls[0];
	            var ngBsSwitchCtrl = ctrls[1];
	            ngBsSwitchCtrl.bindNgModelCtrl(ngModelCtrl);
	        }
	    };
	})
	    .name;
	

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng-bs-switch.map