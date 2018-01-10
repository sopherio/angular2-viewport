"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var directives_1 = require("./directives");
var services_1 = require("./services");
var ViewportModule = /** @class */ (function () {
    function ViewportModule() {
    }
    ViewportModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: services_1.SERVICES.slice(),
            declarations: directives_1.DIRECTIVES.slice(),
            bootstrap: [],
            exports: directives_1.DIRECTIVES.slice()
        })
    ], ViewportModule);
    return ViewportModule;
}());
exports.ViewportModule = ViewportModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdwb3J0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6QywyQ0FBMEM7QUFDMUMsdUNBQXNDO0FBVXRDO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBUjFCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxFQUNSO1lBQ0QsU0FBUyxFQUFNLG1CQUFRLFFBQUM7WUFDeEIsWUFBWSxFQUFNLHVCQUFVLFFBQUM7WUFDN0IsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQU0sdUJBQVUsUUFBQztTQUN4QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBOUIsQUFBOEIsSUFBQTtBQUFqQix3Q0FBYyIsImZpbGUiOiJ2aWV3cG9ydC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRElSRUNUSVZFUyB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogWy4uLlNFUlZJQ0VTXSxcclxuXHRkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTXSxcclxuXHRib290c3RyYXA6IFtdLFxyXG5cdGV4cG9ydHM6IFsuLi5ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRNb2R1bGUge30iXX0=
