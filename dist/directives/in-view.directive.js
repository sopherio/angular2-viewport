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
var index_1 = require("../services/index");
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
        __metadata("design:paramtypes", [index_1.TriggerService,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaW4tdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUY7QUFFbkYsaUNBQXdDO0FBRXhDLDJDQUFtRDtBQUVuRCxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7QUFpQjlCO0lBTUMseUJBQ1MsT0FBdUIsRUFDeEIsRUFBYztRQURiLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQZCxZQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBT2xDLENBQUM7d0JBVlcsZUFBZTtJQWEzQixzQkFBSSxtQ0FBTTthQU1WO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDcEIsQ0FBQzthQVJELFVBQVcsS0FBSztZQURoQixpQkFLQztZQUhBLGdCQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFNRCx5Q0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKQSxjQUFLLENBQUM7WUFDTCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUNsRixpQkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUV6RCxNQUFNLENBQUMsQ0FDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ3hDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ3hHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQ3BHLENBQUM7SUFDSCxDQUFDO0lBRWMsdUJBQU8sR0FBdEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELENBQUM7SUFDRixDQUFDO0lBL0NEO1FBREMsYUFBTSxDQUFDLFFBQVEsQ0FBQzs7a0RBQ2lCO0lBVWxDO1FBREMsWUFBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7OztpREFLM0I7SUFqQlcsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQUksUUFBUSxNQUFHO1lBQ3pCLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLENBQUM7eUNBUWlCLHNCQUFjO1lBQ3BCLGlCQUFVO09BUlYsZUFBZSxDQW1EM0I7SUFBRCxzQkFBQzs7Q0FuREQsQUFtREMsSUFBQTtBQW5EWSwwQ0FBZTtBQXFENUI7SUFPQyxnQkFBWSxLQUFhO1FBQXpCLGlCQUlDO1FBVk0sY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLGdCQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDdkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBSSwwQkFBTTthQUFWLFVBQVcsS0FBYTtZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQWM7YUFBbEIsVUFBbUIsS0FBYTtZQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFnQjthQUFwQixVQUFxQixLQUFhO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0YsYUFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9pbi12aWV3LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgZGVmZXIsIGZvckVhY2ggfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgVHJpZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5jb25zdCBTRUxFQ1RPUiA9ICd2cC1pbi12aWV3JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XHJcblx0aW5maW5pdGU/OiBib29sZWFuO1xyXG5cdG1hcmdpbj86IG51bWJlcjtcclxuXHRtYXJnaW5Ib3Jpem9udGFsPzogbnVtYmVyO1xyXG5cdG1hcmdpblZlcnRpY2FsPzogbnVtYmVyO1xyXG5cdG1hcmdpblRvcD86IG51bWJlcjtcclxuXHRtYXJnaW5Cb3R0b20/OiBudW1iZXI7XHJcblx0bWFyZ2luTGVmdD86IG51bWJlcjtcclxuXHRtYXJnaW5SaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IGBbJHtTRUxFQ1RPUn1dYCxcclxuXHRleHBvcnRBczogU0VMRUNUT1JcclxufSlcclxuZXhwb3J0IGNsYXNzIEluVmlld0RpcmVjdGl2ZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnID0gbmV3IENvbmZpZyh7fSk7XHJcblx0QE91dHB1dChTRUxFQ1RPUilcclxuXHRwdWJsaWMgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0cHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSB0cmlnZ2VyOiBUcmlnZ2VyU2VydmljZSxcclxuXHRcdHB1YmxpYyBlbDogRWxlbWVudFJlZlxyXG5cdCkge1xyXG5cdH1cclxuXHJcblx0QElucHV0KFNFTEVDVE9SICsgJy1jb25maWcnKVxyXG5cdHNldCBjb25maWcodmFsdWUpIHtcclxuXHRcdGZvckVhY2godmFsdWUsICh2YWwsIGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9jb25maWdba2V5XSA9IHZhbDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbmZpZygpOklDb25maWcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZ1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0ZGVmZXIoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1YnMgPSB0aGlzLnRyaWdnZXIub2JzZXJ2YWJsZS5zdWJzY3JpYmUoSW5WaWV3RGlyZWN0aXZlLmhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblx0XHRcdEluVmlld0RpcmVjdGl2ZS5oYW5kbGVyLmNhbGwodGhpcyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGlzSW5WaWV3UG9ydCgpOmJvb2xlYW4ge1xyXG5cdFx0dmFyIHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0cmVjdC50b3AgPj0gMCAtIHRoaXMuX2NvbmZpZy5tYXJnaW5Ub3AgJiZcclxuXHRcdFx0cmVjdC5sZWZ0ID49IDAgLSB0aGlzLl9jb25maWcubWFyZ2luTGVmdCAmJlxyXG5cdFx0XHRyZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgdGhpcy5fY29uZmlnLm1hcmdpbkJvdHRvbSAmJlxyXG5cdFx0XHRyZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgdGhpcy5fY29uZmlnLm1hcmdpblJpZ2h0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgaGFuZGxlcih0aGlzOiBJblZpZXdEaXJlY3RpdmUpOnZvaWQge1xyXG5cdFx0aWYgKHRoaXMuaXNJblZpZXdQb3J0KCkpIHtcclxuXHRcdFx0dGhpcy5ldmVudC5lbWl0KCk7XHJcblx0XHRcdCF0aGlzLmNvbmZpZy5pbmZpbml0ZSAmJiB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIENvbmZpZyBpbXBsZW1lbnRzIElDb25maWcge1xyXG5cdHB1YmxpYyBtYXJnaW5Ub3AgPSAwO1xyXG5cdHB1YmxpYyBtYXJnaW5Cb3R0b20gPSAwO1xyXG5cdHB1YmxpYyBtYXJnaW5MZWZ0ID0gMDtcclxuXHRwdWJsaWMgbWFyZ2luUmlnaHQgPSAwO1xyXG5cdHB1YmxpYyBpbmZpbml0ZSA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih2YWx1ZTpJQ29uZmlnKSB7XHJcblx0XHRmb3JFYWNoKHZhbHVlLCAodmFsLCBrZXkpID0+IHtcclxuXHRcdFx0dGhpc1trZXldID0gdmFsO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXQgbWFyZ2luKHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubWFyZ2luSG9yaXpvbnRhbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tYXJnaW5WZXJ0aWNhbCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IG1hcmdpblZlcnRpY2FsKHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubWFyZ2luVG9wID0gdmFsdWU7XHJcblx0XHR0aGlzLm1hcmdpbkJvdHRvbSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2V0IG1hcmdpbkhvcml6b250YWwodmFsdWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5tYXJnaW5MZWZ0ID0gdmFsdWU7XHJcblx0XHR0aGlzLm1hcmdpblJpZ2h0ID0gdmFsdWU7XHJcblx0fVxyXG59Il19
