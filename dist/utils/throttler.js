"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function throttler(observable, throttleTime) {
    var subj = new rxjs_1.Subject();
    var timeout = false;
    var allowed = true;
    observable.subscribe({
        next: function (e) {
            timeout && clearTimeout(timeout);
            if (allowed) {
                allowed = false;
                subj.next(e);
            }
            timeout = setTimeout(handler, throttleTime);
            function handler() {
                allowed = true;
            }
        },
        complete: function () {
            subj.complete();
        }
    });
    return subj.share();
}
exports.throttler = throttler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3Rocm90dGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEyQztBQUUzQyxtQkFBNkIsVUFBeUIsRUFBRSxZQUFvQjtJQUMzRSxJQUFNLElBQUksR0FBZSxJQUFJLGNBQU8sRUFBRSxDQUFDO0lBQ3ZDLElBQUksT0FBTyxHQUFxQixLQUFLLENBQUM7SUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRW5CLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDcEIsSUFBSSxFQUFFLFVBQUEsQ0FBQztZQUNOLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBaUIsQ0FBQyxDQUFDO1lBRTNDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUM7WUFFRCxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUU1QztnQkFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDRixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUM7S0FDRCxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUExQkQsOEJBMEJDIiwiZmlsZSI6InV0aWxzL3Rocm90dGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlcjxUPihvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LCB0aHJvdHRsZVRpbWU6IG51bWJlcik6T2JzZXJ2YWJsZTxUPiB7XG5cdGNvbnN0IHN1Ymo6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuXHRsZXQgdGltZW91dDogbnVtYmVyIHwgYm9vbGVhbiA9IGZhbHNlO1xuXHRsZXQgYWxsb3dlZCA9IHRydWU7XG5cblx0b2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuXHRcdG5leHQ6IGUgPT4ge1xuXHRcdFx0dGltZW91dCAmJiBjbGVhclRpbWVvdXQodGltZW91dCBhcyBudW1iZXIpO1xuXG5cdFx0XHRpZiAoYWxsb3dlZCkge1xuXHRcdFx0XHRhbGxvd2VkID0gZmFsc2U7XG5cdFx0XHRcdHN1YmoubmV4dChlKTtcblx0XHRcdH1cblxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGhyb3R0bGVUaW1lKTtcblxuXHRcdFx0ZnVuY3Rpb24gaGFuZGxlcigpIHtcblx0XHRcdFx0YWxsb3dlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0c3Viai5jb21wbGV0ZSgpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHN1Ymouc2hhcmUoKTtcbn0iXX0=
