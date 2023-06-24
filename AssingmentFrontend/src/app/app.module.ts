import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton:true,
      preventDuplicates:true,
      progressAnimation:'increasing',
      positionClass:'tost-top-right',
      tapToDismiss:true,
      timeOut:3000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
