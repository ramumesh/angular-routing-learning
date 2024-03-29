import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { OthersComponent } from './others/others.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreComponent } from './store/store.component';
import { MessageService } from './message.service';
import { TestDirective } from './test.directive';
import { DataService } from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HomeComponent, MessagesComponent, OthersComponent, StoreComponent, TestDirective ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService, DataService]
})
export class AppModule { }
