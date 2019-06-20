import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { OthersComponent } from './others/others.component';
import { StoreComponent } from './store/store.component';
const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'others',
    component: OthersComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }