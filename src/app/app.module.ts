import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
