export class Menu {
    navigateTo: string;
    display: string;
    visible: boolean;
    tooltip: string;

        constructor(navigateTo: string, display: string, visible: boolean, tooltip: string) {
        this.navigateTo = navigateTo;
        this.display = display;
        this.visible = visible;
        this.tooltip = tooltip;
    }
}