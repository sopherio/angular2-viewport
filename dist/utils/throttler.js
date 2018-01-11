"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
function throttler(observable, throttleTime) {
    var subj = new Subject_1.Subject();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3Rocm90dGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1QztBQUd2QyxtQkFBNkIsVUFBeUIsRUFBRSxZQUFvQjtJQUMzRSxJQUFNLElBQUksR0FBZSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUN2QyxJQUFJLE9BQU8sR0FBcUIsS0FBSyxDQUFDO0lBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUVuQixVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3BCLElBQUksRUFBRSxVQUFBLENBQUM7WUFDTixPQUFPLElBQUksWUFBWSxDQUFDLE9BQWlCLENBQUMsQ0FBQztZQUUzQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBRUQsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFNUM7Z0JBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0YsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDO0tBQ0QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBMUJELDhCQTBCQyIsImZpbGUiOiJ1dGlscy90aHJvdHRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVyPFQ+KG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sIHRocm90dGxlVGltZTogbnVtYmVyKTpPYnNlcnZhYmxlPFQ+IHtcblx0Y29uc3Qgc3ViajogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XG5cdGxldCB0aW1lb3V0OiBudW1iZXIgfCBib29sZWFuID0gZmFsc2U7XG5cdGxldCBhbGxvd2VkID0gdHJ1ZTtcblxuXHRvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG5cdFx0bmV4dDogZSA9PiB7XG5cdFx0XHR0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0IGFzIG51bWJlcik7XG5cblx0XHRcdGlmIChhbGxvd2VkKSB7XG5cdFx0XHRcdGFsbG93ZWQgPSBmYWxzZTtcblx0XHRcdFx0c3Viai5uZXh0KGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aHJvdHRsZVRpbWUpO1xuXG5cdFx0XHRmdW5jdGlvbiBoYW5kbGVyKCkge1xuXHRcdFx0XHRhbGxvd2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRzdWJqLmNvbXBsZXRlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc3Viai5zaGFyZSgpO1xufSJdfQ==
