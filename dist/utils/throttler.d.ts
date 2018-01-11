import { Observable } from 'rxjs/Observable';
export declare function throttler<T>(observable: Observable<T>, throttleTime: number): Observable<T>;
