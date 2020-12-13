import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { LapsManagerComponent } from './laps-manager/laps-manager.component';
import { LapComponent } from './lap/lap.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    CustomButtonComponent,
    LapsManagerComponent,
    LapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
