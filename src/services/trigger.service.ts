import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ScrollService } from './scroll.service';

@Injectable()
export class TriggerService {
	private _subj = new Subject<{}>();
	public observable = this._subj.share();

	constructor(scroll: ScrollService) {
		this.bind(scroll.onScroll);
	}

	public bind(obs: Observable<{}>):Subscription {
		return obs.subscribe(() => {
			this._subj.next();
		});
	}
}