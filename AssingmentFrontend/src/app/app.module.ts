import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { StatesComponent } from './components/states/states.component';
import { FormsModule } from '@angular/forms';
import { StateService } from './services/state.service';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HttpInterceptor } from './core/interceptors/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton:true,
      preventDuplicates:true,
      positionClass:'toast-top-right',
      tapToDismiss:true,
      timeOut:5000,
    }),
    FormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptor,
      multi:true
    },



    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
