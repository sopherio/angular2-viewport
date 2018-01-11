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
var index_1 = require("../services/index");
var ScrollableContentDirective = /** @class */ (function () {
    function ScrollableContentDirective(el, scroll) {
        this.el = el;
        this.scroll = scroll;
        this.scrollTargets = [];
    }
    ScrollableContentDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.targetSelector) {
            var list = Array.prototype.slice.call(this.el.nativeElement.querySelectorAll(this.targetSelector));
            (_a = this.scrollTargets).push.apply(_a, list);
            !list.length && this.scrollTargets.push(this.el.nativeElement);
        }
        else {
            this.scrollTargets.push(this.el.nativeElement);
        }
        this.scrollTargets.forEach(function (el) {
            _this.scroll.bind(el);
        });
        var _a;
    };
    ScrollableContentDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this.scrollTargets.forEach(function (el) {
            _this.scroll.unbind(el);
        });
    };
    __decorate([
        core_1.Input('vp-scrollable-content'),
        __metadata("design:type", String)
    ], ScrollableContentDirective.prototype, "targetSelector", void 0);
    ScrollableContentDirective = __decorate([
        core_1.Directive({
            selector: '[vp-scrollable-content]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            index_1.ScrollService])
    ], ScrollableContentDirective);
    return ScrollableContentDirective;
}());
exports.ScrollableContentDirective = ScrollableContentDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2Nyb2xsYWJsZS1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUU3RCwyQ0FBa0Q7QUFLbEQ7SUFLQyxvQ0FDUyxFQUFjLEVBQ2QsTUFBcUI7UUFEckIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFKdEIsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO0lBS3ZDLENBQUM7SUFFSSxvREFBZSxHQUF2QjtRQUFBLGlCQWVDO1FBYkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTSxJQUFJLEdBQWtCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUVwSCxDQUFBLEtBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQSxDQUFDLElBQUksV0FBSSxJQUFJLEVBQUU7WUFDakMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDOztJQUNKLENBQUM7SUFFTyxnREFBVyxHQUFuQjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTdCRDtRQURDLFlBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7c0VBQ0E7SUFGbkIsMEJBQTBCO1FBSHRDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUseUJBQXlCO1NBQ25DLENBQUM7eUNBT1ksaUJBQVU7WUFDTixxQkFBYTtPQVBsQiwwQkFBMEIsQ0FnQ3RDO0lBQUQsaUNBQUM7Q0FoQ0QsQUFnQ0MsSUFBQTtBQWhDWSxnRUFBMEIiLCJmaWxlIjoiZGlyZWN0aXZlcy9zY3JvbGxhYmxlLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW3ZwLXNjcm9sbGFibGUtY29udGVudF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxhYmxlQ29udGVudERpcmVjdGl2ZSB7XHJcblx0QElucHV0KCd2cC1zY3JvbGxhYmxlLWNvbnRlbnQnKVxyXG5cdHByaXZhdGUgdGFyZ2V0U2VsZWN0b3I6IHN0cmluZztcclxuXHRwcml2YXRlIHNjcm9sbFRhcmdldHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSBzY3JvbGw6IFNjcm9sbFNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdHByaXZhdGUgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XHJcblxyXG5cdFx0aWYgKHRoaXMudGFyZ2V0U2VsZWN0b3IpIHtcclxuXHRcdFx0Y29uc3QgbGlzdDogSFRNTEVsZW1lbnRbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0U2VsZWN0b3IpKTtcclxuXHJcblx0XHRcdHRoaXMuc2Nyb2xsVGFyZ2V0cy5wdXNoKC4uLmxpc3QpO1xyXG5cdFx0XHQhbGlzdC5sZW5ndGggJiYgdGhpcy5zY3JvbGxUYXJnZXRzLnB1c2godGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcm9sbFRhcmdldHMucHVzaCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2Nyb2xsVGFyZ2V0cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0dGhpcy5zY3JvbGwuYmluZChlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbmdPbkRlc3Ryb3koKTp2b2lkIHtcclxuXHRcdHRoaXMuc2Nyb2xsVGFyZ2V0cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0dGhpcy5zY3JvbGwudW5iaW5kKGVsKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==
