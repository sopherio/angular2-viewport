import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';

import { throttler } from '../utils/index';

const BUFFER_TIME = 100;
const DEBOUNCE_TIME = 180;
const THROTTLE_TIME = 180;

@Injectable()
export class ScrollService {
	private _subj: Subject<Event> = new Subject();
	private boundSet = new Set<EventTarget>();
	private handler: EventListener;

	/**
	 * Throttled Scroll Event of bound targets
	 */
	public onScroll: Observable<Event>;
	
	/**
	 * Emits when the scrolling is started on bound targets
	 */
	public onScrollStart: Observable<Event>;

	/**
	 * Emits when the scrolling is finished on bound targets
	 */
	public onScrollEnd: Observable<Event>;

	constructor() {
		this.handler = ScrollService._handler.bind(this);
		this.onScroll = this._subj.throttleTime(BUFFER_TIME).share();
		this.onScrollEnd = this._subj.debounceTime(DEBOUNCE_TIME).share();
		this.onScrollStart = throttler(this._subj, THROTTLE_TIME);
		this.bind(window);
	}

	/**
	 * Binds its listener to the event target
	 * to trigger checking position of in-view directive
	 * or for emiting its scroll events
	 * 
	 * Returns the unbinding function
	 */
	public bind(target: EventTarget): () => void {
		if (!this.boundSet.has(target)) {
			target.addEventListener('scroll', this.handler);
			this.boundSet.add(target);
		}
		else {
			console.warn("The element had been bound by another call before, try to avoid binding more than once", target);
		}

		return this.unbind.bind(this, target);
	}

	/**
	 * Removes its listener from the target
	 */
	public unbind(target: EventTarget):void {
		if (this.boundSet.has(target)) {
			this.boundSet.delete(target);
			target.removeEventListener('scroll', this.handler);
		}
		else {
			console.warn("The element is not bound, maybe its been unbound by another call or never bound before", target);
		}
	}

	private static _handler(this: ScrollService, e:Event):void {
		this._subj.next(e);
	}
}