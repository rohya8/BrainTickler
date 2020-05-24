import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { BrainTicklerComponent } from './brain-tickler/brain-tickler.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BrainTicklerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
