import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptor } from './interceptors/http-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:HttpInterceptor,
      multi:true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
