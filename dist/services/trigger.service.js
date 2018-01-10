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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var scroll_service_1 = require("./scroll.service");
var TriggerService = /** @class */ (function () {
    function TriggerService(scroll) {
        this._subj = new rxjs_1.Subject();
        this.observable = this._subj.share();
        this.bind(scroll.onScroll);
    }
    TriggerService.prototype.bind = function (obs) {
        var _this = this;
        return obs.subscribe(function () {
            _this._subj.next();
        });
    };
    TriggerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [scroll_service_1.ScrollService])
    ], TriggerService);
    return TriggerService;
}());
exports.TriggerService = TriggerService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyaWdnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw2QkFBeUQ7QUFFekQsbURBQWlEO0FBR2pEO0lBSUMsd0JBQVksTUFBcUI7UUFIekIsVUFBSyxHQUFHLElBQUksY0FBTyxFQUFNLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLDZCQUFJLEdBQVgsVUFBWSxHQUFtQjtRQUEvQixpQkFJQztRQUhBLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBWlcsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUtRLDhCQUFhO09BSnJCLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQWJELEFBYUMsSUFBQTtBQWJZLHdDQUFjIiwiZmlsZSI6InNlcnZpY2VzL3RyaWdnZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmlnZ2VyU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfc3ViaiA9IG5ldyBTdWJqZWN0PHt9PigpO1xyXG5cdHB1YmxpYyBvYnNlcnZhYmxlID0gdGhpcy5fc3Viai5zaGFyZSgpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihzY3JvbGw6IFNjcm9sbFNlcnZpY2UpIHtcclxuXHRcdHRoaXMuYmluZChzY3JvbGwub25TY3JvbGwpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGJpbmQob2JzOiBPYnNlcnZhYmxlPHt9Pik6U3Vic2NyaXB0aW9uIHtcclxuXHRcdHJldHVybiBvYnMuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0dGhpcy5fc3Viai5uZXh0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
