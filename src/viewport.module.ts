import { NgModule } from '@angular/core';

import { DIRECTIVES } from './directives/index';
import { SERVICES } from './services/index';

@NgModule({
	imports: [
	],
	providers: [...SERVICES],
	declarations: [...DIRECTIVES],
	bootstrap: [],
	exports: [...DIRECTIVES]
})
export class ViewportModule {}