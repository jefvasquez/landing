import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Services } from './services';


@NgModule({
  imports: [
    MaterialModule,
  ],
  providers: [
    ...Services,
  ],
  exports: [ MaterialModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
