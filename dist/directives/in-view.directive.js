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
var lodash_1 = require("lodash");
var services_1 = require("../services");
var SELECTOR = 'vp-in-view';
var InViewDirective = /** @class */ (function () {
    function InViewDirective(trigger, el) {
        this.trigger = trigger;
        this.el = el;
        this._config = new Config({});
        this.event = new core_1.EventEmitter();
    }
    InViewDirective_1 = InViewDirective;
    Object.defineProperty(InViewDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (value) {
            var _this = this;
            lodash_1.forEach(value, function (val, key) {
                _this._config[key] = val;
            });
        },
        enumerable: true,
        configurable: true
    });
    InViewDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        lodash_1.defer(function () {
            _this.subs = _this.trigger.observable.subscribe(InViewDirective_1.handler.bind(_this));
            InViewDirective_1.handler.call(_this);
        });
    };
    InViewDirective.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    InViewDirective.prototype.isInViewPort = function () {
        var rect = this.el.nativeElement.getBoundingClientRect();
        return (rect.top >= 0 - this._config.marginTop &&
            rect.left >= 0 - this._config.marginLeft &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + this._config.marginBottom &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + this._config.marginRight);
    };
    InViewDirective.handler = function () {
        if (this.isInViewPort()) {
            this.event.emit();
            !this.config.infinite && this.subs.unsubscribe();
        }
    };
    __decorate([
        core_1.Output(SELECTOR),
        __metadata("design:type", Object)
    ], InViewDirective.prototype, "event", void 0);
    __decorate([
        core_1.Input(SELECTOR + '-config'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InViewDirective.prototype, "config", null);
    InViewDirective = InViewDirective_1 = __decorate([
        core_1.Directive({
            selector: "[" + SELECTOR + "]",
            exportAs: SELECTOR
        }),
        __metadata("design:paramtypes", [services_1.TriggerService,
            core_1.ElementRef])
    ], InViewDirective);
    return InViewDirective;
    var InViewDirective_1;
}());
exports.InViewDirective = InViewDirective;
var Config = /** @class */ (function () {
    function Config(value) {
        var _this = this;
        this.marginTop = 0;
        this.marginBottom = 0;
        this.marginLeft = 0;
        this.marginRight = 0;
        this.infinite = false;
        lodash_1.forEach(value, function (val, key) {
            _this[key] = val;
        });
    }
    Object.defineProperty(Config.prototype, "margin", {
        set: function (value) {
            this.marginHorizontal = value;
            this.marginVertical = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "marginVertical", {
        set: function (value) {
            this.marginTop = value;
            this.marginBottom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "marginHorizontal", {
        set: function (value) {
            this.marginLeft = value;
            this.marginRight = value;
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaW4tdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUY7QUFFbkYsaUNBQXdDO0FBRXhDLHdDQUE2QztBQUU3QyxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7QUFpQjlCO0lBTUMseUJBQ1MsT0FBdUIsRUFDeEIsRUFBYztRQURiLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQZCxZQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBT2xDLENBQUM7d0JBVlcsZUFBZTtJQWEzQixzQkFBSSxtQ0FBTTthQU1WO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDcEIsQ0FBQzthQVJELFVBQVcsS0FBSztZQURoQixpQkFLQztZQUhBLGdCQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFNRCx5Q0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKQSxjQUFLLENBQUM7WUFDTCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUNsRixpQkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUV6RCxNQUFNLENBQUMsQ0FDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ3hDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ3hHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQ3BHLENBQUM7SUFDSCxDQUFDO0lBRWMsdUJBQU8sR0FBdEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELENBQUM7SUFDRixDQUFDO0lBL0NEO1FBREMsYUFBTSxDQUFDLFFBQVEsQ0FBQzs7a0RBQ2lCO0lBVWxDO1FBREMsWUFBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7OztpREFLM0I7SUFqQlcsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQUksUUFBUSxNQUFHO1lBQ3pCLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLENBQUM7eUNBUWlCLHlCQUFjO1lBQ3BCLGlCQUFVO09BUlYsZUFBZSxDQW1EM0I7SUFBRCxzQkFBQzs7Q0FuREQsQUFtREMsSUFBQTtBQW5EWSwwQ0FBZTtBQXFENUI7SUFPQyxnQkFBWSxLQUFhO1FBQXpCLGlCQUlDO1FBVk0sY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLGdCQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDdkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBSSwwQkFBTTthQUFWLFVBQVcsS0FBYTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQWM7YUFBbEIsVUFBbUIsS0FBYTtZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFnQjthQUFwQixVQUFxQixLQUFhO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0YsYUFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9pbi12aWV3LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWZlciwgZm9yRWFjaCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBUcmlnZ2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuXHJcbmNvbnN0IFNFTEVDVE9SID0gJ3ZwLWluLXZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcclxuXHRpbmZpbml0ZT86IGJvb2xlYW47XHJcblx0bWFyZ2luPzogbnVtYmVyO1xyXG5cdG1hcmdpbkhvcml6b250YWw/OiBudW1iZXI7XHJcblx0bWFyZ2luVmVydGljYWw/OiBudW1iZXI7XHJcblx0bWFyZ2luVG9wPzogbnVtYmVyO1xyXG5cdG1hcmdpbkJvdHRvbT86IG51bWJlcjtcclxuXHRtYXJnaW5MZWZ0PzogbnVtYmVyO1xyXG5cdG1hcmdpblJpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogYFske1NFTEVDVE9SfV1gLFxyXG5cdGV4cG9ydEFzOiBTRUxFQ1RPUlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5WaWV3RGlyZWN0aXZlIHtcclxuXHRwcml2YXRlIF9jb25maWcgPSBuZXcgQ29uZmlnKHt9KTtcclxuXHRAT3V0cHV0KFNFTEVDVE9SKVxyXG5cdHB1YmxpYyBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHRyaWdnZXI6IFRyaWdnZXJTZXJ2aWNlLFxyXG5cdFx0cHVibGljIGVsOiBFbGVtZW50UmVmXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRASW5wdXQoU0VMRUNUT1IgKyAnLWNvbmZpZycpXHJcblx0c2V0IGNvbmZpZyh2YWx1ZSkge1xyXG5cdFx0Zm9yRWFjaCh2YWx1ZSwgKHZhbCwga2V5KSA9PiB7XHJcblx0XHRcdHRoaXMuX2NvbmZpZ1trZXldID0gdmFsO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY29uZmlnKCk6SUNvbmZpZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnXHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRkZWZlcigoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3VicyA9IHRoaXMudHJpZ2dlci5vYnNlcnZhYmxlLnN1YnNjcmliZShJblZpZXdEaXJlY3RpdmUuaGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHRcdFx0SW5WaWV3RGlyZWN0aXZlLmhhbmRsZXIuY2FsbCh0aGlzKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNJblZpZXdQb3J0KCk6Ym9vbGVhbiB7XHJcblx0XHR2YXIgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRyZWN0LnRvcCA+PSAwIC0gdGhpcy5fY29uZmlnLm1hcmdpblRvcCAmJlxyXG5cdFx0XHRyZWN0LmxlZnQgPj0gMCAtIHRoaXMuX2NvbmZpZy5tYXJnaW5MZWZ0ICYmXHJcblx0XHRcdHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyB0aGlzLl9jb25maWcubWFyZ2luQm90dG9tICYmXHJcblx0XHRcdHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyB0aGlzLl9jb25maWcubWFyZ2luUmlnaHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBoYW5kbGVyKHRoaXM6IEluVmlld0RpcmVjdGl2ZSk6dm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc0luVmlld1BvcnQoKSkge1xyXG5cdFx0XHR0aGlzLmV2ZW50LmVtaXQoKTtcclxuXHRcdFx0IXRoaXMuY29uZmlnLmluZmluaXRlICYmIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQ29uZmlnIGltcGxlbWVudHMgSUNvbmZpZyB7XHJcblx0cHVibGljIG1hcmdpblRvcCA9IDA7XHJcblx0cHVibGljIG1hcmdpbkJvdHRvbSA9IDA7XHJcblx0cHVibGljIG1hcmdpbkxlZnQgPSAwO1xyXG5cdHB1YmxpYyBtYXJnaW5SaWdodCA9IDA7XHJcblx0cHVibGljIGluZmluaXRlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHZhbHVlOklDb25maWcpIHtcclxuXHRcdGZvckVhY2godmFsdWUsICh2YWwsIGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzW2tleV0gPSB2YWw7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldCBtYXJnaW4odmFsdWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5tYXJnaW5Ib3Jpem9udGFsID0gdmFsdWU7XHJcblx0XHR0aGlzLm1hcmdpblZlcnRpY2FsID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgbWFyZ2luVmVydGljYWwodmFsdWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5tYXJnaW5Ub3AgPSB2YWx1ZTtcclxuXHRcdHRoaXMubWFyZ2luQm90dG9tID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgbWFyZ2luSG9yaXpvbnRhbCh2YWx1ZTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLm1hcmdpbkxlZnQgPSB2YWx1ZTtcclxuXHRcdHRoaXMubWFyZ2luUmlnaHQgPSB2YWx1ZTtcclxuXHR9XHJcbn0iXX0=
