import * as angular from 'angular';
export declare class NgBsSwitch implements angular.IComponentController {
    private $timeout;
    private $element;
    static $inject: string[];
    isChecked: boolean;
    isDisabled: boolean;
    ngModelCtrl: angular.INgModelController;
    offTextStyle: string;
    onTextStyle: string;
    size: 'lg' | 'sm' | 'xs' | '';
    labelWidth: number;
    buttonWidth: number;
    containerWidth: number;
    animated: boolean;
    readonly labelDimension: string;
    readonly containerDimension: string;
    readonly wrapperOffset: string;
    private rootElement;
    constructor($timeout: any, $element: any);
    resize(): void;
    calculateDimension(): void;
    bindNgModelCtrl(ngModelCtrl: angular.INgModelController): void;
    onClick(): void;
    $onInit(): void;
    $onChanges(changes: any): void;
    $onDestroy(): void;
}
export declare const ngBsSwitch: string;
