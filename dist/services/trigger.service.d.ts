import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ScrollService } from './scroll.service';
export declare class TriggerService {
    private _subj;
    observable: Observable<{}>;
    constructor(scroll: ScrollService);
    bind(obs: Observable<{}>): Subscription;
}
