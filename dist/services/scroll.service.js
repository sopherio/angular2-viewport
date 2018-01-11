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
require("rxjs/add/operator/throttleTime");
require("rxjs/add/operator/share");
require("rxjs/add/operator/debounceTime");
var index_1 = require("../utils/index");
var BUFFER_TIME = 100;
var DEBOUNCE_TIME = 180;
var THROTTLE_TIME = 180;
var ScrollService = /** @class */ (function () {
    function ScrollService() {
        this._subj = new Subject_1.Subject();
        this.boundSet = new Set();
        this.handler = ScrollService_1._handler.bind(this);
        this.onScroll = this._subj.throttleTime(BUFFER_TIME).share();
        this.onScrollEnd = this._subj.debounceTime(DEBOUNCE_TIME).share();
        this.onScrollStart = index_1.throttler(this._subj, THROTTLE_TIME);
        this.bind(window);
    }
    ScrollService_1 = ScrollService;
    /**
     * Binds its listener to the event target
     * to trigger checking position of in-view directive
     * or for emiting its scroll events
     *
     * Returns the unbinding function
     */
    ScrollService.prototype.bind = function (target) {
        if (!this.boundSet.has(target)) {
            target.addEventListener('scroll', this.handler);
            this.boundSet.add(target);
        }
        else {
            console.warn("The element had been bound by another call before, try to avoid binding more than once", target);
        }
        return this.unbind.bind(this, target);
    };
    /**
     * Removes its listener from the target
     */
    ScrollService.prototype.unbind = function (target) {
        if (this.boundSet.has(target)) {
            this.boundSet.delete(target);
            target.removeEventListener('scroll', this.handler);
        }
        else {
            console.warn("The element is not bound, maybe its been unbound by another call or never bound before", target);
        }
    };
    ScrollService._handler = function (e) {
        this._subj.next(e);
    };
    ScrollService = ScrollService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ScrollService);
    return ScrollService;
    var ScrollService_1;
}());
exports.ScrollService = ScrollService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHdDQUF1QztBQUV2QywwQ0FBd0M7QUFDeEMsbUNBQWlDO0FBQ2pDLDBDQUF3QztBQUV4Qyx3Q0FBMkM7QUFFM0MsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUMxQixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFHMUI7SUFvQkM7UUFuQlEsVUFBSyxHQUFtQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQW1CekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxpQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQixDQUFDO3NCQTFCVyxhQUFhO0lBNEJ6Qjs7Ozs7O09BTUc7SUFDSSw0QkFBSSxHQUFYLFVBQVksTUFBbUI7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx3RkFBd0YsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoSCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSw4QkFBTSxHQUFiLFVBQWMsTUFBbUI7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0ZBQXdGLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEgsQ0FBQztJQUNGLENBQUM7SUFFYyxzQkFBUSxHQUF2QixVQUE2QyxDQUFPO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUE5RFcsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0ErRHpCO0lBQUQsb0JBQUM7O0NBL0RELEFBK0RDLElBQUE7QUEvRFksc0NBQWEiLCJmaWxlIjoic2VydmljZXMvc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5cclxuaW1wb3J0IHsgdGhyb3R0bGVyIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xyXG5cclxuY29uc3QgQlVGRkVSX1RJTUUgPSAxMDA7XHJcbmNvbnN0IERFQk9VTkNFX1RJTUUgPSAxODA7XHJcbmNvbnN0IFRIUk9UVExFX1RJTUUgPSAxODA7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9zdWJqOiBTdWJqZWN0PEV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XHJcblx0cHJpdmF0ZSBib3VuZFNldCA9IG5ldyBTZXQ8RXZlbnRUYXJnZXQ+KCk7XHJcblx0cHJpdmF0ZSBoYW5kbGVyOiBFdmVudExpc3RlbmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaHJvdHRsZWQgU2Nyb2xsIEV2ZW50IG9mIGJvdW5kIHRhcmdldHNcclxuXHQgKi9cclxuXHRwdWJsaWMgb25TY3JvbGw6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEVtaXRzIHdoZW4gdGhlIHNjcm9sbGluZyBpcyBzdGFydGVkIG9uIGJvdW5kIHRhcmdldHNcclxuXHQgKi9cclxuXHRwdWJsaWMgb25TY3JvbGxTdGFydDogT2JzZXJ2YWJsZTxFdmVudD47XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVtaXRzIHdoZW4gdGhlIHNjcm9sbGluZyBpcyBmaW5pc2hlZCBvbiBib3VuZCB0YXJnZXRzXHJcblx0ICovXHJcblx0cHVibGljIG9uU2Nyb2xsRW5kOiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmhhbmRsZXIgPSBTY3JvbGxTZXJ2aWNlLl9oYW5kbGVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uU2Nyb2xsID0gdGhpcy5fc3Viai50aHJvdHRsZVRpbWUoQlVGRkVSX1RJTUUpLnNoYXJlKCk7XHJcblx0XHR0aGlzLm9uU2Nyb2xsRW5kID0gdGhpcy5fc3Viai5kZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSkuc2hhcmUoKTtcclxuXHRcdHRoaXMub25TY3JvbGxTdGFydCA9IHRocm90dGxlcih0aGlzLl9zdWJqLCBUSFJPVFRMRV9USU1FKTtcclxuXHRcdHRoaXMuYmluZCh3aW5kb3cpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQmluZHMgaXRzIGxpc3RlbmVyIHRvIHRoZSBldmVudCB0YXJnZXRcclxuXHQgKiB0byB0cmlnZ2VyIGNoZWNraW5nIHBvc2l0aW9uIG9mIGluLXZpZXcgZGlyZWN0aXZlXHJcblx0ICogb3IgZm9yIGVtaXRpbmcgaXRzIHNjcm9sbCBldmVudHNcclxuXHQgKiBcclxuXHQgKiBSZXR1cm5zIHRoZSB1bmJpbmRpbmcgZnVuY3Rpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgYmluZCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogKCkgPT4gdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuYm91bmRTZXQuaGFzKHRhcmdldCkpIHtcclxuXHRcdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlcik7XHJcblx0XHRcdHRoaXMuYm91bmRTZXQuYWRkKHRhcmdldCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiVGhlIGVsZW1lbnQgaGFkIGJlZW4gYm91bmQgYnkgYW5vdGhlciBjYWxsIGJlZm9yZSwgdHJ5IHRvIGF2b2lkIGJpbmRpbmcgbW9yZSB0aGFuIG9uY2VcIiwgdGFyZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy51bmJpbmQuYmluZCh0aGlzLCB0YXJnZXQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyBpdHMgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0XHJcblx0ICovXHJcblx0cHVibGljIHVuYmluZCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTp2b2lkIHtcclxuXHRcdGlmICh0aGlzLmJvdW5kU2V0Lmhhcyh0YXJnZXQpKSB7XHJcblx0XHRcdHRoaXMuYm91bmRTZXQuZGVsZXRlKHRhcmdldCk7XHJcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZXIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcIlRoZSBlbGVtZW50IGlzIG5vdCBib3VuZCwgbWF5YmUgaXRzIGJlZW4gdW5ib3VuZCBieSBhbm90aGVyIGNhbGwgb3IgbmV2ZXIgYm91bmQgYmVmb3JlXCIsIHRhcmdldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBfaGFuZGxlcih0aGlzOiBTY3JvbGxTZXJ2aWNlLCBlOkV2ZW50KTp2b2lkIHtcclxuXHRcdHRoaXMuX3N1YmoubmV4dChlKTtcclxuXHR9XHJcbn0iXX0=
