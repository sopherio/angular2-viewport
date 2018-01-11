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
var Subject_1 = require("rxjs/Subject");
var scroll_service_1 = require("./scroll.service");
var TriggerService = /** @class */ (function () {
    function TriggerService(scroll) {
        this._subj = new Subject_1.Subject();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyaWdnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFJdkMsbURBQWlEO0FBR2pEO0lBSUMsd0JBQVksTUFBcUI7UUFIekIsVUFBSyxHQUFHLElBQUksaUJBQU8sRUFBTSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSw2QkFBSSxHQUFYLFVBQVksR0FBbUI7UUFBL0IsaUJBSUM7UUFIQSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQVpXLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLUSw4QkFBYTtPQUpyQixjQUFjLENBYTFCO0lBQUQscUJBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSx3Q0FBYyIsImZpbGUiOiJzZXJ2aWNlcy90cmlnZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJpZ2dlclNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX3N1YmogPSBuZXcgU3ViamVjdDx7fT4oKTtcclxuXHRwdWJsaWMgb2JzZXJ2YWJsZSA9IHRoaXMuX3N1Ymouc2hhcmUoKTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2Nyb2xsOiBTY3JvbGxTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmJpbmQoc2Nyb2xsLm9uU2Nyb2xsKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBiaW5kKG9iczogT2JzZXJ2YWJsZTx7fT4pOlN1YnNjcmlwdGlvbiB7XHJcblx0XHRyZXR1cm4gb2JzLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3N1YmoubmV4dCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il19
