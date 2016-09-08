import * as angular from 'angular';

export class NgBsSwitch implements angular.IComponentController {

    static $inject = ['$timeout', '$element'];

    isChecked: boolean;
    isDisabled: boolean;

    ngModelCtrl: angular.INgModelController = null;

    offTextStyle: string;
    onTextStyle: string;

    size: 'lg' | 'sm' | 'xs' | '';

    labelWidth: number;
    buttonWidth: number;
    containerWidth: number;

    animated: boolean = false;

    get labelDimension(): string {
        return this.labelWidth ? this.labelWidth + 'px' : 'auto';
    }

    get containerDimension(): string {
        return this.containerWidth ? this.containerWidth + 'px' : 'auto';
    }

    get wrapperOffset(): string {
        return this.isChecked ? 0 + '' : (0 - this.labelWidth) + 'px';
    }

    private rootElement: HTMLElement;

    constructor(private $timeout, private $element) {
        console.log('new instance');
    }

    resize() {
        this.labelWidth = 0;
        this.buttonWidth = 0;
        this.containerWidth = 0;
        this.$timeout(this.calculateDimension.bind(this));
    }

    calculateDimension() {
        var rootElement = this.$element[0];
        if (!this.labelWidth) {
            let onLabelWidth = rootElement.querySelector('.on-text').clientWidth;
            let offLabelWidth = rootElement.querySelector('.off-text').clientWidth;
            this.labelWidth = onLabelWidth > offLabelWidth ? onLabelWidth : offLabelWidth;
        }
        if (!this.buttonWidth) {
            this.buttonWidth = rootElement.querySelector('.switch-button').clientWidth;
        }
        this.containerWidth = this.labelWidth + this.buttonWidth;
        console.log(this.labelWidth, this.buttonWidth, this.containerWidth);
    }

    bindNgModelCtrl(ngModelCtrl: angular.INgModelController) {
        this.ngModelCtrl = ngModelCtrl;
        this.ngModelCtrl.$render = () => {
            this.isChecked = Boolean(this.ngModelCtrl.$modelValue);
            if (!this.animated) {
                this.animated = true;
            }
        };

        this.$timeout(this.calculateDimension.bind(this));
    }

    onClick() {
        if (!this.isDisabled) {
            this.isChecked = !this.isChecked;
            this.ngModelCtrl.$setViewValue(this.isChecked);
        }
    }

    $onInit() {
        this.isChecked = angular.isUndefined(this.isChecked) ? false : this.isChecked;
        this.isDisabled = angular.isUndefined(this.isDisabled) ? false : this.isDisabled;

        this.offTextStyle = angular.isUndefined(this.offTextStyle) ? 'default' : this.offTextStyle;
        this.onTextStyle = angular.isUndefined(this.onTextStyle) ? 'primary' : this.onTextStyle;
    }

    $onChanges(changes: any) {
        if (changes.buttonWidth || changes.labelWidth || changes.size || changes.offText || changes.onText) {
            if (angular.isUndefined(this.containerWidth)) {
                return;
            }
            this.$timeout(this.resize.bind(this));
        }
    }

    $onDestroy() {
        if (typeof this.ngModelCtrl !== 'undefined') {
            this.ngModelCtrl = null;
        }
    }

}

export const ngBsSwitch = angular.module('ngFancy.ngBsSwitch', [])
    .directive('ngBsSwitch', () => {
        return {
            restrict: 'E',
            controller: NgBsSwitch,
            controllerAs: '$ctrl',
            template: `
                <span class="ng-bs-switch-container" 
                      ng-click="$ctrl.onClick()" 
                      ng-class="[{checked: $ctrl.isChecked}, $ctrl.size]"
                      ng-style="{width: $ctrl.containerDimension}"
                      tabindex="0"><!--
                 --><span class="switch-wrapper"
                          ng-class="{animated: $ctrl.animated}"
                          ng-style="{left: $ctrl.wrapperOffset}"><!--
                     --><span class="on-text switch-label"
                              ng-class="$ctrl.onTextStyle"
                              ng-style="{width: $ctrl.labelDimension}">{{$ctrl.onText}}</span><!--
                     --><span class="switch-button"></span><!--
                     --><span class="off-text switch-label"
                              ng-class="$ctrl.offTextStyle"
                              ng-style="{width: $ctrl.labelDimension}">{{$ctrl.offText}}</span><!--
                 --></span><!--
             --></span>
            `,
            scope: {},
            bindToController: {
                'offText': '<?',
                'onText': '<?',
                'onTextStyle': '<?',
                'offTextStyle': '<?',
                'buttonWidth': '<?',
                'labelWidth': '<?',
                'size': '<?'
            },
            require: ['ngModel', 'ngBsSwitch'],
            link: (scope, element, attr, ctrls) => {
                let ngModelCtrl = ctrls[0];
                let ngBsSwitchCtrl = ctrls[1];
                ngBsSwitchCtrl.bindNgModelCtrl(ngModelCtrl);
            }
        };
    })
    .name;