"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <a [routerLink]=\"['/']\">Home</a>\n    <a [routerLink]=\"['/about']\">About</a>\n    <div class=\"outer-outlet\">\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "<h2>Home</h2>"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: "\n      <h2>About</h2>\n      <a [routerLink]=\"['/about']\">Home</a>\n      <a [routerLink]=\"['/about/item']\">Item</a>\n      <div class=\"inner-outlet\">\n        <router-outlet></router-outlet>\n      </div>\n      \n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
var AboutHomeComponent = (function () {
    function AboutHomeComponent() {
    }
    AboutHomeComponent = __decorate([
        core_1.Component({
            selector: 'about-home',
            template: "<h3>About Home</h3>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutHomeComponent);
    return AboutHomeComponent;
}());
exports.AboutHomeComponent = AboutHomeComponent;
var AboutItemComponent = (function () {
    function AboutItemComponent() {
    }
    AboutItemComponent = __decorate([
        core_1.Component({
            selector: 'about-item',
            template: "<h3>About Item</h3>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutItemComponent);
    return AboutItemComponent;
}());
exports.AboutItemComponent = AboutItemComponent;
var Item1 = (function () {
    function Item1() {
    }
    Item1 = __decorate([
        core_1.Component({
            template: '<h3>Item 1!</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], Item1);
    return Item1;
}());
exports.Item1 = Item1;
var Item2 = (function () {
    function Item2() {
    }
    Item2 = __decorate([
        core_1.Component({
            template: '<h3>Item 2!</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], Item2);
    return Item2;
}());
exports.Item2 = Item2;
//# sourceMappingURL=app.component.js.map